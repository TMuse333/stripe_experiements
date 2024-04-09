// index.js

import express from 'express';
import router from './stripe';// Import the router from stripe.js

const app = express();

// Use the router defined in stripe.js
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
