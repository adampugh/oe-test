import React from "react";

const productSpecifications = (props) => (
    <div className="productSpecifications">
        <div className="container-m">
            <h2 className="sectionTitle">Specifications</h2>
            {/* in real project would map over object props and render component for each */}
            <div className="productSpeicifcations__row">
                <span>Brand</span>
                <span>{props.prodSpecs.brand}</span>
            </div>
            <div className="productSpeicifcations__row">
                <span>Item weight</span>
                <span>{props.prodSpecs.itemWeight}</span>
            </div>
            <div className="productSpeicifcations__row">
                <span>Dimensions</span>
                <span>{props.prodSpecs.dimensions}</span>
            </div>
            <div className="productSpeicifcations__row">
                <span>Item model number</span>
                <span>{props.prodSpecs.itemModelNumber}</span>
            </div>
            <div className="productSpeicifcations__row">
                <span>Colour</span>
                <span>{props.prodSpecs.colour}</span>
            </div>
            <p className="product__link">Show more</p>
        </div>
    </div>
);

export default productSpecifications;
