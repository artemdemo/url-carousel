import React, { Component } from 'react';
import Form from '../../components/Form/Form';
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
                        <input
                            value={this.state.url}
                            onChange={e => this.setState({
                                url: e.target.value,
                                urlError: false,
                            })}
                            className='form-control'
                            placeholder='Url' />
                    </ContentBlock>
                    <ContentBlock>
                        <button
                            className='btn btn-default'>Add</button>
                    </ContentBlock>
                </Form>
                <UrlList />
            </div>
        );
    }
}

export default Options;
