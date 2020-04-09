import React from "react";
import "./style.css";
import { Navbar, Nav, Container } from "react-bootstrap";
//  import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <Navbar sticky="top" id="mainNav" className="navbar navbar-dark bg-dark">
            <Navbar.Brand id="navName" className="navbar-brand mb-0 h1">
                Carl J. Conrad 
            </Navbar.Brand>
            <Container id="linkContainer" className="justify-content-end">
                <Nav.Link id="navLinkProjects" href="/projects">projects</Nav.Link>
                <Nav.Link id="navLinkAbout" href="/">about</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default NavBar;