import Types from "../ActionsTypes"

//初始State
const initialState = {
    loginUsername : "Jason",
    loginPassword : "aaaaa",
    postTitle : "",
    postContent : "",
    commentContent : "",
    isEditing : false,
};

//Reducers
export default function FormEventReducers (state = initialState, action) {
    switch (action.type) {

        case Types.FORM_VALUE_ONCHANGE :
            const {name,value} = action.payload;
            console.log(action.payload);
            return {
                ...state,
                [name] : value,
            };

        case Types.FORM_TOGGLE_EDITING :
            console.log(action.isEditing);
            return {
                ...state, isEditing : action.isEditing,
            };


        default :
            return state;
    }
}