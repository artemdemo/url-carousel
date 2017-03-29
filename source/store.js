import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import status from './model/status/statusReducer';
import storage from './model/storage/storageReducer';
import urlList from './model/urlList/urlListReducer';

import storageSagas from './model/storage/storageSagas';

const reducers = combineReducers({
    status,
    storage,
    urlList,
    routing: routerReducer,
});


function* rootSaga() {
    yield [
        storageSagas(),
    ];
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
