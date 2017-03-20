import React from 'react';

const UrlListItem = () => {
    return (
        <div>http://www.facebook.com</div>
    );
};

UrlListItem.propTypes = {
    item: React.PropTypes.shape({}),
};

export default UrlListItem;
