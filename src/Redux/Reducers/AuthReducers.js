import Types from "../ActionsTypes"

const initialState = {
    isLogged : false,
    authNickname : "",
    authUserId : "",
    logErr: null,
};


export default function AuthReducer (state = initialState, action) {
    switch (action.type) {

        case Types.AUTH_LOGIN_SUCCEEDED :
            return {
                isLogged: true,
                authUserId: action.authUserId,
                authNickname: action.authNickname,
                logErr: null,
            };

        case Types.AUTH_LOGIN_FAILED :
            return {
                ...state,
                isLogged:false,
                logErr: action.logErr,
            };

        case Types.AUTH_LOGOUT :
            return {
                isLogged: false,
                authUserId: "",
                authNickname : "",
                logErr: null,
            };


        default :
            return state;
    }
}