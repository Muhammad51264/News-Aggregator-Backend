import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import Layout from './pages/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
