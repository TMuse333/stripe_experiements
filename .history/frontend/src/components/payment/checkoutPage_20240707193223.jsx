import React from "react";
import { Elements,AddressElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentComponent from '../paymentComponent';
import CustomCheckoutForm from "../customCheckoutForm/customCheckoutForm";
import CheckoutForm from "../checkoutForm/checkoutForm";


const PaymentPage = () => {

    const [clientSecret, setClientSecret] = useState(null);
  

    const {checkoutClicked, setCheckoutClicked} = useShoppingContext()
    
    const [isClientSecretFetched, setIsClientSecretFetched] = useState(false);
    
    
      useEffect(() => {
        const fetchClientSecret = async () => {
    
         
    
          
          try {
    
           
    
            
            const response = await fetch('http://localhost:3001/secret');
         
            const {client_secret: clientSecret} = await response.json();
            // if(!checkoutClicked){
    
         setClientSecret(clientSecret)
         setIsClientSecretFetched(true)
        // }
          } catch (error) {
            console.error('Error fetching client secret:', error);
          }
        };
        if(!checkoutClicked){
          fetchClientSecret();
    
        }
    
    
      
    
    
     
      }, [isClientSecretFetched]);
    
    
    useEffect(()=>{
      console.log('retireved secret',clientSecret)
    },[clientSecret])
    
      const options = {
        // passing the client secret obtained in step 3
        clientSecret: clientSecret,
        // Fully customizable with appearance API.
        appearance: {/*...*/},
      };

    const stripePromise = loadStripe('pk_test_51P3fPHD53TrvLemW9IwVA5UgfWRyse4txaT8ZyIVemKTkOTDQxU4WpVZcYrbEpY6bKsDsbhFfSNte36LO9kGX6Tj00SOF42meT');
//slat

    return (
        <Elements stripe={stripePromise}  
        options={options}>

       
        <div className="payment-page-container">


<CheckoutForm/>
       
       

        </div>
        </Elements>
    )
}

export default PaymentPage