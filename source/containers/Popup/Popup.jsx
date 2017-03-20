import React from 'react';

import './Popup.less';

const Popup = () => {
    return (
        <div className='browser-menu'>
            <ul className='list-group'>
                <li className='list-group-item'>Start carousel</li>
                <li className='list-group-item'
                    onClick={() => chrome.runtime.openOptionsPage()}>
                    Settings
                </li>
            </ul>
        </div>
    );
};

export default Popup;
