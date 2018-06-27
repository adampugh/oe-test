import React from "react";

import logo from "../assets/logo.png";

const navbar = () => (
    <nav>
        <div className="container-l">
            <div className="navbar__wrapper">
                <span className="logo">
                    <img src={logo} alt="octopus energy logo" />
                </span>
                <span className="hamburger-menu">☰</span>
            </div>
        </div>
    </nav>
);

export default navbar;