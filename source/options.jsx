import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import Options from './containers/Options/Options';

import './styles/options-main.less';

render(
    <Options />,
    document.getElementById('options'),
);
