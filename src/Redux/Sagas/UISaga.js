import {put, call, take, fork} from "redux-saga/effects"
import Types from "../ActionsTypes"
import {asyncFetch} from "../../Utils"


function* fetchData(params) {
    yield put({type : Types.FETCH_START}); //开始获取数据

    //得到有效的数据才继续,否则直接返回错误信息
    if (!params) {
        return yield put({type : Types.REQUEST_FAILED, err : `Invalid path`});
    }

    try {
        let author = null,
            newData = null;

        const data = yield call(asyncFetch,params);  //异步从数据库获取信息

        //封装一个通过id获取用户资料的函数
        const getAuthor = (id) => asyncFetch({
            mode: "GET",
            type: "userId" ,
            rule : `${id}`
        });

        //从数据库返回的数据必须是对象或数组类型之一
        if (typeof data !== "object") {
            throw new Error(`Typeof data which got should be "object" or "array`);
        }

        //数组代表列表数据
        if (Array.isArray(data)) {
            newData = [];


            //根据列表中每个条目的userId去计算发布者昵称
            //如没有userId,则表示这是板块列表,直接返回
            for (let item of data) {
                if (!item.userId){
                    newData = [...data];
                    break

                } else {
                    author = yield call(getAuthor,item.userId);

                    //有postDate表示这是帖子列表,倒序排列
                    newData[ item.postDate ? "unshift" : "push"]({...item, author : author.nickname});
                }
            }

            yield put({type : Types.UI_FETCH_LIST_SUCCEEDED, data : newData})

        //对象代表帖子数据
        } else {
            author = yield call(getAuthor,data.userId);
            newData = {...data, author :author.nickname, userId : data.userId};
            yield put({type : Types.UI_FETCH_POST_SUCCEEDED, data : newData})
        }

        yield put({type: Types.FETCH_SUCCEEDED}); //获取数据成功

    } catch (err) {
        yield put({type : Types.REQUEST_FAILED,err}); //获取数据失败
    }
}

export function* watchFetchData() {
    while (true) {
        const {params} = yield take(Types.UI_FETCH_REQUESTED);
        yield fork(fetchData,params);
    }
}