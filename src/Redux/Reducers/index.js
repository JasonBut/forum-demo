import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import UIReducer from "./UIReducers"
import AppReducers from "./AppReducers";


//Root Reducers
export default (history) => combineReducers({
    UI : UIReducer,
    App : AppReducers,
    router : connectRouter(history),
});


//States Interface
export mapStates from "./mapStates";
export mapDispatches from "./mapDispatches";

