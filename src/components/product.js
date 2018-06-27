import React, { Component } from "react";

import ProductImage from "./productImage";
import ProductHeader from "./productHeader";
import ProductCart from "./productCart";
import ProductDescription from "./productDescription";
import ProductSpecifications from "./productSpecifications";
import ProductPerformance from "./productPerformance";

class Product extends Component {
    // dummy data, would usually be fetched from db
    state = {
        productImage: "bulb",
        productName: "Energy saving light bulb",
        productTagline: "25W // Packet of 4",
        productPricePounds: "12",
        productPricePence: "99",
        productQuantity: 1,
        productDescription: "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wiaint around warm start and flicker free features...",
        productPerformance: "graph",
        productSpecifications: {
            brand: "Philips",
            itemWeight: "77g",
            dimensions: "12.6x6.2x6.2cm",
            itemModelNumber: "E27 ES",
            colour: "Cool daylight"
        }
    }

    increaseQty = () => {
        this.setState({
            productQuantity: this.state.productQuantity + 1,
        });
    }

    decreaseQty = () => {
        if (this.state.productQuantity > 0) {
            this.setState({
                productQuantity: this.state.productQuantity - 1,
            });
        }
    }

    addedToCart = () => {
        alert("Added to cart!");
    }

    render() {
        return (
            <div>
                <div className="productDesktop__header container-desktop">
                    <ProductImage prodImg={this.state.productImage} />
                    <div>
                        <ProductHeader 
                            prodName={this.state.productName}
                            prodTag={this.state.productTagline}
                        />
                        <ProductCart 
                            prodPricePounds={this.state.productPricePounds}
                            prodPricePence={this.state.productPricePence}
                            prodQty={this.state.productQuantity}
                            decreaseQty={this.decreaseQty}
                            increaseQty={this.increaseQty}
                            addedToCart={this.addedToCart}
                        />
                        <ProductDescription 
                            prodDesc={this.state.productDescription}
                        />
                    </div>
                </div>
                <div className="productDesktop__content container-desktop">
                    <ProductSpecifications 
                        prodSpecs={this.state.productSpecifications}
                    />
                    <ProductPerformance 
                        prodPerf={this.state.productPerformance}
                    />
                </div>
            </div>
        )
    }
}

export default Product;