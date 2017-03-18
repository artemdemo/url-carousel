import React from 'react';

import './ContentBlock.less';

const ContentBlock = (props) => {
    return (
        <div className='content-block'>
            {props.children}
        </div>
    );
};

export default ContentBlock;
