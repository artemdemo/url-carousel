import * as statusConst from './statusConstants';

const initialState = {
    isPlaying: false,
};

export default function statusReducer(state = initialState, action) {
    switch (action.type) {
        case statusConst.URLS_STARTED_PLAYING:
            return Object.assign({}, state, {
                isPlaying: true,
            });
        case statusConst.URLS_STOPPED:
            return Object.assign({}, state, {
                isPlaying: false,
            });
        default:
            return state;
    }
}
