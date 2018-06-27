import React from "react";

const productHeader = (props) => (
    <div className="productHeader">
        <div className="container-m">
            <h1>{props.prodName}</h1>
            <p>{props.prodTag}</p>
        </div>
    </div>
)

export default productHeader;