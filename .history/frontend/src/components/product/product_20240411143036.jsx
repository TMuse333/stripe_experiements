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

const [hovered, setHovered]

    

    return (
        <>
      <div  className="product-container">
       
    

      <Link to={page}>
               
                    <img src={image} className='product-image' />
                    </Link>
                    <Link to={page}>
                    <h2>{productName}</h2>
                    </Link>
                   
                  
                    <div className="strong-price">
                 <span ><strong>Price:</strong> &nbsp;{price}</span>
                    </div>
                    
                </div>
                </>
             
    );
}

export default Product;
