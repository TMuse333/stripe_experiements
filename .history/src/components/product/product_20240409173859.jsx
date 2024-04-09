import React from "react";
import { useState } from "react";
import q3 from '../../media/q3-visuals-logo-2.png'
import './product.css'

const Product = ({image}) => {

    const [clicked, setClicked] = useState(false)


    return (<>


{!clicked ? (
    
)}
        <div className="product-container">
            <img src={q3}
            className='product-image'/>
            <h2>
                Product Name
            </h2>

        </div>
        </>
    )

}

export default Product