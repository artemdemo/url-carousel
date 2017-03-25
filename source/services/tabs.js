// @docs https://developer.chrome.com/extensions/tabs

/**
 * Query tabs
 *
 * @docs https://developer.chrome.com/extensions/tabs#method-query
 * @param options {Object}
 * @param options.active {Boolean}
 */
export const queryTabs = options => new Promise((resolve) => {
    chrome.tabs.query(options, tabs => resolve(tabs));
});

/**
 * Create tab
 *
 * @docs https://developer.chrome.com/extensions/tabs#method-create
 * @param options {Object}
 * @param options.url {Object}
 * @param options.active {Boolean} - send focus to new tab (default `true`)
 */
export const createTab = options => new Promise((resolve) => {
    chrome.tabs.create(options, tab => resolve(tab));
});

/**
 * Update tab properties
 *
 * @docs https://developer.chrome.com/extensions/tabs#method-update
 * @param tabId {Number}
 * @param options {Object}
 * @param options.active {Boolean}
 */
export const updateTab = (tabId, options) => new Promise((resolve) => {
    chrome.tabs.update(tabId, options, tab => resolve(tab));
});
