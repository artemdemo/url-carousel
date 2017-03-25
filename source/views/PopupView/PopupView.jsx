import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Popup from '../../containers/Popup/Popup';

import './PopupView.less';

render(
    <Provider store={store}>
        <Popup />
    </Provider>,
    document.getElementById('popup'),
);
