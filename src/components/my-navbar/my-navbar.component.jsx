import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logo.png";
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link className="ml-5" href="#home">Home</Nav.Link>
              <Nav.Link className="ml-5" href="#about">About</Nav.Link>
              <Nav.Link className="ml-5" href="#skills">Skills</Nav.Link>
              <Nav.Link className="ml-5" href="#projects">Projects</Nav.Link>
              {/* <Nav.Link href="#experience">Experience</Nav.Link> */}
              <Nav.Link className="ml-5" href="#blog">Blog</Nav.Link>
              <Nav.Link className="ml-5" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
