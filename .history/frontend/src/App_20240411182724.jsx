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

  const [clientSecret, setClientSecret] = useState(null); // Define a state variable to store clientSecret

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch('/secret');
        const { client_secret: secret } = await response.json();
        setClientSecret(secret); // Store the client secret in the state variable
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };
  
    fetchClientSecret();
  }, []);
  



  


  const options = {
    // passing the client secret obtained in step 3
    clientSecret: clientSecret,
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