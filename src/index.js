import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const name = 'John Smith';
const element = <h1>Hello, {name}</h1>

//React Fragment = <React.Fragment>...</React.Fragment> shortcut => <>...</>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


