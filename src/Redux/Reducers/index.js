import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import UIReducer from "./UIFetchDataReducers"


//Root Reducers
export default (history) => combineReducers({
    UI : UIReducer,
    router : connectRouter(history),
});


//States Interface
export mapStatesInterface from "./mapStates";
export mapDispatchInterface from "./mapDispatches";

