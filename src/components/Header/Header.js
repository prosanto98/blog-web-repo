import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar className="bg-white position-sticky top-0 nav-z" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img className="nav-logo py-2" src="img/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0 nb-sz">
            <Nav className="mx-3 text-decoration-none ">
              <Link className="hover-nav" to="/">
                Home
              </Link>
            </Nav>
            <Nav className="mx-3">
              <Link className="hover-nav" to="/about">
                About
              </Link>
            </Nav>
            <Nav className="mx-3">
              <Link className="hover-nav" to="/blog">
                Gallery
              </Link>
            </Nav>
            <Nav className="mx-3">
              <Link className="hover-nav" to="/contact">
                Contact
              </Link>
            </Nav>
          </Nav>
          <div>
            <a className="nav-btn" href="/">
              Book Now
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
