import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./Sagas/"
import rootReducers from "./Reducers/"


const sagaMiddleware = createSagaMiddleware();


const stores = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSagas);


export default stores;