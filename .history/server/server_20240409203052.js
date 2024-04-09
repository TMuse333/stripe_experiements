// index.js
import express from 'express';
import router from './stripe.js';// Import the router from stripe.js
import cors from 'cors'
const app = express();

app.use(cors());

const YOUR_DOMAIN = 'http://localhost:5173';

// Use the router defined in stripe.js
app.use('/stripe-rage', router);

app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!');
  });

  app.get('/create-checkout-session', (req, res) => {
    // Handle the GET request for '/create-checkout-session'
    // This could be used for retrieving information or rendering a page
    res.send('This is the create-checkout-session route!');
  });

  app.post('/create-checkout-session', async (req, res) => {
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

// Start the server
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
