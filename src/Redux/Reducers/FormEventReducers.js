import Types from "../ActionsTypes"

const initialState = {
    loginUsername : "Jason",
    loginPassword : "aaaaaa",
    postTitle : "",
    postContent : "",
    commentContent : "",
    isPosting : false,
    // isPublished : false,
};

export default function FormEventReducers (state = initialState, action) {
    switch (action.type) {

        case Types.FORM_VALUE_ONCHANGE :
            const {name,value} = action.payload;
            return {
                ...state,
                [name] : value,
            };

        case Types.FORM_TOGGLE_POSTING :
            return {
                ...state,
                isPosting : action.isPosting,
                postTitle : "",
                postContent : "",
                commentContent : "",
            };

        // case Types.FORM_VALUE_PUBLISH_REQUESTED :
        //     return {
        //         ...state,
        //         isPublished : false,
        //     };
        //
        // case Types.FORM_VALUE_PUBLISH_SUCCEEDED :
        //     return {
        //         ...state,
        //         isPublished : true,
        //     };

        case Types.AUTH_LOGIN_SUCCEEDED :
            return {
                ...state,
                loginUsername: "",
                loginPassword: "",
            };

        case Types.REQUEST_FAILED :
            return {
                ...state,
                isPublished : false,
            };

        default :
            return state;
    }
}