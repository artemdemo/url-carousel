import * as urlListConst from './urlListConstants';

export function urlsLoaded(urls) {
    return {
        type: urlListConst.URLS_LOADED,
        urls,
    };
}

export function addUrl(url) {
    return {
        type: urlListConst.ADD_URL,
        url,
    };
}

export function deleteUrl(index) {
    return {
        type: urlListConst.DELETE_URL,
        index,
    };
}

export function moveUrl(previousIndex, nextIndex) {
    return {
        type: urlListConst.MOVE_URL,
        previousIndex,
        nextIndex,
    };
}
