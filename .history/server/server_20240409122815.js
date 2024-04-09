import express from 'express';
import bodyParser from 'body-parser';
import stripePackage from 'stripe';

const stripe = stripePackage('sk_test_51P3fPHD53TrvLemWwuSGOAOuqJGjT7acM30ynx7yTPm94tvadkFtlOdTfPJqsFjuK7iLkTM4s1G5RNPhO3M1lsPl00K5e8ia6T');

const app = express();
const port = 5173; // Change to the desired port

app.use(bodyParser.json());

// Route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Route to connect to Stripe and notify when connected
app.get('/connect-to-stripe', async (req, res) => {
    try {
      // Test the connection by making a request to the Stripe API
      const account = await stripe.accounts.retrieve();
  
      // If the request succeeds, Stripe is connected
      console.log('Connected to Stripe:', account);
  
      // Send success response
      res.status(200).send('Connected to Stripe!');
    } catch (error) {
      // If there's an error, Stripe is not connected
      console.error('Error connecting to Stripe:', error.message); // Log the error message
  
      // Send error response
      res.status(500).send('Error connecting to Stripe.');
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

