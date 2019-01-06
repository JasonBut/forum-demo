import {put, call, take, fork} from "redux-saga/effects"
import Types from "../ActionsTypes"
import {asyncFetch} from "../../Utils"


const fetchData = function* (payload) {
    yield put({type : Types.FETCH_START}); //开始获取数据

    try {
        const {type,rule} = payload;
        let author = null,      //用于稍后存放发布者名称
            newData = null;     //用于稍后存放返回给reducer的数据集合

        // 先根据id池判断请求列表数据的板块是否存在
        if (type.toLowerCase() === "posts") {
            const checkCurrentId = yield call(asyncFetch.get,{type : `board_pool_id`});
            if (rule > checkCurrentId.current) {
                throw new Error(`Board is not exists.`)
            }
        }

        const data = yield call(asyncFetch.get,payload);  //异步从数据库获取信息

        //封装一个通过id获取用户资料的函数
        const getAuthor = (id) => asyncFetch.get({
            type: "userId" ,
            rule : `${id}`
        });

        if (typeof data !== "object") {
            //从数据库返回的数据必须是对象或数组类型之一
            throw new Error(`Type of data which got should be "object" or "array`);
        }

        //数组代表列表数据
        if (Array.isArray(data)) {
            newData = [];

            const [first] = data;
            if (first && first.boardId) {
                const board = yield call(asyncFetch.get,{type : "board", rule : first.boardId});
                document.title = board.boardName;
            }

            //根据列表中每个条目的userId去计算发布者昵称
            //如没有userId但有boardName,则表示这是板块列表,直接返回
            for (const item of data) {
                if (!item.userId || item.boardName){
                    newData = [...data];
                    break

                } else {
                    author = yield call(getAuthor,item.userId);
                    //有postDate表示这是帖子列表,倒序排列
                    newData[ item.postDate ? "unshift" : "push"]({
                        ...item,
                        author : author.nickname,
                    });
                }
            }

            yield put({type : Types.UI_FETCH_LIST_SUCCEEDED, data : newData})

        //对象代表帖子数据
        } else {
            author = yield call(getAuthor,data.userId);

            newData = {
                ...data,
                author :author.nickname,
                userId : data.userId
            };
            document.title = data.title;
            yield put({type : Types.UI_FETCH_POST_SUCCEEDED, data : newData})
        }

    } catch (err) {
        yield put({type : Types.REQUEST_FAILED, err}); //获取数据失败
        yield put({type : Types.FETCH_NO_MATCH});
    }
};

export const watchFetchData = function*() {
    while (true) {
        const {payload} = yield take(Types.UI_FETCH_REQUESTED);
        yield fork(fetchData,payload);
    }
};