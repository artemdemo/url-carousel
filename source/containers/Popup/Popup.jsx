import React from 'react';

import './Popup.less';

const Popup = () => {
    return (
        <div className='browser-menu'>
            <ul className='browser-menu-list'>
                <li className='browser-menu-list__item'>Start carousel</li>
                <li className='browser-menu-list__item'
                    onClick={() => chrome.runtime.openOptionsPage()}>
                    Settings
                </li>
            </ul>
        </div>
    );
};

export default Popup;
