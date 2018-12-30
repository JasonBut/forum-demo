//States Interface
export default{
    getAppIsLoading : (state) => state.App.isLoading,
    getAppIsSuccess : (state) => state.App.isSuccess,
    getAppErr : (state) => state.App.err,

    getFetchList : (state) => state.UI.list,
    getFetchPost : (state) => state.UI.post,

    getAuthIsLogged : (state) => state.Auth.isLogged,

}