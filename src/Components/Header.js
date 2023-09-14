import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./Cart";

const AppBar = () => {
  return (
    <div>
      {" "}
      <Navbar expand="lg" className="text-bg-light">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="text-primary">
              <span>
                <i className="bi bi-yelp"></i>Pizza Shop
              </span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link className="fw-bold" href="#">
                Home
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#">
                Menu
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#">
                Must Try
              </Nav.Link>
              <Nav.Link className="fw-bold">Contact Us</Nav.Link>

              <Cart />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBar;
