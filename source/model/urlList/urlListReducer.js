import * as urlListConst from './urlListConstants';

const initialState = {
    urls: [],
};

export default function urlListReducer(state = initialState, action) {
    switch (action.type) {
        /*
         * Load
         */
        case urlListConst.URLS_LOADED:
            return Object.assign({}, state, {
                urls: [...action.urls],
                loading: false,
                loadingError: null,
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
