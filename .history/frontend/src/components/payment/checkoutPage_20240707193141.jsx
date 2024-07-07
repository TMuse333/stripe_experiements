import React from "react";
import { Elements,AddressElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentComponent from '../paymentComponent';
import CustomCheckoutForm from "../customCheckoutForm/customCheckoutForm";
import CheckoutForm from "../checkoutForm/checkoutForm";


const PaymentPage = () => {

    const stripePromise = loadStripe('pk_test_51P3fPHD53TrvLemW9IwVA5UgfWRyse4txaT8ZyIVemKTkOTDQxU4WpVZcYrbEpY6bKsDsbhFfSNte36LO9kGX6Tj00SOF42meT');
//slat

    return (
        <Elements stripe={stripePromise}  
        options={options}>
            
        </Elements>
        <div className="payment-page-container">


<CheckoutForm/>
       
       

        </div>
    )
}

export default PaymentPage