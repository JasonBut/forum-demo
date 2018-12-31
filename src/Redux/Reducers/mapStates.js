//States Interface
export default{
    // getAppIsLoading : (state) => state.App.isLoading,
    getAppIsSuccess : (state) => state.App.isSuccess,
    // getAppErr : (state) => state.App.err,



    getList : (state) => state.UI.list,
    getPost : (state) => state.UI.post,

    getAuthIsLogged : (state) => state.Auth.isLogged,
    getAuthUserId : (state) => state.Auth.authUserId,

    getFormValue : (state,elemName) => state.Form[elemName],
    getFormIsPosting : (state) => state.Form.isPosting,

}