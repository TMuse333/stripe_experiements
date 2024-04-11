import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentComponent from './components/paymentComponent';

const stripePromise = loadStripe('pk_test_51P3fPHD53TrvLemW9IwVA5UgfWRyse4txaT8ZyIVemKTkOTDQxU4WpVZcYrbEpY6bKsDsbhFfSNte36LO9kGX6Tj00SOF42meT');
import Products from './components/products/products';
import { ShoppingProvider } from './context/shoppingContext';
import Storefront from './components/storefront/storefront';
import {Routes, Route} from 'react-router-dom'
import { q3Details, abu5Details,strikerDetails } from './data/data'
import SelectedProduct from './components/selectedProduct/selectedProduct'
const App = () => {

    {/* // <Elements stripe={stripePromise}>
    //   <PaymentComponent amount={50} />
    // </Elements> */}
  return (
    <ShoppingProvider>

<Routes>
  <Route path='/' element={<ProductDisplay/>}></Route>
  <Route path='/q3-logo' element={<SelectedProduct
  {...q3Details}/>}></Route>

  <Route path='aboubacar-fire' element={<SelectedProduct
  {...abu5Details}/>}>

    <Route path='quantum-striker' element={<SelectedProduct
    {...strikerDetails}/>}>

    </Route>

  </Route>
</Routes>
  
  
    
    </ShoppingProvider>
  );
};

export default App; 