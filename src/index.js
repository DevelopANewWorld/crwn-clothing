import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context.jsx';
import { ProductProvider } from './context/products.context';
import { CartProvider } from './context/cart.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </ProductProvider>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);
