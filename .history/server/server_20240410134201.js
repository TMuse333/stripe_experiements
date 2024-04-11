import express from 'express';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
import cors from 'cors'; // Import cors middleware

const stripe = new Stripe('sk_test_51P3fPHD53TrvLemWwuSGOAOuqJGjT7acM30ynx7yTPm94tvadkFtlOdTfPJqsFjuK7iLkTM4s1G5RNPhO3M1lsPl00K5e8ia6T');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware


app.post('/get-price', async (req, res) => {
    try {
        const price = await stripe.prices.retrieve('price_1P3jCiD53TrvLemW2f6O5qNv'); 
        // Replace 'pr_123456789' with your actual price ID

        res.json({ price });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/payment', async (req, res) => {
  try {

    console.log('the req',req)
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
