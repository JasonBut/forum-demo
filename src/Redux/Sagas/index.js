import {all, fork} from "redux-saga/effects";
import {watchFetchData} from "./UISaga";
import {watchAuthLoginRequest, watchAuthLogoutRequest} from "./AuthSaga";
import {watchPostData} from "./PublishSaga";


export default function* rootSagas () {
    yield all([
        fork(watchFetchData),
        fork(watchAuthLoginRequest),
        fork(watchAuthLogoutRequest),
        fork(watchPostData),
    ])
}