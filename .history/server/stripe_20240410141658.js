// This is your test secret API key.
import stripePackage from 'stripe';
import express  from 'express';

const stripe = stripePackage('sk_test_51P3fPHD53TrvLemWwuSGOAOuqJGjT7acM30ynx7yTPm94tvadkFtlOdTfPJqsFjuK7iLkTM4s1G5RNPhO3M1lsPl00K5e8ia6T');
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

router.post('/get-price', async (req, res) => {
  try {
      const price = await stripe.prices.retrieve('price_1P3jCiD53TrvLemW2f6O5qNv'); 
      // Replace 'pr_123456789' with your actual price ID
   
      res.json({ price });
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
  console.log('HELLO')
});

router.post('/payment', async (req, res) => {
  try {

    // console.log('the req',req)
    const { amount, token } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount:200,
      currency: 'usd',
    //   payment_method: token.id,
      confirm: true,
    });

    res.json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router

