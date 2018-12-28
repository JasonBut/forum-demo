import {combineReducers} from "redux";
import UIReducer from "./UIFetchDataReducers"
import stores from "../Stores"

//Root Reducers
export default combineReducers({
    UI : UIReducer
});


//States Interface
export const mapStates = {

    getFetchData : function (value) {
        if (value && value.toLowerCase() === "list" || value.toLowerCase() === "post") {
            return stores.getState().UI[value];
        }
    },
};