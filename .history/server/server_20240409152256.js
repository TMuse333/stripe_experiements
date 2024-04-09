// index.js

import express from 'express';
import stripeRouter from './stripe.js'; // Import the router from stripe.js

const app = express();

// Use the router defined in stripe.js
app.use('/api', stripeRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
