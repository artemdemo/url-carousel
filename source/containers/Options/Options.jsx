import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import UrlList from '../UrlList/UrlList';

import './Options.less';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            urlError: false,
        };
    }

    submit() {
        if (this.state.url === '') {
            this.setState({urlError: 'Url should not be empty'});
            return false;
        }
    }

    render() {
        return (
            <div className='options'>
                <Form onSubmit={() => this.submit()}>
                    <ContentBlock>
                        <div className='row'>
                            <div className='col-xs-9'>
                                <Input
                                    value={this.state.url}
                                    onChange={e => this.setState({
                                        url: e.target.value,
                                        urlError: false,
                                    })}
                                    placeholder='Url' />
                            </div>
                            <div className='col-xs-3'>
                                <button
                                    className='btn btn-default'>Add</button>
                            </div>
                        </div>
                    </ContentBlock>
                </Form>
                <UrlList />
            </div>
        );
    }
}

export default Options;
