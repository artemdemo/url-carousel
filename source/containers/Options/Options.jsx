import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './Options.less';

const Options = () => {
    return (
        <div className='options'>
            <div>
                <TextField
                    floatingLabelText='Add url to carousel' />
            </div>
            <div>
                <RaisedButton label='Add' />
            </div>
        </div>
    );
};

export default Options;
