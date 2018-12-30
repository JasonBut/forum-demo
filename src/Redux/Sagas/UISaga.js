import {put, call, take, fork} from "redux-saga/effects"
import Types from "../ActionsTypes"
import {asyncGet,getUserById} from "../../Utils"


function* fetchData(params) {
    yield put({type : Types.FETCH_START});

    if (!params) {
        yield put({type : Types.FETCH_FAILED, err : `Invalid path`});
    }
    try {
        const response = yield call(asyncGet,params);
        if (response.status !== 200) {
            return new Error(response.statusText);
        }

        const data = response.data;


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
                    const author = yield call(getUserById,item.userId);
                    newData.push({...item,author});
                }
            }
            yield put({type : Types.FETCH_LIST_SUCCEEDED, data : newData})

            //非数组代表post数据
        } else {
            const author = yield call(getUserById,data.userId);
            const newData = {...data,author};
            yield put({type : Types.FETCH_POST_SUCCEEDED, data : newData})
        }

        yield put({type: Types.FETCH_SUCCEEDED});

    } catch (err) {
        yield put({type : Types.FETCH_FAILED,err});
    }
}
export function* watchFetchList() {
    while (true) {
        const {params} = yield take(Types.FETCH_REQUESTED);
        yield fork(fetchData,params);
    }
}