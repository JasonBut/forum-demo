import {take,put,fork,call} from "redux-saga/effects"
import Types from "../ActionsTypes"
import {asyncFetch} from "../../Utils";

const authLoginRequest = function* (payload) {
    if (!payload) {throw new Error(`Invalid params`)}

    const {username,password} = payload;

    try {
        yield put({type : Types.FETCH_START}); //开始发送获取请求

        //根据账号获取用户信息
        const response = yield call(asyncFetch.get,{
            type : "username",
            rule : username
        });
        const [userProfile] = response;

        // 账号信息不存在返回空数组
        if (!userProfile) {
            throw new Error(`用户名不存在`);
        }

        //校检密码
        if (!!userProfile && userProfile.password === password) {
            //本地缓存数据
            sessionStorage.setItem("isLogged","true");
            sessionStorage.setItem("authUserId",`${userProfile.id}`);
            sessionStorage.setItem("authNickname",`${userProfile.nickname}`);

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
            throw new Error(`密码错误，请重新输入`)
        }
    } catch (err) {
        yield put({type : Types.REQUEST_FAILED, err}); //获取数据失败
        yield put({type : Types.AUTH_LOGIN_FAILED});   //登录失败失败
    }
};

//注销时把session缓存清除
const authLogoutRequest = () => {
    sessionStorage.removeItem("isLogged");
    sessionStorage.removeItem("authUserId");
    sessionStorage.removeItem("authNickname");
    setTimeout(() => {  //注销成功后返回上一页
        window.history.go(-1);
    },2000)
};

export const watchAuthLoginRequest = function* () {
    while (true) {
        const {payload} = yield take(Types.AUTH_LOGIN_REQUESTED);
        yield fork(authLoginRequest,payload);
    }
};

export const watchAuthLogoutRequest = function* () {
    while (true) {
        yield take(Types.AUTH_LOGOUT);
        yield fork(authLogoutRequest);
    }
};