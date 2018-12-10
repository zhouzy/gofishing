import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var FastClick = require('fastclick');
FastClick.attach(document.body);
ReactDOM.render(<App />, document.getElementById('root'));
