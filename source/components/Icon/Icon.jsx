import React from 'react';
import classnames from 'classnames';

import './Icon.less';

const Icon = (props) => {
    const { className, name, flat } = props;
    const containerClass = classnames(className, {
        icon: true,
        icon_flat: flat,
    });
    const iconClass = classnames({
        glyphicon: true,
        [`glyphicon-${name}`]: name,
    });

    return (
        <span className={containerClass}>
            <i className={iconClass} />
        </span>
    );
};

Icon.propTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string,
    flat: React.PropTypes.bool,
};

export default Icon;
