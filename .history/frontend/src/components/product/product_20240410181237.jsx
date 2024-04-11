import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import q3 from '../../media/q3-visuals-logo-2.png'
import './product.css'

import Stripe from 'stripe'
import { useShoppingContext } from "../../context/shoppingContext";



const Product = ({image, productName, productDescription, link, page }) => {
    const [clicked, setClicked] = useState(false);
    const [price, setPrice] = useState(99.00);

    const [itemQuantity, setItemQuantity] = useState(1)


    const {totalPrice, setTotalPrice} = useShoppingContext()


    const handleAddToCart = () => {
        setTotalPrice((prevTotalPrice) => prevTotalPrice + (price * itemQuantity))
        console.log('the total price in the cart is',totalPrice)
    }

    const increaseQuantity = () => {
        setItemQuantity((prevQuantity)=>prevQuantity +1)
 
    }

    const decreaseQuantity = () => {
        if(itemQuantity > 1){
            setItemQuantity((prevQuantity)=>prevQuantity -1)
        }
      
       
    }


    

    const handleClick = async () => {

       

        setClicked(true)


  
    }

    const handleBackClick = () => {
        setClicked(false);
        setPrice(null); // Reset price when going back
    }

    return (
        <Link to={page}
                <div onClick={handleClick} className="product-container">
                    <img src={image} className='product-image' />
                    <h2>{productName}</h2>
                    <div className="strong-price">
                 <span ><strong>Price:</strong> &nbsp;{price}</span>
                    </div>
                    
                </div>
    );
}

export default Product;
