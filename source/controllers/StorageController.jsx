import { Component } from 'react';
import { connect } from 'react-redux';
import {
    urlsLoaded,
} from '../model/urlList/urlListActions';


class StorageController extends Component {
    componentWillReceiveProps(nextProps) {
        const { urlsLoaded } = nextProps;
        if (this.props.storage.loading === true && nextProps.storage.loading === false) {
            urlsLoaded(nextProps.storage.data.urls);
        }
    }

    render() {
        return null;
    }
}

export default connect(
    state => ({
        storage: state.storage,
    }), {
        urlsLoaded,
    },
)(StorageController);
