import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { AppSharedContextProvider } from './AppSharedContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppSharedContextProvider>
      <Router>
        <App />
      </Router>
    </AppSharedContextProvider>
  </React.StrictMode>
);
