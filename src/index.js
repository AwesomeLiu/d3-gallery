import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './global.css';
import App from './routes/router.js';

const app = document.getElementById('app');

ReactDOM.render(
  <App />,
  app
);
