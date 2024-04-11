import React from "react";

import q3 from '../../media/q3-visuals-logo-2.png'
import striker from '../../media/quantum-striker-pose.png'
import abu5 from '../../media/aboubacar-5-fire.png'
import Product from "../product/product";
import './products.css'
import { q3Details, abu5Details, strikerDetails } from "../../data/data";


const ProductsDisplay = () => {

    return (
        <>
        <div className="products-display-container">

      
        <div className="products-display">

            <div className="grid-element">
                <h2>Grid rage</h2>
                </div>
                <div className="grid-element">
                <h2>Grid rage</h2>
                </div>
            {/* <Product
            
            {...q3Details}
            />
                   <Product
           
            {...abu5Details}
            />

            <Product
            {...strikerDetails}
            />

                <Product
            
            {...q3Details}
            /> */}
        </div>
        </div>
        </>
    )


}

export default ProductsDisplay