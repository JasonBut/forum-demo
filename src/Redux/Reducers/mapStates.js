//States Interface
export default (stores) => ({

    getFetchData : function (value) {
        if (value && (value.toLowerCase() === "list" || value.toLowerCase() === "post")) {
            return stores.getState().UI[value];
        }
    },

});
