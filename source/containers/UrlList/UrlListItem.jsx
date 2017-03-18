import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class UrlListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
    }

    rightIconMenu() {
        const iconButtonElement = (
            <IconButton onClick={() => this.setState({showMenu: true})}>
                <MoreVertIcon color={grey400} />
            </IconButton>
        );

        return (
            <IconMenu
                open={this.state.showMenu}
                onMouseEnter={() => console.log('mouse enter')}
                onMouseLeave={() => console.log('mouse leave')}
                iconButtonElement={iconButtonElement}>
                <MenuItem primaryText='Refresh' />
                <MenuItem primaryText='Send feedback' />
                <MenuItem primaryText='Settings' />
                <MenuItem primaryText='Help' />
                <MenuItem primaryText='Sign out' />
            </IconMenu>
        );
    }

    render() {
        return (
            <ListItem
                primaryText='http://www.facebook.com'
                rightIconButton={this.rightIconMenu()} />
        );

    }
}

UrlListItem.propTypes = {
    item: React.PropTypes.shape({}),
};

export default UrlListItem;
