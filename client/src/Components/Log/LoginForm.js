import React, { useState } from 'react';
import { Button, Row, Col, Form, ListGroup, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { forgot_password } from '../../actions/user.action';
import { Link } from 'react-router-dom';
import { forgotPassordValidationSchema } from '../../validations';
import axios from 'axios';
import './LoginForm.css';

function LoginForm() {
  const [details, setDetails] = useState({ email: '', password: '' });

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');

    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/client/login`,
      withCredentials: true,
      data: details,
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = '/';
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const onForgotPassword = () => {
    setShowModal(true);
  };

  const onSubmit = ({ email, password }) => {
      
    dispatch(forgot_password(email, password));
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type = "email"
                    name = "email"
                    required
                    placeholder='Enter Email'
                    />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Link
            type="button"
            className="btn btn-secondary"
            to={'/login'}
            onClick={handleClose}
          >
            Submit
          </Link>
          <Link
            type="button"
            className="btn btn-primary"
            to={'/login'}
            onClick={handleClose}
          >
            Cancel
          </Link>
        </Modal.Footer>
      </Modal>
      <div className="Login">
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
              <div className="email error"></div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
              <div className="password error"></div>
            </div>
            <input type="submit" value="LOGIN" />
            <Button
              className="btn-block my-1"
              type="button"
              onClick={onForgotPassword}
            >
              Forgot Password
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
