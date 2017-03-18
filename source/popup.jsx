import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Popup from './containers/Popup/Popup';

import './styles/popup-main.less';

render(
    <MuiThemeProvider>
        <Popup />
    </MuiThemeProvider>,
    document.getElementById('popup'),
);
