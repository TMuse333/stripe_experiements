import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import q3 from '../../media/q3-visuals-logo-2.png'
import './product.css'

import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51P3fPHD53TrvLemWwuSGOAOuqJGjT7acM30ynx7yTPm94tvadkFtlOdTfPJqsFjuK7iLkTM4s1G5RNPhO3M1lsPl00K5e8ia6T');

const Product = ({ image, link }) => {
    const [clicked, setClicked] = useState(false);
    const [price, setPrice] = useState(null);


    useEffect(()=> {

        const getPrice = async () => {
            const price = await stripe.prices.retrieve('price_1P3jCiD53TrvLemW2f6O5qNv'); 
            setPrice(price.unit_amount)
        }

        getPrice()

    },[])

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
                    <h2>Product Name</h2>
                    <div>
                 <span><strong>Price:</strong></span>
                    </div>
                    
                </div>
            ) : (
                <div className="selected-product-container">
                    <img src={image} className='product-image' />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Laudantium reiciendis mollitia facere, nostrum adipisci
                        praesentium dolor earum consectetur officiis quia.
                    </p>
                    <p>Price: {price}</p>
                    <div className="buttons-container">
                        <Link style={{ marginBottom: '2rem' }} to={link}>
                            Buy Now
                        </Link>
                        <button onClick={handleBackClick}>Back</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Product;
