import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentBlock from '../../components/ContentBlock/ContentBlock';

import './Options.less';

const Options = () => {
    return (
        <div className='options'>
            <ContentBlock>
                <TextField
                    floatingLabelText='Add url to carousel' />
            </ContentBlock>
            <ContentBlock>
                <RaisedButton label='Add' />
            </ContentBlock>
        </div>
    );
};

export default Options;
