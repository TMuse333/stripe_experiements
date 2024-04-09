// index.js
import express from 'express';
import router from './stripe.js';// Import the router from stripe.js
import cors from 'cors'
const app = express();

app.use(cors());

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

  app.post

// Start the server
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
