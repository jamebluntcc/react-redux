import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './view/ControlPanel.js';
ReactDOM.render(
  <ControlPanel />,
  document.getElementById('root'));
registerServiceWorker();
