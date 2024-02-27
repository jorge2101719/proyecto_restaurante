import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import RestauranteProvider from './context/RestauranteContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RestauranteProvider>
        <App />
      </RestauranteProvider>
    </BrowserRouter>
  </React.StrictMode>
)
