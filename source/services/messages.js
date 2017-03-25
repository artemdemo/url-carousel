// @docs https://developer.chrome.com/extensions/messaging

export const TYPES = {
    SET_CAROUSEL_TAB_ID: 'SET_CAROUSEL_TAB_ID',
    GET_CAROUSEL_TAB_ID: 'GET_CAROUSEL_TAB_ID',
};

/**
 * Send message
 *
 * @param message {Object}
 */
const sendMessage = message => new Promise((resolve) => {
    chrome.runtime.sendMessage(message, (response) => {
        resolve(response);
    });
});

export const setTabId = tabId => sendMessage({
    type: TYPES.SET_CAROUSEL_TAB_ID,
    tabId,
});

export const getTabId = () => sendMessage({
    type: TYPES.GET_CAROUSEL_TAB_ID,
});
