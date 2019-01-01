import Types from "../ActionsTypes"

//初始State
const initialState = {
    isLogged : false,
    authNickname : "",
    authUserId : "",
    logErr: null,
};


//Reducers
export default function AuthReducer (state = initialState, action) {
    switch (action.type) {

        case Types.AUTH_LOGIN_SUCCEEDED :
            return {
                ...state,
                isLogged: true,
                authUserId: action.authUserId,
                authNickname: action.authNickname,
            };

        case Types.AUTH_LOGIN_FAILED :
            return {
                ...state,
                isLogged:false,
                logErr: action.logErr,
            };

        case Types.AUTH_LOGOUT :
            return {
                ...state,
                isLogged: false,
                authUserId: "",
                authNickname : "",
            };


        default :
            return state;
    }
}