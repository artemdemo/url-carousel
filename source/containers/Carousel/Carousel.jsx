import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUrls } from '../../model/urlList/urlListActions';

import './Carousel.less';

const INTERVAL_TIMEOUT = 10000;
const PROGRESS_STYLE = {
    transitionDuration: `${INTERVAL_TIMEOUT}ms`,
    width: '100%',
};

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUrl: '',
            progressStyle: {},
        };
        this.urlIndex = 0;
        this.urlList = [];
        this.iframeEl = null;
    }

    componentDidMount() {
        const { loadUrls } = this.props;
        loadUrls();
    }

    componentWillReceiveProps(nextProps) {
        this.urlList = nextProps.urlList.urls;

        if (this.props.urlList.urls !== nextProps.urlList.urls &&
            nextProps.urlList.urls.length > 0 &&
            this.state.currentUrl === '') {
            this.setState({
                currentUrl: nextProps.urlList.urls[this.urlIndex],
            });
            setInterval(
                () => {
                    this.urlIndex = this.urlList[this.urlIndex + 1] ?
                        this.urlIndex + 1 :
                        0;
                    this.setState({
                        currentUrl: this.urlList[this.urlIndex],
                        progressStyle: {},
                    });
                    setTimeout(() => {
                        this.setState({
                            progressStyle: PROGRESS_STYLE,
                        });
                    }, 100);
                },
                INTERVAL_TIMEOUT,
            );
            this.setState({
                progressStyle: PROGRESS_STYLE,
            });
        }
    }

    render() {
        return (
            <div className='url-carousel'>
                <div className='url-carousel__progress'
                     style={this.state.progressStyle} />
                <iframe className='url-carousel__iframe' src={this.state.currentUrl} />
            </div>
        );
    }
}

export default connect(
    state => ({
        urlList: state.urlList,
    }),
    {
        loadUrls,
    },
)(Carousel);
