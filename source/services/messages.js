import guid from './guid';

// @docs https://developer.chrome.com/extensions/messaging

/**
 * Send message
 * @param data {Object}
 * @param data.type {String}
 * @param data.tabId {Number}
 */
export const send = data => new Promise((resolve) => {
    chrome.tabs.sendMessage(data.tabId, data, (response) => {
        resolve(response);
    });
    // chrome.runtime.sendMessage(data, (response) => {
    //     console.log('send -> response..');
    //     resolve(response);
    // });
});

let nextMessageCallbacks = [];
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        nextMessageCallbacks.forEach(msgObj => msgObj.callback(request));
    });

/**
 * On message event
 * @param message {Object}
 * @param message.type {String}
 */
export const onMessage = message => new Promise((resolve) => {
    const messageId = guid();
    nextMessageCallbacks.push({
        id: messageId,
        callback: function(msg, msgId, request) {
            if (msg.type === request.type) {
                resolve();
                nextMessageCallbacks = nextMessageCallbacks.filter(msgObj => msgObj.id !== msgId);
            }
        }.bind(null, message, messageId),
    });
});
