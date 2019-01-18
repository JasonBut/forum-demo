import {createSelector} from "reselect"

const getErrorMessage = (state) => !!state.App.err && state.App.err.toString();
const getList = (state) => state.UI.list;
const getPost = (state) => state.UI.post;
const getNoMatch = (state) => state.App.noMatch;
const getAuthIsLogged = (state) => state.Auth.isLogged;
const getAuthUserId = (state) => state.Auth.authUserId;
const getAuthNickname = (state) => state.Auth.authNickname;
const getFormValue = (state,elemName) => state.Form[elemName];
const getFormIsPosting = (state) => state.Form.isPosting;

//States Interface
export default{
    getNoMatch : createSelector(getNoMatch,(item) => item),              //数据没有返回
    getErrorMessage : createSelector(getErrorMessage,(item) => item),    //登录错误信息
    getList : createSelector(getList,(item) => item),                    //列表数据
    getPost :  createSelector(getPost,(item) => item),                   //帖子数据
    getAuthIsLogged :createSelector(getAuthIsLogged,(item) => item),     //登录状态
    getAuthUserId : createSelector(getAuthUserId,(item) => item),        //当前登录id
    getAuthNickname : createSelector(getAuthNickname,(item) => item),    //当前登录用户昵称
    getFormValue : createSelector(getFormValue,(item) => item),          //根据元素name属性获取表单数据
    getFormIsPosting : createSelector(getFormIsPosting,(item) => item),  //是否正在发表帖子
}