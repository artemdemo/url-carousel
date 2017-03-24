import React, { Component } from 'react';

import './Popup.less';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
        };
    }

    toggleCarousel() {
        if (!this.state.isPlaying) {
            chrome.tabs.create({
                url: chrome.runtime.getURL('CarouselView.html'),
            }, (tab) => {
                // Tab opened.
            });
        }
        this.setState({
            isPlaying: !this.state.isPlaying,
        });
    }

    render() {
        const toggleCarouselText = this.state.isPlaying ?
            'Stop carousel' :
            'Start carousel';
        return (
            <div className='browser-menu'>
                <ul className='browser-menu-list'>
                    <li className='browser-menu-list__item'
                        onClick={() => this.toggleCarousel()}>
                        {toggleCarouselText}
                    </li>
                    <li className='browser-menu-list__item'
                        onClick={() => chrome.runtime.openOptionsPage()}>
                        Settings
                    </li>
                </ul>
            </div>
        );
    }
};

export default Popup;
