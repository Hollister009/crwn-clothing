import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './index.scss';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
, rootElement);