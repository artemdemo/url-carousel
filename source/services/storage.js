// @doc https://developer.chrome.com/extensions/storage
// @doc http://stackoverflow.com/questions/5364062/how-can-i-save-information-locally-in-my-chrome-extension

const ERROR_TIMEOUT = 2000;
let setTimeoutId;
let getTimeoutId;

/**
 * Save in global storage
 * @param data {Object}
 */
export const set = data => new Promise((resolve, reject) => {
    console.log('set');
    setTimeoutId = setTimeout(() => reject(), ERROR_TIMEOUT);
    chrome.storage.sync.set(data, () => {
        console.log(data);
        clearTimeout(setTimeoutId);
        resolve();
    });
});

/**
 * Get from global object
 * @param keys {String | Array}
 */
export const get = keys => new Promise((resolve, reject) => {
    getTimeoutId = setTimeout(() => reject, ERROR_TIMEOUT);
    chrome.storage.sync.get(keys, (items) => {
        console.log(items);
        clearTimeout(getTimeoutId);
        resolve(items);
    });
});
