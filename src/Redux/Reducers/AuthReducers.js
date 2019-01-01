import Types from "../ActionsTypes"

const initialState = {
    isLogged : !!sessionStorage.getItem("isLogged") || false,
    authNickname : sessionStorage.getItem("authNickname") || "",
    authUserId : sessionStorage.getItem("authUserId") || "",
};


export default function AuthReducer (state = initialState, action) {
    switch (action.type) {

        case Types.AUTH_LOGIN_SUCCEEDED :
            return {
                isLogged: true,
                authUserId: action.authUserId,
                authNickname: action.authNickname,
            };

        case Types.REQUEST_FAILED :
            return {
                ...state,
                isLogged : false,
            };

        case Types.AUTH_LOGOUT :
            return {
                isLogged: false,
                authUserId: "",
                authNickname : "",
            };


        default :
            return state;
    }
}