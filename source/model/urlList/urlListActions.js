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
 * Save
 */

export function saveUrls(urls) {
    return {
        type: urlListConst.SAVE_URLS,
        urls,
    };
}

export function urlsSaved() {
    return {
        type: urlListConst.URLS_SAVED,
    };
}

export function urlsSavingError(error = true) {
    return {
        type: urlListConst.URLS_SAVING_ERROR,
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

/*
 * Delete
 */

export function deleteUrl(index) {
    return {
        type: urlListConst.DELETE_URL,
        index,
    };
}
