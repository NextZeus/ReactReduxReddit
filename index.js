/**
 * Created by lixiaodong on 16/7/15.
 */
import 'babel-core/polyfill';

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

render(
    <Root />,
    document.getElementById('root')
)