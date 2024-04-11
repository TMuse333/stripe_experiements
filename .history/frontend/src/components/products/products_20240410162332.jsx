import React from "react";

import q3 from '../../media/q3-visuals-logo-2.png'
import striker from '../../media/quantum-striker-pose.png'
import abu5 from '../../media/aboubacar-5-fire.png'
import Product from "../product/product";
import './products.css'
import { q3Details } from "../../data/data";


const Products = () => {

    return (
        <>
        <section className="products-display">
            <Product
            image={q3}
            productDescription={q3Details.description}
            productName={q3Details.name}
            />
        </section>
        </>
    )


}

export default Products