import Types from "../ActionsTypes"

//初始State
const initialState = {
    noMatch : false,
    err : null,
};


//Reducers
export default function UIReducer (state = initialState, action) {
    switch (action.type) {

        case  Types.REQUEST_FAILED :
            console.log(action.err);
            return {
                err : action.err,
            };

        case Types.FETCH_START :
            return {
                err : null,
                noMatch : false,
            };

        case Types.FETCH_NO_MATCH :
            return {
                ...state,
                noMatch : true,
            };

        default :
            return state;
    }
}