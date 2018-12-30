import {combineReducers} from "redux";
import UIReducer from "./UIReducers"
import AppReducers from "./AppReducers";
import AuthReducers from "./AuthReducers";

//Root Reducers
export default combineReducers({
    UI : UIReducer,
    App : AppReducers,
    Auth : AuthReducers,
});

//States Interface
export mapStates from "./mapStates";
export mapDispatches from "./mapDispatches";

