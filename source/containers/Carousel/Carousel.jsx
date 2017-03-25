import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controllers from './Controllers/Controllers';
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
        this.intervalId = null;
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
            this.runInterval();
        }

        if (this.props.status.isPlaying !== nextProps.status.isPlaying) {
            if (!nextProps.status.isPlaying) {
                clearInterval(this.intervalId);
                this.setState({
                    progressStyle: {},
                });
            } else {
                this.runInterval();
            }
        }
    }

    runInterval() {
        this.intervalId = setInterval(
            () => this.changeSlide(),
            INTERVAL_TIMEOUT,
        );
        this.setState({
            progressStyle: PROGRESS_STYLE,
        });
    }

    changeSlide(forward = true) {
        const nextIndex = forward ? this.urlIndex + 1 : this.urlIndex - 1;
        this.urlIndex = (() => {
            if (forward) {
                return this.urlList[nextIndex] ? nextIndex : 0;
            }
            return this.urlList[nextIndex] ? nextIndex : this.urlList.length - 1;
        })();
        this.setState({
            currentUrl: this.urlList[this.urlIndex],
            progressStyle: {},
        });
        setTimeout(() => {
            this.setState({
                progressStyle: PROGRESS_STYLE,
            });
        }, 100);
    }

    render() {
        return (
            <div className='url-carousel'>
                <div className='url-carousel__progress'
                     style={this.state.progressStyle} />
                <Controllers onSlideChange={(forward) => {
                    clearInterval(this.intervalId);
                    this.runInterval();
                    this.changeSlide(forward);
                }}>
                    <iframe className='url-carousel__iframe' src={this.state.currentUrl} />
                </Controllers>
            </div>
        );
    }
}

export default connect(
    state => ({
        urlList: state.urlList,
        status: state.status,
    }),
    {
        loadUrls,
    },
)(Carousel);
