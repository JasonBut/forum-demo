import {put, call, take, fork,select} from "redux-saga/effects"
import axios from "axios";
import Types from "../ActionsTypes"

function* fetchData(params) {
    if ( !(yield select((state) => state.App.isLoading))) {
        yield put({type : Types.FETCH_START});

        if (!params) {
            return new Error(`Params should be a defined value`);
        }

        try {
            const fetchData = yield call(axios.get,`http://localhost:4000/${params}`);
            if (fetchData.status !== 200) {
                return new Error(fetchData.statusText);
            }

            const data = fetchData.data;

            if (typeof data !== "object") {
                return new Error(`Fetched data should be "object" or "array`);
            }

            !!(Array.isArray(data))
            ? yield put({type : Types.FETCH_LIST_SUCCEEDED, data})
            : yield put({type : Types.FETCH_POST_SUCCEEDED, data});

            yield put({type: Types.FETCH_SUCCEEDED});

        } catch (err) {
            yield put({type : Types.FETCH_FAILED,err});

        }
    }
}
export function* watchFetchList() {
    while (true) {
        const {params} = yield take(Types.FETCH_REQUESTED);
        yield fork(fetchData,params);
    }
}

