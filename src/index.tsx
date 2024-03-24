import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '@/redux/store';

import App from './App';
// 跟热更新相关--由于这个项目采用的是creat-react-app的脚手架，默认是没开启热更新的HMR的，
// 下面这个语句相当于自己打开热更新，借用脚手架直接开启热替换
if (module?.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
