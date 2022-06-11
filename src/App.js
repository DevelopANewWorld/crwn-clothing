import './App.css';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom'
import Shop from './routes/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React from 'react';
import Navigation from './routes/navigation/navigation.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<Navigation/>}>
          <Route index element = {<Home />}/>
          <Route path= '/shop/*' element = {<Shop />} />
          <Route path = '/signin' element= {<SignInAndSignUpPage />} />
          <Route path = '/checkout' element= {<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;