import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentComponent from './components/paymentComponent';


import ProductsDisplay from './components/products/products';
import { ShoppingProvider } from './context/shoppingContext';
import Storefront from './components/storefront/storefront';
import {Routes, Route} from 'react-router-dom'
import { q3Details, abu5Details,strikerDetails } from './data/data'
import SelectedProduct from './components/selectedProduct/selectedProduct'
import CheckoutForm from './components/checkoutForm/checkoutForm';
import PaymentPage from './components/payment/checkoutPage';
import { useEffect } from 'react';

const stripePromise = loadStripe('pk_test_51P3fPHD53TrvLemW9IwVA5UgfWRyse4txaT8ZyIVemKTkOTDQxU4WpVZcYrbEpY6bKsDsbhFfSNte36LO9kGX6Tj00SOF42meT');
const App = () => {


  useEffect(()=> {
    const secret = async () => {
      const response = await fetch('/secret');
      const {client_secret: clientSecret} = await response.json();
    }

    secret()
  },[])

  (async () => {
   
    
  })();

  const options = {
    // passing the client secret obtained in step 3
    clientSecret: {client_secret},
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };
  return (
    <Elements stripe={stripePromise}
    options={options}>


    <ShoppingProvider>

     



<Routes>
  <Route path='/' element={<ProductsDisplay/>}></Route>
  <Route path='/q3-logo' element={<SelectedProduct
  {...q3Details}/>}></Route>

  <Route path='aboubacar-fire' element={<SelectedProduct
  {...abu5Details}/>}>



  </Route>
  <Route path='quantum-striker' element={<SelectedProduct
    {...strikerDetails}/>}>

    </Route>

    <Route path='payment' element={<PaymentPage/>}
    >

    </Route>
</Routes>
  
  
    
    </ShoppingProvider>
    </Elements>
  );
};

export default App; 