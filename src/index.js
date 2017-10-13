import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './view/ControlPanel.js';
import store from './Store.js';
ReactDOM.render(
  <Provider store={store}>
    <ControlPanel />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
