import React from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentComponent from '../paymentComponent';


const PaymentPage = () => {


    return (
        <div className="payment-page-container">

<Elements stripe={stripePromise}
        >
       <PaymentComponent amount={50} />
       
     </Elements>
        </div>
    )
}

export default PaymentPage