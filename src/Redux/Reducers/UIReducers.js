import Types from "../ActionsTypes"

//初始State
const initialState = {
    list : [],
    post : null,
};


//Reducers
export default function UIReducer (state = initialState, action) {
    switch (action.type) {

        case Types.UI_FETCH_LIST_SUCCEEDED :
            return {
                ...state,
                list : action.data
            };

        case Types.UI_FETCH_POST_SUCCEEDED :
            return {
                ...state,
                post: action.data,
            };

        default :
            return state;
    }
}