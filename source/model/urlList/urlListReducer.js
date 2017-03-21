import * as urlListConst from './urlListConstants';

const initialState = {
    urls: [],
};

export default function urlListReducer(state = initialState, action) {
    switch (action.type) {
        case urlListConst.ADD_URL:
            return Object.assign({}, state, {
                urls: [
                    ...state.urls,
                    action.url,
                ],
            });
        case urlListConst.DELETE_URL:
            return Object.assign({}, state, {
                urls: [
                    ...state.urls.slice(0, action.id),
                    ...state.urls.slice(action.id + 1),
                ],
            });
        default:
            return state;
    }
}
