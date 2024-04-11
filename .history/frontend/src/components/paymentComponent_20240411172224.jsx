import React, { useState } from 'react';
import { CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const PaymentComponent = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const result = await stripe.createToken(cardElement);
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
      setError(error.message);
    }
  };

  return (
    <form style={{
      width: '50vw',
    overflow: 'scroll',
    }}
    onSubmit={handleSubmit}>
     <CardElement
  options={{
   
    style: {
      base: {
        fontSize: '26px', // Change the font size
        color: 'black', // Change the text color
        '::placeholder': {
          color: '#aab7c4',
          backgroundColor:'white',
          borderRadius:'1rem',
          padding:'1rem' // Change the placeholder color
        },
        // Set the width of the input field
      },
      invalid: {
        color: '#9e2146', // Change the color for invalid inputs
      },
    },
  }}
/>


      <button type="submit" disabled={!stripe}>
        Pay ${amount}
      </button>
      {error && <div>the error &nbsp;{error}</div>}
    </form>
  );
};

export default PaymentComponent;
