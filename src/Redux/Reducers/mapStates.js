//States Interface
export default{
    // getAppIsLoading : (state) => state.App.isLoading,
    getAppIsSuccess : (state) => state.App.isSuccess,
    // getAppErr : (state) => state.App.err,



    getFetchList : (state) => state.UI.list,
    getFetchPost : (state) => state.UI.post,
    getPostAuthor : (state) => state.UI.post.userId,

    getAuthIsLogged : (state) => state.Auth.isLogged,

    getFormValue : (state,typeName) => state.Form[typeName],
    getFormIsPosting : (state) => state.Form.isPosting,

}