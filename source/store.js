import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import status from './model/status/statusReducer';
import urlList from './model/urlList/urlListReducer';

import statusSagas from './model/status/statusSagas';
import urlListSagas from './model/urlList/urlListSagas';

const reducers = combineReducers({
    status,
    urlList,
    routing: routerReducer,
});


function* rootSaga() {
    yield [
        statusSagas(),
        urlListSagas(),
    ];
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
