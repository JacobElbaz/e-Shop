import React, { useContext } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './Log/LoginForm';
import SignupForm from './Log/SignupForm';
import SignupManagerForm from './Log/SignupManagerForm';
import HomePage from '../Pages/HomePage';
import SearchBar from './SearchBar';
import ShoppingCart from '../Pages/ShoppingCart';
import MyAccount from '../Pages/MyAccount';
import Wishlist from '../Pages/WishList';
import { UidContext } from './AppContext';
import { useSelector } from 'react-redux';
import Logout from './Log/Logout';

function NavbarComp() {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  
  return (
    <div className="Navbar">
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={'/'}>Home</Navbar.Brand>
            <Nav className="me-auto">
              <SearchBar
                className="searchBar"
                placeholder="Enter a Game name..."
              />
            </Nav>
            {uid ? (
              <>
              <NavDropdown title={userData.username} id='username'>
                  <NavDropdown.Item to='/account' as={Link}>
                    Profile
                  </NavDropdown.Item>
                  {userData.manager && (
                    <>
                      <NavDropdown.Item to='/admin/stats' as={Link}>
                        Staticstics
                      </NavDropdown.Item>
                      <NavDropdown.Item to='/admin/userList' as={Link}>
                        Users
                      </NavDropdown.Item>
                      <NavDropdown.Item to='/admin/productList' as={Link}>
                        Products
                      </NavDropdown.Item>
                      <NavDropdown.Item to='/admin/orderList' as={Link}>
                        Orders
                      </NavDropdown.Item>
                    </>
                  )}
                  <NavDropdown.Item >
                    <Logout></Logout>
                  </NavDropdown.Item>
                </NavDropdown>
              <Navbar bg="dark" variant="dark">
                <Nav.Link as={Link} to={'/account'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>{' '}
                  {userData.username}
                </Nav.Link>
                <Nav.Link as={Link} to={'/wish'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>{' '}
                  Wishlist
                </Nav.Link>
                <Nav.Link as={Link} to={'/cart'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>{' '}
                  Cart
                </Nav.Link>
              </Navbar>
              </>
            ) : (
              <Nav className="justify-content-end">
                <Nav.Link as={Link} to={'/login'}>
                  Log In
                </Nav.Link>
                <Nav.Link as={Link} to={'/signup'}>
                  Sign Up
                </Nav.Link>
              </Nav>
            )}
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/wish" element={<Wishlist />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/signupManager" element={<SignupManagerForm />} />
          <Route
            path="/login"
            element={<LoginForm/>}
          />
          <Route
            path="/signup"
            element={<SignupForm/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default NavbarComp;
