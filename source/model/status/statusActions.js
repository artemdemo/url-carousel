import * as statusConst from './statusConstants';

/*
 * Play
 */

export function playUrls(tabId) {
    return {
        type: statusConst.PLAY_URLS,
        tabId,
    };
}

export function urlsStartedPlaying() {
    return {
        type: statusConst.URLS_STARTED_PLAYING,
    };
}

/*
 * Stop
 */

export function stopUrls(tabId) {
    return {
        type: statusConst.STOP_URLS,
        tabId,
    };
}

export function urlsStopped() {
    return {
        type: statusConst.URLS_STOPPED,
    };
}
