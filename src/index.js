import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyProps from './MyProps';
import MyState from './MyState';
import MethodsInClassComponents from './MethodsInClassComponents'
import PropsValidationByPropTypes from './PropsValidationByPropTypes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyProps />
    <hr />
    <hr />
    <MyState />
    <hr />
    <hr />
    <MethodsInClassComponents />
    <hr />
    <hr />
    <PropsValidationByPropTypes />
    <hr />
    <hr />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
