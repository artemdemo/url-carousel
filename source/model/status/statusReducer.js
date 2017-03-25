import * as statusConst from './statusConstants';

const initialState = {
    isPlaying: true,
};

export default function statusReducer(state = initialState, action) {
    switch (action.type) {
        case statusConst.PLAY_URLS:
            return Object.assign({}, state, {
                isPlaying: true,
            });
        case statusConst.STOP_URLS:
            return Object.assign({}, state, {
                isPlaying: false,
            });
        default:
            return state;
    }
}
