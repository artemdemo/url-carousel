import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';

import './Popup.less';

const Popup = () => {
    return (
        <div className='browser-menu'>
            <List>
                <ListItem primaryText='Start carousel' leftIcon={<AvPlayArrow />} />
                <ListItem primaryText='Settings'
                          leftIcon={<ActionSettings />}
                          onClick={() => chrome.runtime.openOptionsPage()} />
            </List>
        </div>
    );
};

export default Popup;
