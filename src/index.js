// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Converter from './components/Converter';

ReactDOM.render(
  <React.StrictMode>
    <Converter />
  </React.StrictMode>,
  document.getElementById('root')
);
