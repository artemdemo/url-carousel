import * as urlListConst from './urlListConstants';

const initialState = {
    urls: [],
    loading: false,
    loadingError: null,
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
            return Object.assign({}, state, {
                urls: [
                    ...state.urls,
                    action.url,
                ],
            });
        /*
         * Delete
         */
        case urlListConst.DELETE_URL:
            const urls = (() => {
                if (state.urls.length > action.index) {
                    return [
                        ...state.urls.slice(0, action.index),
                        ...state.urls.slice(action.index + 1),
                    ];
                }
                return [...state.urls];
            })();
            return Object.assign({}, state, {
                urls,
            });
        default:
            return state;
    }
}
