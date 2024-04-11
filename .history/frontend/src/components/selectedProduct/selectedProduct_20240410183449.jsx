import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useShoppingContext } from "../../context/shoppingContext";
import './selectedProduct.css'




const SelectedProduct = ({image, productName, productDescription, link}) => {

    const {totalPrice, setTotalPrice} = useShoppingContext()

    useEffect(()=> {
        console.log('total price',totalPrice)
    },[totalPrice])

    const [price, setPrice] = useState(99.00);

    const [itemQuantity, setItemQuantity] = useState(1)



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


    


    return (

    <div className="selected-product-container">
    <img src={image} className='selected-product-image' />
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

        <Link to='/'>
            back
        </Link>

        {/* <button onClick={handleBackClick}>Back</button> */}
    </div>
</div>
    )
}

export default SelectedProduct