import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import './assets/styles/global.scss';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
