import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentComponent = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
  
    const paymentElement = elements.getElement(PaymentElement);
  
    try {
      const result = await stripe.createToken(paymentElement);
      if (result.error) {
        setError(result.error.message); // Set error message if token creation fails
        return;
      }
  
      const { token } = result; // Access token property from the result object
  
      const response = await fetch('http://localhost:3001/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Amount in cents
          token: token.id, // Access the id property of the token
        }),
      });
  
      if (response.ok) {
        console.log('Payment Successful!');
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during payment:', error);
      setError('Payment failed. Please try again.');
    }
  };
  

  return (
    <form style={{
      width: '50vw',
      overflow: 'scroll',
    }}
    onSubmit={handleSubmit}>
      <PaymentElement
       
      />

      <button type="submit" disabled={!stripe}>
        Pay ${amount}
      </button>
      {error && <div>the error &nbsp;{error}</div>}
    </form>
  );
};

export default PaymentComponent;
