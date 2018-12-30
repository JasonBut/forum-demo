import {combineReducers} from "redux";
import UIReducer from "./UIReducers"
import AppReducers from "./AppReducers";
import AuthReducers from "./AuthReducers";
import FormEventReducers from "./FormEventReducers";


//Root Reducers
export default combineReducers({
    UI : UIReducer,
    App : AppReducers,
    Auth : AuthReducers,
    Form : FormEventReducers,
});

//States Interface
export mapStates from "./mapStates";
export mapDispatches from "./mapDispatches";

