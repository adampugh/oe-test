import React from "react";

const productPerformance = (props) => (
    <div className="productPerformance">
        <div className="container-m">
            <h2 className="sectionTitle">Performance</h2>
            <img src={require(`../assets/${props.prodPerf}.png`)} alt="performance graph" />
        </div>
    </div>
);

export default productPerformance;