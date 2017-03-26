import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import UrlList from '../UrlList/UrlList';
import { loadUrls, addUrl } from '../../model/urlList/urlListActions';

import './Options.less';

const TIMEOUTS_LIST = ['5000', '7000', '10000'];

export class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeout: 0,
            timeoutError: false,
            url: '',
            urlError: false,
        };
    }

    componentDidMount() {
        const { loadUrls } = this.props;
        loadUrls();
    }

    submitUrl() {
        if (this.state.url === '') {
            this.setState({urlError: 'Url should not be empty'});
            return;
        }
        const { addUrl } = this.props;
        addUrl(this.state.url);
        this.setState({
            url: '',
        });
    }

    submitTimeout() {
        if (this.state.timeout === '') {
            this.setState({timeoutError: 'Timeout should not be empty'});
            return;
        }
    }

    render() {
        const { urlList } = this.props;
        return (
            <div className='options'>
                <ContentBlock>
                    <Form className='row' onSubmit={() => this.submitTimeout()}>
                        <div className='col-xs-9'>
                            <Dropdown
                                list={TIMEOUTS_LIST}
                                onChange={timeout => this.setState({
                                    timeout,
                                })}
                                value={String(this.state.timeout)}
                                placeholder='Timeout' />
                        </div>
                    </Form>
                    <hr />
                    <Form className='row' onSubmit={() => this.submitUrl()}>
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
                    </Form>
                </ContentBlock>
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
