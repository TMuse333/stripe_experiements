import React, { createContext, useState, useContext } from 'react';

// Create the context
const ShoppingContext = createContext();

// Create a provider component
export const ShoppingProvider = ({ children }) => {
  // Define your state variables and functions here

  const [totalPrice, setTotalPrice] = useState(0)
  const [checkoutClicked, checkoutClicked] = useState(true)
 
  const shoppingValue = {
    totalPrice, setTotalPrice,
    checkoutClicked,
    set
  }

  return (
    <ShoppingContext.Provider
      value={shoppingValue}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

// Custom hook to use the shopping context
export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};
