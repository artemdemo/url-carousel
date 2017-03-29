import * as storageConst from './storageConstants';

const initialState = {
    data: {},
    loading: false,
    loadingError: null,
    saving: false,
    savingError: null,
};

export default function storageReducer(state = initialState, action) {
    switch (action.type) {
        /*
         * Load
         */
        case storageConst.LOAD_DATA:
            return Object.assign({}, state, {loading: true});
        case storageConst.DATA_LOADED:
            return Object.assign({}, state, {
                data: Object.assign({}, action.data),
                loading: false,
                loadingError: null,
            });
        case storageConst.DATA_LOADING_ERROR:
            return Object.assign({}, state, {
                loadingError: action.error,
            });
        /*
         * Save
         */
        case storageConst.SAVE_DATA:
            return Object.assign({}, state, {saving: true});
        case storageConst.DATA_SAVED:
            return Object.assign({}, state, {
                saving: false,
                savingError: null,
            });
        case storageConst.DATA_SAVING_ERROR:
            return Object.assign({}, state, {
                savingError: action.error,
            });
        default:
            return state;
    }
}
