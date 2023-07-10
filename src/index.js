import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import { HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <HashRouter>
       <App />
    </HashRouter>
);
