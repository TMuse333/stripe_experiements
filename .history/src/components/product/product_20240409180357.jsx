import React from "react";
import { useState } from "react";
import q3 from '../../media/q3-visuals-logo-2.png'
import './product.css'

const Product = ({image,link}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {

        setClicked(true)
    }

    const handleBackClick = () => {
        setClicked(false)
    }


    return (<>


{!clicked ? (
 <div onClick={handleClick}
  className="product-container">
 <img src={image}
 className='product-image'/>
 <h2>
     Product Name
 </h2>

</div>
) : (
    <div className="selected-product-container">
        <img src={image} className='product-image'/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium reiciendis mollitia facere, nostrum adipisci praesentium dolor earum consectetur officiis quia.</p>
        <Link to
        <button
        onClick={handleBackClick}>
            Back
        </button>
    </div>
)}
       
        </>
    )

}

export default Product