import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.

const stripePromise = loadStripe('pk_test_51P3fPHD53TrvLemW9IwVA5UgfWRyse4txaT8ZyIVemKTkOTDQxU4WpVZcYrbEpY6bKsDsbhFfSNte36LO9kGX6Tj00SOF42meT')


const App = () => {
  return (
    <div className="App">
      <h1>Stripe nation</h1>
      <img src={vegeta}
      style={{
        width:'300px'
      }}
    </div>
  )
}

export default App;