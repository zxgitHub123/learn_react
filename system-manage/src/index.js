import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index.js';
import {Provider} from "react-redux";
import store from "./store/index";
import './index.css';
import * as serviceWorker from './serviceWorker';
if (module.hot) {
    // 模块自己就接收更新
    module.hot.accept();
  }
ReactDOM.render(
   <Provider store={store}>
       <Router/>
   </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();