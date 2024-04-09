import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.


const App = () => {
  return (
    <div className="App">
      <h1>Stripe nation</h1>
    </div>
  )
}

export default App;