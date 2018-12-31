import {take,put,fork,call} from "redux-saga/effects"
import Types from "../ActionsTypes"
import {asyncGetData} from "../../Utils";


function* authRequest(params) {
    if (!params) {return new Error(`Invalid params`)}

    const {username,password} = params;
    try {
        yield put({type : Types.FETCH_START});

        const response = yield call(asyncGetData,{type : "username",rule : username});
        const [userProfile] = response;

        if (!userProfile.id) {
            yield put({type : Types.AUTH_LOGIN_FAILED, logErr : `Username is not exists`});
        }
        yield put({type : Types.FETCH_SUCCEEDED});

        if (userProfile.password === password) {
            yield put({type : Types.AUTH_LOGIN_SUCCEEDED, authUserId : userProfile.id});

        } else {
            yield put({
                type : Types.AUTH_LOGIN_FAILED,
                logErr : `Incorrect password,please try again.`
            });
        }
    } catch (err) {
        yield put({type : Types.FETCH_FAILED, err : err});
    }
}


export function* watchAuthRequest () {
    const {params} = yield take(Types.AUTH_LOGIN_REQUESTED);
    yield fork(authRequest,params);
}