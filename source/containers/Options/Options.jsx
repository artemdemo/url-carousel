import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Form from '../../components/Form/Form';
import ContentBlock from '../../components/ContentBlock/ContentBlock';

import './Options.less';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            urlError: false,
        };
    }

    render() {
        return (
            <div className='options'>
                <Form>
                    <ContentBlock>
                        <TextField
                            id='add-url-to-carousel'
                            floatingLabelText='Add url to carousel'
                            value={this.state.url}
                            onChange={e => this.setState({
                                url: e.target.value,
                                urlError: false,
                            })}
                            errorText={this.state.urlError} />
                    </ContentBlock>
                    <ContentBlock>
                        <RaisedButton label='Add' />
                    </ContentBlock>
                </Form>
            </div>
        );
    }
}

export default Options;
