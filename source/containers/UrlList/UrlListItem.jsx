import React from 'react';

const UrlListItem = (props) => {
    const { item } = props;
    return (
        <div>{item.url}</div>
    );
};

UrlListItem.propTypes = {
    item: React.PropTypes.shape({
        url: React.PropTypes.string,
        index: React.PropTypes.number,
    }),
};

export default UrlListItem;
