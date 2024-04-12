import './index.css'
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ShoppingProvider, useShoppingContext } from './context/shoppingContext';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <ShoppingProvider>
    
  </ShoppingProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>
);