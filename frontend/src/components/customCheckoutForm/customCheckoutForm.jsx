import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CustomCheckoutForm = ({ handleSubmit }) => {
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
    } else {
      setError('');
      handleSubmit(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          Card Number:
          <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
        </label>
      </div>
      <div>
        <label>
          CVC:
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Expiry Date:
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Cardholder Name:
          <input type="text" />
        </label>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default CustomCheckoutForm;
