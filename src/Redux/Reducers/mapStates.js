//States Interface
export default{
    getFetchList : (state) => state.UI.list,
    getFetchPost : (state) => state.UI.post,
    getAppIsLoading : (state) => state.App.isLoading,
    getAppIsSuccess : (state) => state.App.isSuccess,
    getAppErr : (state) => state.App.err,
}