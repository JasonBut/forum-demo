import {put, call, take, fork} from "redux-saga/effects"
import Types from "../ActionsTypes"
import {asyncFetch} from "../../Utils"
import idGenerator from "../../Utils/api/idGenerator";

const postData = function* (payload) {

    if (!payload) {
        return yield put({type : Types.REQUEST_FAILED},`Invalid payload.`);
    }

    const {authorId : userId,mode,pathId,title,content,isComment} = payload;
    const isAmend = (mode && mode.toLowerCase()) === "amend";       //判断是否编辑模式

    try {
        yield put({type : Types.FETCH_START});

        //判断评论还是文章
        const dataType = isComment ? "comment" : "post";

        //判断数据所属区域类型
        const dataBelongs = (dataType === "comment") ? "post" : "board";

        let asyncMethods;
        let dataBelongsId;
        let submitId;

        /*
        * 编辑模式下根据帖子路径id从数据库获取帖子信息,提取boardId
        * 需要提交上去的id只需要根据原帖子的pathId拼凑而成
        * 并将asyncFetch请求方式调整为put
        */
        if (isAmend) {
            submitId = `post_${pathId}`;
            dataBelongsId = yield call(asyncFetch.get,{type : "post", rule : pathId});
            dataBelongsId = dataBelongsId && dataBelongsId.boardId;
            asyncMethods = "put";
        } else {
         /*
         * 发布模式则只需将传入的数据拼凑出归属id
         * 但需同步数据库获取最新帖子/评论id,传入计算器计算新的id
         * 并传回数据库进行更新
         */
            const currentId = yield call(asyncFetch.get,{type : `${dataType}_pool_id`});
            submitId = idGenerator(dataType)(currentId.current).next().value;
            dataBelongsId = `${dataBelongs}_${pathId}`;
            asyncMethods = "post";
            //更新数据库id池信息
            yield call(asyncFetch.put,{
                type : `${dataType}_pool_id`,
                data : {
                    current : +(submitId.split("_")[1]),
                }
            });
        }

        //按数据库格式生成数据
        let data = {
            id : submitId,
            [`${dataBelongs}Id`] : dataBelongsId,
            [`${dataType}Date`] : new Date().toLocaleString(),
            userId,
            content,
        };

        //如有title数据则混入到data中,否则原样返回
        data = Object.assign(data, (title ? {title} : {}) );


        //上传数据
        yield call(asyncFetch[asyncMethods],{
            type : `${dataType}`,
            rule : submitId,        //put需要用id定位原来的帖子
            data,
        });

        yield put({type : Types.FORM_VALUE_PUBLISH_SUCCEEDED});
        window.history.go(0)

    } catch (err) {
        yield put({type : Types.REQUEST_FAILED, err});
    }
};

export const watchPostData = function* () {
    while (true) {
        const {payload} = yield take(Types.FORM_VALUE_PUBLISH_REQUESTED);
        yield fork(postData,payload);
    }
};