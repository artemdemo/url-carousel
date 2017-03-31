import React from 'react';
import { connect } from 'react-redux';
import { deleteUrl, moveUrl } from '../../model/urlList/urlListActions';
import Icon from '../../components/Icon/Icon';

import './UrlListItem.less';

const UrlListItem = (props) => {
    const { item, totalUrlsAmount, deleteUrl, moveUrl } = props;

    const handleMoveUrl = (direction) => {
        const nextIndex = (() => {
            if (direction === 'up') {
                return item.index - 1 < 0 ? totalUrlsAmount - 1 : item.index - 1;
            }
            return item.index + 1 === totalUrlsAmount ? 0 : item.index + 1;
        })();
        moveUrl(item.index, nextIndex);
    };

    return (
        <div className='url-list-item'>
            <div className='url-list-item__text'>
                {item.url}
            </div>
            <div className='url-list-item-move-buttons'>
                <div className='url-list-item-move-buttons__item'
                     onClick={() => handleMoveUrl('up')}>
                    <Icon name='arrow-up' />
                </div>
                <div className='url-list-item-move-buttons__item'
                     onClick={() => handleMoveUrl('down')}>
                    <Icon name='arrow-down' />
                </div>
            </div>
            <div className='url-list-item__remove'
                 onClick={() => {
                     deleteUrl(item.index);
                 }}>
                <Icon name='remove' flat />
            </div>
        </div>
    );
};

UrlListItem.propTypes = {
    item: React.PropTypes.shape({
        url: React.PropTypes.string,
        index: React.PropTypes.number,
    }),
    totalUrlsAmount: React.PropTypes.number,
};

export default connect(
    () => ({}),
    {
        deleteUrl,
        moveUrl,
    },
)(UrlListItem);
