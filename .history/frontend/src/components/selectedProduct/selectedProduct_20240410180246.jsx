import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useShoppingContext } from "../../context/shoppingContext";





const SelectedProduct = ({image, productName, productDescription, link}) => {

    const {totalPrice, setTotalPrice} = useShoppingContext


    return (

    <div className="selected-product-container">
    <img src={image} className='product-image selected' />
    <h1>{productName}</h1>
    <p>
       {productDescription}
    </p>
    <h2 className="price-box">${price}</h2>
    <button className="select-size-button">Select size</button>
    <div className="buttons-container">

        <div className="quantity-container">
            <button onClick={decreaseQuantity}
            className="quantity-button">
                -
            </button>
            <button className="quantity-button middle"
            >{itemQuantity}</button>
            <button onClick={increaseQuantity}
             className="quantity-button">
                +
            </button>
        </div>
        <Link className="purchase-button"
        style={{ marginBottom: '2rem' }} to={link}>
            Buy Now
        </Link>

        <button className="purchase-button"
         onClick={handleAddToCart}
        >
            Add to cart
        </button>

        {/* <button onClick={handleBackClick}>Back</button> */}
    </div>
</div>
    )
}

export default SelectedProduct