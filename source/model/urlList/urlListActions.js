import * as urlListConst from './urlListConstants';

export function addUrl(url) {
    return {
        type: urlListConst.ADD_URL,
        url,
    };
}

export function deleteUrl(id) {
    return {
        type: urlListConst.DELETE_URL,
        id,
    };
}
