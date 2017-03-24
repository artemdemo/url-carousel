import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import UrlList from '../UrlList/UrlList';
import { loadUrls, addUrl } from '../../model/urlList/urlListActions';

import './Options.less';

export class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            urlError: false,
        };
    }

    componentDidMount() {
        const { loadUrls } = this.props;
        loadUrls();
    }

    submit() {
        if (this.state.url === '') {
            this.setState({urlError: 'Url should not be empty'});
            return false;
        }
        const { addUrl } = this.props;
        addUrl(this.state.url);
        this.setState({
            url: '',
        });
    }

    render() {
        const { urlList } = this.props;
        return (
            <div className='options'>
                <Form onSubmit={() => this.submit()}>
                    <ContentBlock>
                        <div className='row'>
                            <div className='col-xs-9'>
                                <Input
                                    value={this.state.url}
                                    error={this.state.urlError}
                                    onChange={url => this.setState({
                                        url,
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
                <UrlList list={urlList.urls} />
            </div>
        );
    }
}

export default connect(
    state => ({
        urlList: state.urlList,
    }), {
        loadUrls,
        addUrl,
    },
)(Options);
