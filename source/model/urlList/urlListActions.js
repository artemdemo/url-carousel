import * as urlListConst from './urlListConstants';

/*
 * Load
 */

export function loadUrls() {
    return {
        type: urlListConst.LOAD_URLS,
    };
}

export function urlsLoaded(urls) {
    return {
        type: urlListConst.URLS_LOADED,
        urls,
    };
}

export function urlsLoadingError(error = true) {
    return {
        type: urlListConst.URLS_LOADING_ERROR,
        error,
    };
}

/*
 * Add
 */

export function addUrl(url) {
    return {
        type: urlListConst.ADD_URL,
        url,
    };
}

export function urlAdded(url) {
    return {
        type: urlListConst.URL_ADDED,
        url,
    };
}

export function addUrlError(error = true) {
    return {
        type: urlListConst.ADD_URL_ERROR,
        error,
    };
}

/*
 * Delete
 */

export function deleteUrl(id) {
    return {
        type: urlListConst.DELETE_URL,
        id,
    };
}

export function urlDeleted(id) {
    return {
        type: urlListConst.URL_DELETED,
        id,
    };
}

export function deleteUrlError(error = true) {
    return {
        type: urlListConst.DELETE_URL_ERROR,
        error,
    };
}
