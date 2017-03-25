import { take, put } from 'redux-saga/effects';
import * as statusConst from './statusConstants';
import {
    playUrls,
    urlsStartedPlaying,
    stopUrls,
    urlsStopped,
} from './statusActions';
import * as messagesService from '../../services/messages';

/*
 * Play
 */

function* playUrlsSaga() {
    while (true) {
        const { tabId } = yield take(statusConst.PLAY_URLS);
        yield messagesService.send(playUrls(tabId));
        yield put(urlsStartedPlaying());
    }
}

/*
 * Stop
 */

function* stopPlayingUrlsSaga() {
    while (true) {
        yield take(statusConst.STOP_URLS);
        yield messagesService.send(stopUrls());
        yield put(urlsStopped());
    }
}

/*
 * Watch
 */

function* watchStartPlayingMessageSaga() {
    while (true) {
        yield messagesService.onMessage({type: statusConst.PLAY_URLS});
        yield put(urlsStartedPlaying());
    }
}

function* watchStopPlayingMessageSaga() {
    while (true) {
        yield messagesService.onMessage({type: statusConst.STOP_URLS});
        yield put(urlsStopped());
    }
}

export default function* statusSagas() {
    yield [
        playUrlsSaga(),
        stopPlayingUrlsSaga(),
        watchStartPlayingMessageSaga(),
        watchStopPlayingMessageSaga(),
    ];
}
