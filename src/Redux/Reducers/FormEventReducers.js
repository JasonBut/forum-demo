import Types from "../ActionsTypes"

const initialState = {
    loginUsername : "jy1534",
    loginPassword : "aaaaaa",
    regNickname : "But Chi Fai",
    postTitle : "",
    postContent : "",
    commentContent : "",
    isPosting : false,
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

        case Types.FORM_VALUE_PUBLISH_SUCCEEDED :
            return {
                ...state,
                postTitle : "",
                postContent : "",
                commentContent : "",
                isPosting : false,
            };

        case Types.AUTH_LOGIN_SUCCEEDED :
            return {
                ...state,
                loginUsername: "",
                loginPassword: "",
            };

        default :
            return state;
    }
}