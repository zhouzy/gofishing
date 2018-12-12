import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '@/routes/index.jsx';

let FastClick = require('fastclick');
FastClick.attach(document.body);
ReactDOM.render(<AppRouter />, document.getElementById('root'));
