import React from 'react';
import classnames from 'classnames';

const Button = (props) => {
    const { className, primary, onClick } = props;
    const buttonClass = classnames(className, {
        btn: true,
        'btn-primary': primary,
    });

    return (
        <button className={buttonClass} onClick={e => onClick && onClick(e)}>
            {props.children}
        </button>
    );
};

Button.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    primary: React.PropTypes.bool,
};

export default Button;
