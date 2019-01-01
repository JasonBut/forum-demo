import {take,put,fork,call} from "redux-saga/effects"
import Types from "../ActionsTypes"
import {asyncGetData} from "../../Utils";


function* authLoginRequest(params) {
    if (!params) {return new Error(`Invalid params`)}

    // console.log(params);
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
            yield put({
                type : Types.AUTH_LOGIN_SUCCEEDED,
                authUserId : userProfile.id,
                authNickname : userProfile.nickname,
            });

            setTimeout(() => {
                window.history.go(-1);
            },2000)

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


export function* watchAuthLoginRequest () {
    while (true) {
        const {params} = yield take(Types.AUTH_LOGIN_REQUESTED);
        yield fork(authLoginRequest,params);
    }
}