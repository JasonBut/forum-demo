//States Interface
export default (stores) => {
    const state = stores.getState;

    return {

        getFetchData : function (value) {
            if (value && (value.toLowerCase() === "list" || value.toLowerCase() === "post")) {
                return state && state().UI[value];
            }
        },

        getPathId : function () {
            const pathname = state && state().router.location.pathname;
            if (pathname && typeof pathname === 'string') {
                const path = pathname.split("/");
                return +path[path.length-1];
            }
        }

    }
};
