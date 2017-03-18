import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';

import './BrowserMenu.less';

const BrowserMenu = () => {
    return (
        <div className='browser-menu'>
            <List>
                <ListItem primaryText='Start carousel' leftIcon={<AvPlayArrow />} />
                <ListItem primaryText='Settings' leftIcon={<ActionSettings />} />
            </List>
        </div>
    );
};

export default BrowserMenu;
