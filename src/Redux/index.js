import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./Sagas/";
import createRootReducers from "./Reducers/";

const sagaMiddleware = createSagaMiddleware();

const stores = createStore(
    createRootReducers,
    applyMiddleware(
        sagaMiddleware,
    )
);

sagaMiddleware.run(rootSagas);

export {mapStates,mapDispatches} from "./Reducers/";
export default stores;