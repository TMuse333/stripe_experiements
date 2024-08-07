// This is your test secret API key.
import stripePackage from 'stripe';
import express  from 'express';
import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()

const stripe = new Stripe(process.env.stripe_publish_key);
const app = express();
app.use(express.static('public'));

// Rest of your code...



const router = express.Router()



const YOUR_DOMAIN = 'http://localhost:3001';

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1P3jCiD53TrvLemW2f6O5qNv',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    automatic_tax: {enabled: true},
  });

  res.send({url: session.url});
});

router.get('/get-price', async (req, res) => {
  console.log('hello')
  try {
      const price = await stripe.prices.retrieve('price_1P3jCiD53TrvLemW2f6O5qNv'); 
      // Replace 'pr_123456789' with your actual price ID
   
      res.json({ price });
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }

});




export default router

