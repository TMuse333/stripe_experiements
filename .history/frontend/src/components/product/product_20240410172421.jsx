import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import q3 from '../../media/q3-visuals-logo-2.png'
import './product.css'

import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51P3fPHD53TrvLemWwuSGOAOuqJGjT7acM30ynx7yTPm94tvadkFtlOdTfPJqsFjuK7iLkTM4s1G5RNPhO3M1lsPl00K5e8ia6T');

const Product = ({image, productName, productDescription, link, }) => {
    const [clicked, setClicked] = useState(false);
    const [price, setPrice] = useState(99.00);

    const [itemQuantity, setItemQuantity] = useState(1)

    const increaseQuantity = () => {
        setItemQuantity((prevQuantity)=>prevQuantity +1)
 
    }

    const decreaseQuantity = () => {
        setItemQuantity((prevQuantity)=>prevQuantity -11)
       
    }


    // useEffect(()=> {

    //     const getPrice = async () => {
    //         const price = await stripe.prices.retrieve('price_1P3jCiD53TrvLemW2f6O5qNv'); 
    //         setPrice(price.unit_amount)
    //     }

    //     getPrice()

    // },[])

    const handleClick = async () => {

       

        setClicked(true)


  
    }

    const handleBackClick = () => {
        setClicked(false);
        setPrice(null); // Reset price when going back
    }

    return (
        <>
            {!clicked ? (
                <div onClick={handleClick} className="product-container">
                    <img src={image} className='product-image' />
                    <h2>{productName}</h2>
                    <div className="strong-price">
                 <span ><strong>Price:</strong> &nbsp;{price}</span>
                    </div>
                    
                </div>
            ) : (
                <div className="selected-product-container">
                    <img src={image} className='product-image' />
                    <h1>{productName}</h1>
                    <p>
                       {productDescription}
                    </p>
                    <h2 className="price-box">${price}</h2>
                    <button className="select-size-button">Select size</button>
                    <div className="buttons-container">

                        <div className="quantity-container">
                            <button className="quantity-button">
                                -
                            </button>
                            <button className="quantity-button middle"
                            >{itemQuantity}</button>
                            <button onClick={increaseQuantity}
                             className="quantity-button">
                                +
                            </button>
                        </div>
                        <Link style={{ marginBottom: '2rem' }} to={link}>
                            Buy Now
                        </Link>

                        {/* <button onClick={handleBackClick}>Back</button> */}
                    </div>
                </div>
            )}
        </>
    );
}

export default Product;
