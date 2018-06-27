import React from "react";

const productCart = (props) => (
    <div className="productCart">
        <div className="container-m">
            <div className="productCart__grid">
                <div className="productCart__price">
                    <span className="productCart__price__pounds">{`£${props.prodPricePounds}`}</span>
                    <span className="productCart__price__pence">{`.${props.prodPricePence}`}</span>
                </div>
                <div className="productCart__Quantity">
                    <h3>QTY</h3>
                    <div className="productCart__Quantity__buttons">
                        <button onClick={props.increaseQty}className="btn-blue">+</button>
                        <h1>{props.prodQty}</h1>
                        <button onClick={props.decreaseQty} className="btn-blue">-</button>
                    </div>
                </div>
            </div>
            <button onClick={props.addedToCart} className="btn-pink">Add to cart</button>
        </div>
    </div>
);

export default productCart;