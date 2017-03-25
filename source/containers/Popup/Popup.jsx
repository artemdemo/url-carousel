import React, { Component } from 'react';

import './Popup.less';

class Popup extends Component {
    openCarousel() {
        chrome.tabs.query({active: true}, (tabs) => {
            let urlCarouselTabActive = null;
            tabs.forEach((tab) => {
                if (tab.title === 'Url carousel') {
                    urlCarouselTabActive = tab.id;
                }
            });
            if (!urlCarouselTabActive) {
                chrome.tabs.create({
                    url: chrome.runtime.getURL('CarouselView.html'),
                }, (tab) => {});
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
