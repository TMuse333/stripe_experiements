import React, { useState } from 'react';

const CustomCheckoutForm = ({ handleSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add validation logic here if needed
    if (!cardNumber || !cvc || !expiryDate || !cardholderName) {
      setError('Please fill in all fields');
      return;
    }
    // Pass the form data to the handleSubmit function for further processing
    handleSubmit({ cardNumber, cvc, expiryDate, cardholderName });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Card Number:</label>
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </div>
      <div>
        <label>CVC:</label>
        <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
      </div>
      <div>
        <label>Expiry Date:</label>
        <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
      </div>
      <div>
        <label>Cardholder Name:</label>
        <input type="text" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default CustomCheckoutForm;
