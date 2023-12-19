import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

// Remove createRoot and use ReactDOM.render
ReactDOM.render(
  <React.StrictMode>                 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);