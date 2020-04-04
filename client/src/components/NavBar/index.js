import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="navigation">
            <img src={logo} className="logo" alt="Logo" />
            <div className="navigation-sub">
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
            </div>
        </div>
    )
}

export default NavBar;