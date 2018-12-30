import Types from "../ActionsTypes"

//初始State
const initialState = {
    isLoading : false,
    isSuccess : false,
    err : null,
};


//Reducers
export default function UIReducer (state = initialState, action) {
    switch (action.type) {

        case  Types.FETCH_FAILED :
            console.log(action.err);
            return {
                ...state,
                err : action.err,
                isSuccess : false,
                isLoading : false,
            };

        case Types.FETCH_SUCCEEDED :
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
            };

        case Types.FETCH_START :
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
            };

        default :
            return state;
    }
}