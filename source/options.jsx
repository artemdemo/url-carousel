import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Options from './containers/Options/Options';

import './styles/options-main.less';

render(
    <MuiThemeProvider>
        <Options />
    </MuiThemeProvider>,
    document.getElementById('options'),
);
