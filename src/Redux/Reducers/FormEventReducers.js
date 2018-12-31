import Types from "../ActionsTypes"

//初始State
const initialState = {
    loginUsername : "Jason",
    loginPassword : "aaaaaa",
    postTitle : "",
    postContent : "",
    commentContent : "",
    isPosting : false,
};

//Reducers
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