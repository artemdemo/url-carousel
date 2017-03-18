import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BrowserMenu from './components/BrowserMenu/BrowserMenu';

import './styles/popup.less';

render(
    <MuiThemeProvider>
        <BrowserMenu />
    </MuiThemeProvider>,
    document.getElementById('popup'),
);
