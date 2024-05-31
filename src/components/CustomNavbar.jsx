// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Travel from '../assets/logo3-01.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
         <img src={Travel}  className=' w-5'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/consultation">
              Consultation
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
