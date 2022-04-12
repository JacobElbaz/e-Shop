import React, { useState } from 'react';
import { Container, Dropdown, Navbar, Nav, Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import LoginForm from '../Pages/LoginForm';
import SignupForm from '../Pages/SignupForm';
import HomePage from '../Pages/HomePage';
import SearchBar from './SearchBar';
import ShoppingCart from '../Pages/ShoppingCart';
import MyAccount from '../Pages/MyAccount';
import Wishlist from '../Pages/WishList';

function NavbarComp() {

  const [user, setUser] = useState({ name: "", email: "" });

  const [users, setUsers] = useState([{ name: "Jacob", email: "admin@admin.com", password: "12345" }])

  const Logout = () => {
    setUser({ name: "", email: "" })
  }

  return (
    <div className="Navbar">
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <SearchBar className='searchBar' placeholder="Enter a Game name..." />
            </Nav>
            {(user.name == "") ? (
              <Nav className='justify-content-end'>
                <Nav.Link as={Link} to={"/login"}>Log In</Nav.Link>
                <Nav.Link as={Link} to={"/signup"}>Sign Up</Nav.Link>
                <Nav.Link as={Link} to={"/account"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg> Account</Nav.Link>
                <Nav.Link as={Link} to={"/wish"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg> Wishlist</Nav.Link>
                <Nav.Link as={Link} to={"/cart"}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg> Cart</Nav.Link>
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/wish" element={<Wishlist />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/login" element={<LoginForm setUser={setUser} users={users} />} />
          <Route path="/signup" element={<SignupForm users={users} setUsers={setUsers} />} />
        </Routes>
      </div>
    </div>
  )
};

export default NavbarComp;
