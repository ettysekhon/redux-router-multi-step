import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from './store';
import { configureRoutes } from './routes';

import './styles/css/index.css';

const store = configureStore(browserHistory, window.__initialState__);
const routes = configureRoutes(store);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  document.getElementById('root')
);
