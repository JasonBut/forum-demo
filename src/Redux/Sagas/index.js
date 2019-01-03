import {all, fork} from "redux-saga/effects";
import {watchFetchData} from "./UISaga";
import {watchAuthLoginRequest, watchAuthLogoutRequest} from "./AuthLogSaga";
import {watchPostData} from "./PublishSaga";
import {watchAuthRegRequest} from "./AuthRegSaga";


export default function* rootSagas () {
    yield all([
        fork(watchFetchData),
        fork(watchAuthLoginRequest),
        fork(watchAuthLogoutRequest),
        fork(watchPostData),
        fork(watchAuthRegRequest),
    ])
}