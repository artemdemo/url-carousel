import React from 'react';

const Form = (props) => {
    const { className } = props;
    return (
        <form
            className={className}
            onSubmit={(e) => {
                const { onSubmit } = props;
                e.preventDefault();
                onSubmit && onSubmit();
            }}>
            {props.children}
        </form>
    );
};

Form.propTypes = {
    onSubmit: React.PropTypes.func,
    className: React.PropTypes.string,
};

export default Form;
