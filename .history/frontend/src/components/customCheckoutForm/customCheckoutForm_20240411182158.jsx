import React from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {

    (async () => {
        const response = await fetch('/secret');
        const {client_secret: clientSecret} = await response.json();
        // Render the form using the clientSecret
      })();
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;