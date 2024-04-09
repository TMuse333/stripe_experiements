import React from "react";
import q3 from '../../media/q3-visuals-logo-2.png'
import './product.css'

const Product = ({image}) => {


    return (
        <div className="product-container">
            <img src={q3}
            className='product-image'/>

        </div>
    )

}

export default Product