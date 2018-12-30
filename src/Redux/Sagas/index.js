import {all, fork} from "redux-saga/effects";
import {watchFetchData} from "./UISaga";
import {watchAuthRequest} from "./AuthSaga";


export default function* rootSagas () {
    yield all([
        fork(watchFetchData),
        fork(watchAuthRequest),
    ])
}