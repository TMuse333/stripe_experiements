import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "./App.css";
import { Link } from "react-router-dom";

const ProductDisplay = ({ handleSubmit }) => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <form onSubmit={handleSubmit}>
      <button type="submit">Checkout</button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p style={{ color: "black" }}>{message}</p> {/* Display the message */}
  </section>
);

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request using Axios
      const response = await axios.post(
        "http://localhost:3000/create-checkout-session"
      );
      // Handle the response or display a success message
      setMessage("Order created successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error creating order:", error);
      setMessage("Error creating order. Please try again later.");
    }
  };

  return (
    <>
    <h1>Buy here</h1>
    <Link style={{
      color:'white'
    }}
    to='https://buy.stripe.com/test_aEUdRr0dv9Gy80w9AA'>
      CLcik
    </Link>
    </>
  )

  // return message ? (
  //   <Message message={message} />
  // ) : (
  //   <ProductDisplay handleSubmit={handleSubmit} />
  // );
};

export default App;
