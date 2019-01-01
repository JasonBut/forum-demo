import {put, call, take, fork} from "redux-saga/effects"
import Types from "../ActionsTypes"
import {asyncGetData} from "../../Utils"


function* fetchData(params) {
    yield put({type : Types.FETCH_START});

    if (!params) {
        yield put({type : Types.FETCH_FAILED, err : `Invalid path`});
    }
    try {
        const data = yield call(asyncGetData,params);
        const getAuthor = (id) => asyncGetData({type: "userId" , rule : `${id}`});

        if (typeof data !== "object") {
            return new Error(`Fetched data should be "object" or "array`);
        }

        //数组代表list数据
        if (Array.isArray(data)) {
            const newData = [];
            //根据列表中每项的userId去计算发布者昵称
            //如没有userId,则代表是boards列表,直接返回
            for (let item of data) {
                if (!item.userId){
                    newData.push(item);
                } else {
                    const author = yield call(getAuthor,item.userId);
                    newData.push({...item,author : author.nickname});
                }
            }
            yield put({type : Types.UI_FETCH_LIST_SUCCEEDED, data : newData})

            //非数组代表post数据
        } else {
            const author = yield call(getAuthor,data.userId);
            const newData = {...data, author :author.nickname, userId : data.userId};
            yield put({type : Types.UI_FETCH_POST_SUCCEEDED, data : newData})
        }

        yield put({type: Types.FETCH_SUCCEEDED});

    } catch (err) {
        yield put({type : Types.FETCH_FAILED,err});
    }
}

export function* watchFetchData() {
    while (true) {
        const {params} = yield take(Types.UI_FETCH_REQUESTED);
        yield fork(fetchData,params);
    }
}