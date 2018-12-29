import {applyMiddleware, createStore, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import {routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import rootSagas from "./Sagas/"
import createRootReducers,{mapStatesInterface,mapDispatchInterface as mapDispatches} from "./Reducers/"

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const stores = createStore(
    createRootReducers(history),
    compose(
        applyMiddleware(
            sagaMiddleware,
            routerMiddleware(history)
        )
    ),
);

const mapStates =  mapStatesInterface(stores);
sagaMiddleware.run(rootSagas);



export default stores;
export {mapStates,mapDispatches,history};