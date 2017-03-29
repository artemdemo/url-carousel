import * as storageConst from './storageConstants';

/*
 * Load
 */

export function loadData() {
    return {
        type: storageConst.LOAD_DATA,
    };
}

/**
 * @param data {Object}
 * @param data.urls {Array}
 * @param data.timeout {String}
 */
export function dataLoaded(data) {
    return {
        type: storageConst.DATA_LOADED,
        data,
    };
}

export function dataLoadingError(error = true) {
    return {
        type: storageConst.DATA_LOADING_ERROR,
        error,
    };
}

/*
 * Save
 */

/**
 * @param data {Object}
 * @param data.urls {Array}
 * @param data.timeout {String}
 */
export function saveData(data) {
    return {
        type: storageConst.SAVE_DATA,
        data,
    };
}

export function dataSaved() {
    return {
        type: storageConst.DATA_SAVED,
    };
}

export function dataSavingError(error = true) {
    return {
        type: storageConst.DATA_SAVING_ERROR,
        error,
    };
}
