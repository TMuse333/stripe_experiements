const express = require('express');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/payment', async (req, res) => {
  try {
    const { amount, token } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: token.id,
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