import React from 'react';
import classnames from 'classnames';

import './Dropdown.less';

const Dropdown = (props) => {
    const { onChange, value, placeholder, disabled, error, list = [] } = props;

    const itemsList = (() => {
        if (placeholder) {
            return [placeholder].concat(list);
        }
        return list;
    })();

    const dropdownValue = (() => {
        if ((value === '' || value === undefined) && placeholder) {
            return '-1';
        }
        return value;
    })();

    const renderErrorText = (error) => {
        if (typeof error === 'string' && error !== '') {
            return (
                <div className='dropdown-error'>
                    {error}
                </div>
            );
        }
        return null;
    };

    const containerClass = classnames({
        'has-error': Boolean(error),
    });

    return (
        <div className={containerClass}>
            <select
                className='form-control'
                value={dropdownValue}
                onChange={e => onChange && onChange(Number(e.target.value))}
                disabled={disabled}>
                {itemsList.map((item, index) => {
                    return (
                        <option value={placeholder ? index - 1 : index}
                                disabled={placeholder && index - 1 === -1}
                                key={`dropdown__item-${index}`}>{item}</option>
                    );
                })}
            </select>
            {renderErrorText(error)}
        </div>
    );
};

Dropdown.propTypes = {
    onChange: React.PropTypes.func,
    className: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    error: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.string,
    ]),
};

export default Dropdown;
