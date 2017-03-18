import React from 'react';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import UrlListItem from './UrlListItem';

const UrlList = () => {
    return (
        <List>
            <Subheader>URL List</Subheader>
            <UrlListItem item={{}} />
        </List>
    );
};

export default UrlList;
