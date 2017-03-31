import React from 'react';
import UrlListItem from './UrlListItem';

const UrlList = (props) => {
    const { list } = props;
    return (
        <div>
            <h4>URL List</h4>
            {list.map((url, index) => (
                <UrlListItem
                    item={{
                        url,
                        index,
                    }}
                    totalUrlsAmount={list.length}
                    key={`url-list-item-${index}`} />
            ))}
        </div>
    );
};

UrlList.propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default UrlList;
