import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="bg-white position-sticky top-0 nav-z" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img className="nav-logo py-2" src="img/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link className="mx-3" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="mx-3" href="#action2">
              Tours
            </Nav.Link>
            <Nav.Link className="mx-3" href="#action2">
              Booking
            </Nav.Link>
            <Nav.Link className="mx-3" href="#action2">
              Pages
            </Nav.Link>
            <Nav.Link className="mx-3" href="#action2">
              Features
            </Nav.Link>
            <Nav.Link className="mx-3" href="#action2">
              Blog
            </Nav.Link>
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
