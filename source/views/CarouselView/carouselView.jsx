import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Carousel from '../../containers/Carousel/Carousel';

import './carouselView.less';

render(
    <Provider store={store}>
        <Carousel />
    </Provider>,
    document.getElementById('carousel'),
);
