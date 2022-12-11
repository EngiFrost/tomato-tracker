import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import ScreenWakeLock from 'screen-wake-lock';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ScreenWakeLock />
    <App />
  </React.StrictMode>
);
