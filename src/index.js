import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './global.css';
import Dashboard from './router/dashboard/index';

const app = document.getElementById('app');

ReactDOM.render(
  <Dashboard />,
  app
);
