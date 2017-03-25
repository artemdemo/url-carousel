// @docs https://developer.chrome.com/extensions/messaging

import * as messagesService from './services/messages';

let carouselTabId = null;

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        switch (request.type) {
            case messagesService.TYPES.SET_CAROUSEL_TAB_ID:
                carouselTabId = request.tabId;
                sendResponse(true);
                break;
            case messagesService.TYPES.GET_CAROUSEL_TAB_ID:
                sendResponse(carouselTabId);
                break;
            default:
                sendResponse(null);
        }
    });

chrome.tabs.onRemoved.addListener((tabId) => {
    if (tabId === carouselTabId) {
        carouselTabId = null;
    }
});
