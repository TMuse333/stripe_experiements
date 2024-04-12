import express from 'express';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
import cors from 'cors'; // Import cors middleware

const stripe = new Stripe('sk_test_51P3fPHD53TrvLemWwuSGOAOuqJGjT7acM30ynx7yTPm94tvadkFtlOdTfPJqsFjuK7iLkTM4s1G5RNPhO3M1lsPl00K5e8ia6T');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

app.get('/secret', async (req, res) => {
  const { amount, token } = req.query; // Use req.query to get query parameters
  try {
    console.log()
    const intent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'usd',
      payment_method_data: {
        type: 'card',
        card: {
          token: token
        }
      },
      confirm: true,
      return_url: 'https://www.google.com/search?client=safari&rls=en&q=google.com&ie=UTF-8&oe=UTF-8&safe=active'
    });
    res.json({ client_secret: intent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/payment', async (req, res) => {
  try {
    const { amount, token } = req.body;

    

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_data: {
        type: 'card',
        card: {
          token: token
        }
      },
      confirm: true,
      return_url: 'https://www.google.com/search?client=safari&rls=en&q=google.com&ie=UTF-8&oe=UTF-8&safe=active'
    });

    // console.log('Le Client Secret:', paymentIntent.client_secret);

    res.json({ client_secret: paymentIntent.client_secret });
 
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});