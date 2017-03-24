import * as urlListConst from './urlListConstants';

const initialState = {
    urls: [],
    loading: false,
    loadingError: null,
    adding: false,
    addingError: null,
    deleting: false,
    deletingError: null,
};

export default function urlListReducer(state = initialState, action) {
    switch (action.type) {
        /*
         * Load
         */
        case urlListConst.LOAD_URLS:
            return Object.assign({}, state, {loading: true});
        case urlListConst.URLS_LOADED:
            return Object.assign({}, state, {
                urls: [...action.urls],
                loading: false,
                loadingError: null,
            });
        case urlListConst.URLS_LOADING_ERROR:
            return Object.assign({}, state, {
                loading: false,
                loadingError: action.error,
            });
        /*
         * Add
         */
        case urlListConst.ADD_URL:
            return Object.assign({}, state, {adding: true});
        case urlListConst.URL_ADDED:
            return Object.assign({}, state, {
                urls: [
                    ...state.urls,
                    action.url,
                ],
                adding: false,
                addingError: null,
            });
        case urlListConst.ADD_URL_ERROR:
            return Object.assign({}, state, {
                adding: false,
                addingError: action.error,
            });
        /*
         * Delete
         */
        case urlListConst.DELETE_URL:
            return Object.assign({}, state, {deleting: true});
        case urlListConst.URL_DELETED:
            return Object.assign({}, state, {
                urls: [
                    ...state.urls.slice(0, action.id),
                    ...state.urls.slice(action.id + 1),
                ],
                deleting: false,
                deletingError: null,
            });
        case urlListConst.DELETE_URL_ERROR:
            return Object.assign({}, state, {
                deleting: false,
                deletingError: action.error,
            });
        default:
            return state;
    }
}
