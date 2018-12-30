import Types from "../ActionsTypes"

//初始State
const initialState = {
    isLogged : false,
    authUser : null,
};


//Reducers
export default function AuthReducer (state = initialState, action) {
    switch (action.type) {

        case Types.AUTH_LOGIN_SUCCESS :
            return {
                ...state,
                isLogged: true,
                authUser: action.authUser,
            };

        case Types.AUTH_LOGOUT :
            return {
                ...state,
                isLogged: false,
                authUser: null,
            };


        default :
            return state;
    }
}