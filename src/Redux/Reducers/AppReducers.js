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

        case  Types.REQUEST_FAILED :
            console.log(action.err);
            return {
                err : action.err,
                isSuccess : false,
                isLoading : false,
            };

        case Types.FETCH_SUCCEEDED :
            return {
                err : null,
                isLoading: false,
                isSuccess: true,
            };

        case Types.FETCH_START :
            return {
                err : null,
                isLoading: true,
                isSuccess: false,
            };

        default :
            return state;
    }
}