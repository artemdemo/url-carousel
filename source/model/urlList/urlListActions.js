import * as urlListConst from './urlListConstants';

/*
 * load
 */

export function urlsLoaded(urls) {
    return {
        type: urlListConst.URLS_LOADED,
        urls,
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
