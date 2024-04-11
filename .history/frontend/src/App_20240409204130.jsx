import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentComponent from './PaymentComponent';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentComponent amount={50} />
    </Elements>
  );
};

export default App; 