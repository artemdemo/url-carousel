import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import urlList from './model/urlList/urlListReducer';

import urlListSagas from './model/urlList/urlListSagas';

const reducers = combineReducers({
    urlList,
    routing: routerReducer,
});


function* rootSaga() {
    yield [
        urlListSagas(),
    ];
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
