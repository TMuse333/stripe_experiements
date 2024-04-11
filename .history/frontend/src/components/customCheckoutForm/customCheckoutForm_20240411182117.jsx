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
    
  );
};

export default CustomCheckoutForm;
