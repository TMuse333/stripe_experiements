// This is your test secret API key.
import stripePackage from 'stripe';
import express  from 'express';

const stripe = stripePackage('sk_test_51P3fPHD53TrvLemWwuSGOAOuqJGjT7acM30ynx7yTPm94tvadkFtlOdTfPJqsFjuK7iLkTM4s1G5RNPhO3M1lsPl00K5e8ia6T');
const app = express();
app.use(express.static('public'));

// Rest of your code...

const router = express.Router()



const YOUR_DOMAIN = 'http://localhost:5173';

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

export default router

