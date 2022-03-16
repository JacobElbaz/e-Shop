import React, { Component } from 'react';
import HomePage from './HomePage';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default class NavbarComp extends Component {
  render() {
    return (
      <div className="Navbar">
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
              </Nav>
              <Nav className='justify-content-end'>
                <Nav.Link as={Link} to={"/login"}>Log In</Nav.Link>
                <Nav.Link as={Link} to={"/signup"}>Sign Up</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/signup" element={<SignupForm/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}
