import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Options from './containers/Options/Options';

import './styles/options-main.less';

render(
    <Provider store={store}>
        <Options />
    </Provider>,
    document.getElementById('options'),
);
