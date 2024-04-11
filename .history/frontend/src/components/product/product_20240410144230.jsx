import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import q3 from '../../media/q3-visuals-logo-2.png'
import './product.css'

const Product = ({ image, link }) => {
    const [clicked, setClicked] = useState(false);
    const [price, setPrice] = useState(null);

    const handleClick = async () => {
        try {
            const response = await axios.get('http:localhost:3001/get-price');
            console.log(response) // Use Axios to make a GET request
            if (!response.data) {
                throw new Error('Failed to fetch price');
            }
            // setPrice(response.data.price.unit_amount);
            // setClicked(true);
        } catch (error) {
            console.error(error.message);
            // Handle error
        }
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
