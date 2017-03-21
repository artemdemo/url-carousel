import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import urlList from './model/urlList/urlListReducer';

const reducers = combineReducers({
    urlList,
    routing: routerReducer,
});


function* rootSaga() {
    yield [];
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
