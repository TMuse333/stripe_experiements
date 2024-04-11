import express from 'express';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
import cors from 'cors'; // Import cors middleware

const stripe = new Stripe('sk_test_51P3fPHD53TrvLemWwuSGOAOuqJGjT7acM30ynx7yTPm94tvadkFtlOdTfPJqsFjuK7iLkTM4s1G5RNPhO3M1lsPl00K5e8ia6T');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware


app.listen(()=>{
    console.log('hello')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
