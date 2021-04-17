import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

window.onload = function () {
  setTimeout(() => {
    window.scrollTo(0, 200);
  }, 0);
}

if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开本页面，以保证体验和浏览效果');
  const image = document.createElement('img');
  image.src = require('./assets/code-react.png');
  image.style.position = "fixed";
  image.style.left = "50%";
  image.style.top = "50%";
  image.style.transform = "translate(-50%, -50%)";
  image.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.25)";
  document.body.appendChild(image);
}