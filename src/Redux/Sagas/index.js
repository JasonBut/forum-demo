import {all, fork} from "redux-saga/effects";
import {watchFetchList} from "./UISaga";


export default function* rootSagas () {
    yield all([
        fork(watchFetchList),
    ])
}