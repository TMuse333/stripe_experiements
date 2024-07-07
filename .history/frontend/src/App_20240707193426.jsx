import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentComponent from './components/paymentComponent';


import ProductsDisplay from './components/products/products';
import { ShoppingProvider, useShoppingContext } from './context/shoppingContext';
import Storefront from './components/storefront/storefront';
import {Routes, Route} from 'react-router-dom'
import { q3Details, abu5Details,strikerDetails } from './data/data'
import SelectedProduct from './components/selectedProduct/selectedProduct'
import CheckoutForm from './components/checkoutForm/checkoutForm';
import PaymentPage from './components/payment/checkoutPage';
import { useEffect, useState } from 'react';


const App = () => {



 return (
    
      // <Elements stripe={stripePromise} options={options}>
        <ShoppingProvider>
          <Routes>
            <Route path='/' element={<ProductsDisplay />} />
            <Route path='/q3-logo' element={<SelectedProduct {...q3Details} />} />
            <Route path='aboubacar-fire' element={<SelectedProduct {...abu5Details} />} />
            <Route path='quantum-striker' element={<SelectedProduct {...strikerDetails} />} />
            <Route path="/payment" element={
         
            <PaymentPage />

            }/>
          </Routes>
        </ShoppingProvider>
      //  </Elements>
    
  );
};

export default App; 