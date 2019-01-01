import {take,put,fork,call} from "redux-saga/effects"
import Types from "../ActionsTypes"
import {asyncGetData} from "../../Utils";

function* authLoginRequest(params) {
    if (!params) {throw new Error(`Invalid params`)}

    const {username,password} = params;

    //检查提交的用户名和密码是否存在
    if (!username || !password) {
        return yield put({type : Types.AUTH_LOGIN_FAILED, logErr : `请输入用户名和密码`});
    }

    try {
        yield put({type : Types.FETCH_START}); //开始发送获取请求

        const response = yield call(asyncGetData,{type : "username",rule : username}); //根据账号获取用户信息
        const [userProfile] = response;

        // 账号信息不存在返回空数组
        if (!userProfile) {
            yield put({type : Types.AUTH_LOGIN_FAILED, logErr : `用户名不存在`});
            throw new Error(`Username is not exists.`);
        }

        yield put({type : Types.FETCH_SUCCEEDED}); //只要获取到账号信息,就发送请求完成状态

        //校检密码
        if (userProfile && userProfile.password === password) {
            yield put({
                type : Types.AUTH_LOGIN_SUCCEEDED,
                authUserId : userProfile.id,
                authNickname : userProfile.nickname,
            });

            //密码正确,登陆成功返回上一个页面
            setTimeout(() => {
                window.history.go(-1);
            },2000)

        //密码错误
        } else {
            yield put({
                type : Types.AUTH_LOGIN_FAILED,
                logErr : `密码错误，请重新输入`
            });
        }
    } catch (err) {
        yield put({type : Types.FETCH_FAILED, err : err}); //获取数据失败
    }
}


export function* watchAuthLoginRequest () {
    while (true) {
        const {params} = yield take(Types.AUTH_LOGIN_REQUESTED);
        yield fork(authLoginRequest,params);
    }
}