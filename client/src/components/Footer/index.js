import React from "react";
import { Navbar } from "react-bootstrap";
import './style.css';

const Footer = () => {

    return (
        <Navbar id="footer" sticky="bottom">
            <Navbar.Text id="text">created by Carl J. Conrad 2020</Navbar.Text>
        </Navbar>
    )
}

export default Footer;