import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import Carousel from './containers/Carousel/Carousel';

import './styles/carousel-main.less';

render(
    <Carousel />,
    document.getElementById('carousel'),
);
