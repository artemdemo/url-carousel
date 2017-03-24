import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import Popup from '../../containers/Popup/Popup';

import './PopupView.less';

render(
    <Popup />,
    document.getElementById('popup'),
);
