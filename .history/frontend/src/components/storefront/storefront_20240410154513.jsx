import React from "react";
import goku from '../../media/goku-vs-jiren.jpg'
import Product from "../product/product";
import './storefront.css'

const Storefront = () => {



    return (
        <section className="storefront-container">
            <div className="herobanner">
                <section className="herobanner-text">
                    <h1>Great art</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit tempora aliquid beatae!</p>
                    <button>
                        Shop Now
                    </button>
                </section>

                <Product
            </div>
        </section>
    )



}

export default Storefront