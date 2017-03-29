import { take, put } from 'redux-saga/effects';
import * as storageConst from './storageConstants';
import {
    dataLoaded,
    dataLoadingError,
    dataSaved,
    dataSavingError,
} from './storageActions';
import * as storageService from '../../services/storage';

function* loadDataSaga() {
    while (true) {
        yield take(storageConst.LOAD_DATA);
        try {
            const urls = yield storageService.get(storageConst.URL_LIST_STORAGE_KEY);
            const timeout = yield storageService.get(storageConst.TIMEOUT_STORAGE_KEY);

            yield put(dataLoaded({
                urls: urls[storageConst.URL_LIST_STORAGE_KEY] || [],
                timeout: timeout[storageConst.TIMEOUT_STORAGE_KEY] || [],
            }));
        } catch (err) {
            yield put(dataLoadingError(err));
        }
    }
}

function* saveDataSaga() {
    while (true) {
        const { data } = yield take(storageConst.SAVE_DATA);
        try {
            yield storageService.set({
                [storageConst.URL_LIST_STORAGE_KEY]: data.urls,
                [storageConst.TIMEOUT_STORAGE_KEY]: data.timeout,
            });

            yield put(dataSaved());
        } catch (err) {
            yield put(dataSavingError(err));
        }
    }
}

export default function* storageSagas() {
    yield [
        loadDataSaga(),
        saveDataSaga(),
    ];
}
