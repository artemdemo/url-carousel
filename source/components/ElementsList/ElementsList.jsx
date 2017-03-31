import React from 'react';
import classnames from 'classnames';

import './ElementsList.less';

/**
 * <ElementsList /> is used to add margin between elements
 */
const ElementsList = (props) => {
    let children;
    let counter = 0;
    const childAmount = props.children.length;
    if (childAmount > 1) {
        children = React.Children.map(
            props.children,
            (child) => {
                if (child) {
                    const newProps = {
                        className: classnames(child.props.className, {
                            'elements-list-item': true,
                            'elements-list-item_first': counter === 0,
                            'elements-list-item_last': counter === childAmount - 1,
                        }),
                    };
                    counter++;
                    return React.cloneElement(child, newProps);
                }
                return null;
            });
    } else {
        children = props.children;
    }
    const { inline, nowrap } = props;
    const wrapClass = classnames({
        'elements-list': true,
        'elements-list_inline': inline,
        'elements-list_nowrap': nowrap,
    });
    return (
        <div className={wrapClass}>
            {children}
        </div>
    );
};

ElementsList.propTypes = {
    inline: React.PropTypes.bool,
    nowrap: React.PropTypes.bool,
};

export default ElementsList;
