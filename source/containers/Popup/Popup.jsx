import React from 'react';
import * as tabsService from '../../services/tabs';
import * as messagesService from '../../services/messages';

import './Popup.less';

const Popup = () => {
    const openCarousel = () => {
        Promise.all([
            tabsService.queryTabs({active: true}),
            tabsService.queryTabs({active: false}),
            messagesService.getTabId(),
        ]).then((results) => {
            const tabs = [].concat(results[0], results[1]);
            const carouselTabId = results[2];
            let urlCarouselTabActive = false;
            for (const tab of tabs) {
                if (tab.id === carouselTabId) {
                    urlCarouselTabActive = true;
                    break;
                }
            }
            if (!urlCarouselTabActive) {
                tabsService.createTab({
                    url: chrome.runtime.getURL('CarouselView.html'),
                }).then((tab) => {
                    messagesService.setTabId(tab.id);
                });
            } else {
                tabsService.updateTab(carouselTabId, {active: true});
            }
        });
    };

    return (
        <div className='browser-menu'>
            <ul className='browser-menu-list'>
                <li className='browser-menu-list__item'
                    onClick={() => openCarousel()}>
                    Open carousel
                </li>
                <li className='browser-menu-list__item'
                    onClick={() => chrome.runtime.openOptionsPage()}>
                    Settings
                </li>
            </ul>
        </div>
    );
};

export default Popup;
