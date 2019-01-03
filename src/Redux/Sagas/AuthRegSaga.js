import {fork, call, put, take} from "redux-saga/effects";
import Types from "../ActionsTypes";
import {asyncFetch,idGenerator} from "../../Utils";

const authRegRequest = function* (payload) {
    if (!payload) {
        return yield put({type : Types.REQUEST_FAILED, err: `No payload provided`})
    }

    const {username,password,nickname} = payload;

    try {
        yield put({type : Types.FETCH_START});

        //检车账号和昵称是否已存在
        const [checkUsername] = yield call(asyncFetch.get,{type : "username", rule : username});
        if (checkUsername) {
            throw new Error(`账号已存在`);
        }

        const [checkNickname] = yield call(asyncFetch.get,{type : "nickname", rule : nickname});
        if (checkNickname) {
            throw new Error(`昵称已存在`);
        }

        //从id池获取最新用户id,并传入生成器生成新的id
        const currentId = yield call(asyncFetch.get,{type : "user_pool_id"});
        const newId = idGenerator("user")(currentId.current).next().value;

        //根据数据库结构生成数据
        const data = {
            id : newId,
            username : username,
            password : password,
            nickname : nickname
        };

        yield call(asyncFetch.post,{type : "user", data});

        //更新id池
        yield call(asyncFetch.put,{
            type : "user_pool_id",
            data : {
                current : +(newId.split("_")[1]),
            }
        });

        yield put({type : Types.FETCH_SUCCEEDED});
        yield put({type : Types.AUTH_LOGIN_SUCCEEDED});     //注册成功便立即登录

        setTimeout(() => {
            window.history.go(-2); //返回到注册页面的上一页
        },2000)

    } catch (err) {
        yield put({type : Types.REQUEST_FAILED, err})
    }
};

export const watchAuthRegRequest = function* () {
    while (true) {
        const {payload} = yield take(Types.AUTH_REGISTER_REQUESTED);
        yield fork(authRegRequest,payload);
    }
};