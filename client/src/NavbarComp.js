import React, { useState } from 'react';
import { Container, Dropdown, Navbar, Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import HomePage from './HomePage';

function NavbarComp() {

  const [user, setUser] = useState({name: "", email: ""});

  const users = [{name: "Jacob", email: "admin@admin.com", password: "12345"}]

  const Logout = () => {
    setUser({name:"", email:""})
  }

    return (
      <div className="Navbar">
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Tazmin</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
              </Nav>
              {( user.name == "" ) ? (
                <Nav className='justify-content-end'>
                <Nav.Link as={Link} to={"/login"}>Log In</Nav.Link>
                <Nav.Link as={Link} to={"/signup"}>Sign Up</Nav.Link>
                </Nav>
                ) : (
                  <Dropdown>
                    <Dropdown.Toggle variant='dark' id='dropdown-basic' size='sm'>
                      Hello, {user.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant='dark'>
                      <Dropdown.Item onClick={Logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<LoginForm setUser={setUser} users={users}/>}/>
            <Route path="/signup" element={<SignupForm/>}/>
          </Routes>
        </div>
      </div>
    )
  }; 

  export default NavbarComp;
