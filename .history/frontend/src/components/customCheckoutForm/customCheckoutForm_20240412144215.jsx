import React from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';
import { useShoppingContext } from '../../context/shoppingContext';

const CheckoutForm = () => {

const {checkoutClicked, setCheckoutClicked} = useShoppingContext()

const handleCheckoutClick = () => {
    setCheckoutClicked(tru)e
}
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;