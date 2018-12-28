import {put, call, take, fork} from "redux-saga/effects"
import axios from "axios";
import Types from "../ActionsTypes"


function* fetchData(params, mode) {
    if (!params) {
        return new Error(`Params should be a defined value`);
    }

    try {
        const fetchData = yield call(axios.get,`http://localhost:4000/${params}`);
        if (fetchData.status !== 200) {
            return new Error(fetchData.statusText);
        }

        //返回列表信息
        if (mode === "list") {
            if (!Array.isArray(fetchData.data)) {
                return new Error(`Fetched data should be "array"`);
            }
            yield put({type : Types.FETCH_LIST_SUCCEEDED, data : fetchData.data});

        //返回文章信息
        } else {
            if (typeof fetchData.data !== "object") {
                return new Error(`Fetched data should be "object"`);
            }
            yield put({type : Types.FETCH_POST_SUCCEEDED, data : fetchData.data});
        }

    } catch (err) {
        yield put({type : Types.FETCH_FAILED,err});
    }
}

export function* watchFetchList() {
    while (true) {
        const {params,mode} = yield take(Types.FETCH_REQUESTED);
        yield fork(fetchData,params,mode);
    }
}

