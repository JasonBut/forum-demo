//States Interface
export default{
    getFetchList : (state) => state.UI.list,
    getFetchPost : (state) => state.UI.post,
    getAppIsLoading : (state) => state.App.isLoading,
    getAppIsSuccess : (state) => state.App.isSuccess,
    getAppErr : (state) => state.App.err,

    getPathId : function (state) {
        const pathname = state && state.router.location.pathname;
        if (pathname && typeof pathname === 'string') {
            const path = pathname.split("/");
            return +path[path.length-1];
        }
        return new Error(`Cannot get the pathId`);
    },
}