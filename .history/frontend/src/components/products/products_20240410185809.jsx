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
            
        </div>
        <section className="products-display">
            <Product
            // image={q3}
            // productDescription={q3Details.description}
            // productName={q3Details.name}
            {...q3Details}
            />
                   <Product
            // image={q3}
            // productDescription={q3Details.description}
            // productName={q3Details.name}
            {...abu5Details}
            />

            <Product
            {...strikerDetails}
            />
        </section>
        </>
    )


}

export default ProductsDisplay