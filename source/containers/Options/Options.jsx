import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import ElementsList from '../../components/ElementsList/ElementsList';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import StorageController from '../../controllers/StorageController';
import UrlList from '../UrlList/UrlList';
import { addUrl } from '../../model/urlList/urlListActions';
import { loadData, saveData } from '../../model/storage/storageActions';

import './Options.less';

const TIMEOUTS_LIST = ['5000', '7000', '10000', '20000', '30000', '40000', '60000', '70000'];

export class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeoutIndex: 0,
            url: '',
            urlError: false,
            saved: false,
        };
    }

    componentDidMount() {
        const { loadData } = this.props;
        loadData();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.storage.data.timeout !== nextProps.storage.data.timeout) {
            this.setState({
                timeoutIndex: (() => {
                    const newTimeoutIndex = TIMEOUTS_LIST.indexOf(nextProps.storage.data.timeout);
                    return newTimeoutIndex !== -1 ? newTimeoutIndex : 0;
                })(),
            });
        }

        if (this.props.storage.saving === true && nextProps.storage.saving === false) {
            this.setState({
                saved: true,
            });
        }
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

    saveOptions() {
        const { urlList, saveData } = this.props;
        saveData({
            urls: urlList.urls,
            timeout: TIMEOUTS_LIST[this.state.timeoutIndex],
        });
    }

    renderSaved() {
        if (this.state.saved) {
            setTimeout(() => this.setState({saved: false}), 2000);
            return (
                <span className='text-success'>
                    <Icon name='ok' />
                    Saved
                </span>
            );
        }
        return null;
    }

    render() {
        const { urlList } = this.props;
        return (
            <div className='options'>
                <StorageController />
                <ContentBlock>
                    <div className='row'>
                        <div className='col-xs-9'>
                            <Dropdown
                                list={TIMEOUTS_LIST}
                                onChange={timeoutIndex => this.setState({
                                    timeoutIndex,
                                })}
                                value={String(this.state.timeoutIndex)}
                                placeholder='Timeout' />
                        </div>
                    </div>
                    <hr />
                    <Form
                        className='row'
                        onSubmit={() => this.submitUrl()}>
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
                <ContentBlock>
                    <UrlList list={urlList.urls} />
                </ContentBlock>
                <ElementsList>
                    <Button
                        onClick={() => this.saveOptions()}
                        primary >
                        Save
                    </Button>
                    {this.renderSaved()}
                </ElementsList>
            </div>
        );
    }
}

export default connect(
    state => ({
        urlList: state.urlList,
        storage: state.storage,
    }), {
        loadData,
        saveData,
        addUrl,
    },
)(Options);
