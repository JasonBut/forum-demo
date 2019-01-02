//States Interface
export default{
    getAppIsDone : (state) => state.App.isDone,                               //数据请求是否成功
    getErrorMessage : (state) => state.App.err && state.App.err.toString(),         //登录错误信息

    getList : (state) => state.UI.list,                                             //列表数据
    getPost : (state) => state.UI.post,                                             //帖子数据

    getAuthIsLogged : (state) => state.Auth.isLogged,                               //登录状态
    getAuthUserId : (state) => state.Auth.authUserId,                               //当前登录id
    getAuthNickname : (state) => state.Auth.authNickname,                           //当前登录用户昵称


    getFormValue : (state,elemName) => state.Form[elemName],                        //根据元素name属性获取表单数据
    getFormIsPosting : (state) => state.Form.isPosting,                             //是否正在发表帖子
}