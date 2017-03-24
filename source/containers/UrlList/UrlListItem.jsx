import React from 'react';
import { connect } from 'react-redux';
import { deleteUrl } from '../../model/urlList/urlListActions';

import './UrlListItem.less';

const UrlListItem = (props) => {
    const { item, deleteUrl } = props;
    return (
        <div className='url-list-item'>
            <div className='url-list-item__text'>
                {item.url}
            </div>
            <div className='url-list-item__remove'
                 onClick={() => {
                     deleteUrl(item.index);
                 }}>
                <i className='glyphicon glyphicon-remove' />
            </div>
        </div>
    );
};

UrlListItem.propTypes = {
    item: React.PropTypes.shape({
        url: React.PropTypes.string,
        index: React.PropTypes.number,
    }),
};

export default connect(
    () => ({}),
    {
        deleteUrl,
    },
)(UrlListItem);
