import React from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';
import 

const CheckoutForm = () => {

// const {checkoutClicked, setCheckoutClicked} = useShoppingContext()

// const handleCheckoutClick = () => {
//     setCheckoutClicked(true)
// }
  return (
    <form>
      <PaymentElement />
      <button
    //    onClick={handleCheckoutClick}
      >Submit</button>
    </form>
  );
};

export default CheckoutForm;