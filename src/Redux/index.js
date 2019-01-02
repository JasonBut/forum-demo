import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./Sagas/";
import createRootReducers from "./Reducers/";

const sagaMiddleware = createSagaMiddleware(); //创建saga中间件

const stores = createStore(
    createRootReducers,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas); //运行rootSaga

export {mapStates,mapDispatches} from "./Reducers/";
export default stores;