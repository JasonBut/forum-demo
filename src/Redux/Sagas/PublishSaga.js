import {put, call, take, fork} from "redux-saga/effects"
import Types from "../ActionsTypes"
import {asyncFetch} from "../../Utils"


function* postData() {


    try {
        yield put({type : Types.FETCH_START});


        yield put({type : Types.FETCH_SUCCEEDED});


        yield put({type : Types.FORM_VALUE_PUBLISH_SUCCEEDED});


        yield put({type : Types.FORM_VALUE_PUBLISH_FAILED});


    } catch (err) {
        yield put({type : Types.REQUEST_FAILED, err});
    }

}

export function* watchPostData() {
    while (true) {
        yield take(Types.FORM_VALUE_PUBLISH_REQUESTED);
        yield fork(postData);
    }
}