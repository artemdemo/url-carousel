import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import Carousel from '../../containers/Carousel/Carousel';

import './carouselView.less';

render(
    <Carousel />,
    document.getElementById('carousel'),
);
