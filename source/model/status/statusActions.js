import * as statusConst from './statusConstants';

export function playUrls() {
    return {
        type: statusConst.PLAY_URLS,
    };
}

export function stopUrls() {
    return {
        type: statusConst.STOP_URLS,
    };
}
