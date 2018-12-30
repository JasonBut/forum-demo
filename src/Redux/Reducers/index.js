import {combineReducers} from "redux";
import UIReducer from "./UIReducers"
import AppReducers from "./AppReducers";

//Root Reducers
export default combineReducers({
    UI : UIReducer,
    App : AppReducers,
});

//States Interface
export mapStates from "./mapStates";
export mapDispatches from "./mapDispatches";

