import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import { connect } from 'react-redux';
import { playUrls, stopUrls } from '../../../model/status/statusActions';

import './Conrtollers.less';

class Controllers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.visibleTimeoutId = null;
    }

    playToggle() {
        const { status, playUrls, stopUrls } = this.props;
        const iconEl = (() => {
            if (status.isPlaying) {
                return (
                    <span className='glyphicon glyphicon-pause' />
                );
            }
            return (
                <span className='glyphicon glyphicon-play' />
            );
        })();
        return (
            <div className='controllers__item'
                 onClick={() => {
                     if (status.isPlaying) {
                         stopUrls();
                     } else {
                         playUrls();
                     }
                 }}>
                {iconEl}
            </div>
        );
    }

    hideControllersTimeout() {
        clearTimeout(this.visibleTimeoutId);
        this.visibleTimeoutId = setTimeout(() => {
            this.setState({visible: false});
            this.visibleTimeoutId = null;
        }, 5000);
    }

    render() {
        const { onSlideChange } = this.props;
        const controllersClass = classnames({
            controllers: true,
            controllers_visible: this.state.visible,
        });

        return (
            <div className='controllers-container'>
                {this.props.children}
                <div className='controllers-container__mouse-events'
                     onMouseMove={_.throttle(() => {
                         this.setState({visible: true});
                         this.hideControllersTimeout();
                     }, 80)} />
                <div className={controllersClass}
                     onMouseEnter={() => clearTimeout(this.visibleTimeoutId)}
                     onMouseLeave={() => this.hideControllersTimeout()}>
                    <div className='controllers__item'
                         onClick={() => onSlideChange && onSlideChange(false)}>
                        <span className='glyphicon glyphicon-step-backward' />
                    </div>
                    {this.playToggle()}
                    <div className='controllers__item'
                         onClick={() => onSlideChange && onSlideChange(true)}>
                        <span className='glyphicon glyphicon-step-forward' />
                    </div>
                </div>
            </div>
        );
    }
}

Controllers.propTypes = {
    onSlideChange: React.PropTypes.func,
};

export default connect(
    state => ({
        status: state.status,
    }), {
        playUrls,
        stopUrls,
    },
)(Controllers);
