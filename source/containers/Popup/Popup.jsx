import React, { Component } from 'react';
import * as tabsService from '../../services/tabs';

import './Popup.less';

let carouselTabId = null;

class Popup extends Component {
    openCarousel() {
        Promise.all([
            tabsService.queryTabs({active: true}),
            tabsService.queryTabs({active: false}),
        ]).then((tabsCollection) => {
            const tabs = [].concat(...tabsCollection);
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
                    active: false,
                }).then((tab) => {
                    carouselTabId = tab.id;
                });
            }
        });
    }

    render() {
        return (
            <div className='browser-menu'>
                <ul className='browser-menu-list'>
                    <li className='browser-menu-list__item'
                        onClick={() => this.openCarousel()}>
                        Open carousel
                    </li>
                    <li className='browser-menu-list__item'
                        onClick={() => chrome.runtime.openOptionsPage()}>
                        Settings
                    </li>
                </ul>
            </div>
        );
    }
}

export default Popup;
