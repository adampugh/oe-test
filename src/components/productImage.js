import React from "react";

const productImage = (props) => (
    <div className="productImage">
        <div className="container-l">
            <img src={require(`../assets/${props.prodImg}.png`)} alt="product" />
        </div>
    </div>
);

export default productImage;