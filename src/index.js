import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './views/pages/Home';

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
