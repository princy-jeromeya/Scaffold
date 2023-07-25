import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ScaffoldDataProvider } from './ScaffoldContexts/AllDataContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScaffoldDataProvider>
        <App />
      </ScaffoldDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
