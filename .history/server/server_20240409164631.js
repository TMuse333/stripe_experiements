// index.js
import cors
import express from 'express';
import router from './stripe.js';// Import the router from stripe.js

const app = express();

// Use the router defined in stripe.js
app.use('/create-checkout-session', router);

app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!');
  });

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
