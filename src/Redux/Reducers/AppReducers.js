import Types from "../ActionsTypes"

//初始State
const initialState = {
    isLoading : false,
    isDone : false,
    err : null,
};


//Reducers
export default function UIReducer (state = initialState, action) {
    switch (action.type) {

        case  Types.REQUEST_FAILED :
            console.log(action.err);
            return {
                err : action.err,
                isDone : true,
                isLoading : false,
            };

        case Types.FETCH_SUCCEEDED :
            return {
                err : null,
                isLoading: false,
                isDone: true,
            };

        case Types.FETCH_START :
            return {
                err : null,
                isLoading: true,
                isDone: false,
            };

        default :
            return state;
    }
}