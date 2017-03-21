import React from 'react';
import classnames from 'classnames';

import './Input.less';

const Input = (props) => {
    const { type = 'text', value, placeholder, disabled, error, onChange } = props;

    const renderErrorText = () => {
        if (typeof error === 'string' && error !== '') {
            return (
                <div className='input-error text-danger'>
                    {error}
                </div>
            );
        }
        return null;
    };

    const containerClass = classnames({
        'input-container': true,
        'has-error': Boolean(error),
    });

    return (
        <div className={containerClass}>
            <input
                className='form-control'
                type={type}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={e => onChange && onChange(e.target.value)} />
            {renderErrorText()}
        </div>
    );
};

Input.propTypes = {
    type: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    error: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.string,
    ]),
};

export default Input;
