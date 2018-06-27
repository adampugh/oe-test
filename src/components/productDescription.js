import React from "react";

const productDescription = (props) => (
    <div className="productDescription">
        <div className="container-m">
            <h2 className="sectionTitle">Description</h2>
            <p>{props.prodDesc}</p>
            <p className="product__link">Show more</p>
        </div>
    </div>
);

export default productDescription;