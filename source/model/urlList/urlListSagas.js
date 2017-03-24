import { take, put } from 'redux-saga/effects';
import * as urlListConst from './urlListConstants';
import {
    urlsLoaded,
    urlsLoadingError,
    urlAdded,
    addUrlError,
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
            if (currentUrls && currentUrls[urlListConst.URL_LIST_STORAGE_KEY]) {
                yield storageService.set({
                    [urlListConst.URL_LIST_STORAGE_KEY]: [
                        ...currentUrls[urlListConst.URL_LIST_STORAGE_KEY],
                        url,
                    ],
                });
            } else {
                yield storageService.set({
                    [urlListConst.URL_LIST_STORAGE_KEY]: [
                        url,
                    ],
                });
            }

            yield put(urlAdded(url));
        } catch (err) {
            yield put(addUrlError(err));
        }
    }
}

export default function* urlListSagas() {
    yield [
        loadUrlsSaga(),
        addUrlSaga(),
    ];
}
