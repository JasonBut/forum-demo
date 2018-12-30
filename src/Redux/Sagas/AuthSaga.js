import {take,put,fork} from "redux-saga/effects"
import Types from "../ActionsTypes"


function* authRequest(params) {
    if (!params) {return new Error(`Invalid params`)}
    try {
        yield put({type : Types.FETCH_START});

        yield put({type : Types.AUTH_LOGIN_SUCCESS});

        yield put({type : Types.FETCH_SUCCEEDED});
    } catch (err) {
        yield put({type : Types.FETCH_FAILED});
    }
}


export function* watchAuthRequest () {
    const {params} = yield take(Types.AUTH_LOGIN_REQUESTED);
    yield fork(authRequest,params);
}