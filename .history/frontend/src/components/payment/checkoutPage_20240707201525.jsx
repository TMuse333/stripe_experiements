import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useShoppingContext } from '../../context/shoppingContext';
import CheckoutForm from '../checkoutForm/checkoutForm';

import dotenv from 'dotenv'



const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const { checkoutClicked, setCheckoutClicked } = useShoppingContext();
  const stripePromise = loadStripe(process.env.stripe_publish_key);

  const fetchClientSecret = async () => {
    try {
      const response = await fetch('http://localhost:3001/secret');
      const { client_secret: clientSecret } = await response.json();
      setClientSecret(clientSecret);
    } catch (error) {
      console.error('Error fetching client secret:', error);
    }
  };

  const handleCheckoutClick = () => {
    setCheckoutClicked(true);
    fetchClientSecret();
  };

  const options = {
    clientSecret: clientSecret,
    appearance: {/*...*/},
  };

  return (
    <div className="payment-page-container">
      <button onClick={handleCheckoutClick} disabled={checkoutClicked}>
        Proceed to Payment
      </button>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentPage;
