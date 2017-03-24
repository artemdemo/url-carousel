import { take, put } from 'redux-saga/effects';
import * as urlListConst from './urlListConstants';
import {
    urlsLoaded,
    urlsLoadingError,
    urlAdded,
    addUrlError,
    urlDeleted,
    deleteUrlError,
} from './urlListActions';
import * as storageService from '../../services/storage';

function* loadUrlsSaga() {
    while (true) {
        yield take(urlListConst.LOAD_URLS);
        try {
            const urls = yield storageService.get(urlListConst.URL_LIST_STORAGE_KEY);

            yield put(urlsLoaded(urls[urlListConst.URL_LIST_STORAGE_KEY] || []));
        } catch (err) {
            yield put(urlsLoadingError(err));
        }
    }
}

function* addUrlSaga() {
    while (true) {
        const { url } = yield take(urlListConst.ADD_URL);
        try {
            const currentUrls = yield storageService.get(urlListConst.URL_LIST_STORAGE_KEY);
            const newUrlsList = (() => {
                if (currentUrls && currentUrls[urlListConst.URL_LIST_STORAGE_KEY]) {
                    return [
                        ...currentUrls[urlListConst.URL_LIST_STORAGE_KEY],
                        url,
                    ];
                }
                return [url];
            })();

            yield storageService.set({
                [urlListConst.URL_LIST_STORAGE_KEY]: newUrlsList,
            });

            yield put(urlAdded(newUrlsList));
        } catch (err) {
            yield put(addUrlError(err));
        }
    }
}

function* deleteUrlSaga() {
    while (true) {
        const { index } = yield take(urlListConst.DELETE_URL);
        try {
            const currentUrls = yield storageService.get(urlListConst.URL_LIST_STORAGE_KEY);
            const urls = currentUrls[urlListConst.URL_LIST_STORAGE_KEY];
            const newUrlsList = (() => {
                if (currentUrls && urls && urls.length > index) {
                    return [
                        ...urls.slice(0, index),
                        ...urls.slice(index + 1),
                    ];
                }
                return [];
            })();

            yield storageService.set({
                [urlListConst.URL_LIST_STORAGE_KEY]: newUrlsList,
            });

            yield put(urlDeleted(newUrlsList));
        } catch (err) {
            yield put(deleteUrlError(err));
        }
    }
}

export default function* urlListSagas() {
    yield [
        loadUrlsSaga(),
        addUrlSaga(),
        deleteUrlSaga(),
    ];
}
