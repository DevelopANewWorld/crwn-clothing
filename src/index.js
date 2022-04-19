import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context.jsx';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </CategoriesProvider>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);
