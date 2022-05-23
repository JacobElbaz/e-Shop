import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update_username, forgot_password } from '../actions/user.action';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

import { Button, Modal, Form } from 'react-bootstrap';
import FormContainer from '../Components/FormContainer';
import {confirmPasswordFormValidationSchema} from '../validations'


const Profile = () => {
  const user = useSelector((state) => state.userReducer);
  const initialValues = {
    username: user.username,
    email: user.email,
  };
  const [username, setUsername] = useState(initialValues.username);
  const [password, setPassword] = useState('');
  const [showModalUsername, setShowModalUsername] = useState(false);
  const [showModalPassword, setShowModalPassword] = useState(false);
  const [errors, setErrors] = useState('');

  const validate = (event) => {
    
    if (password !== event.target.value) {
      console.log('ELie');
      setErrors('Password not matched');
    }
    else
      setErrors('')
  };

  const UsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const PasswordChangeHandler = (event) => {
    if(event.target.value.length < 6)
      console.log("Require 6 character");
    else
      setPassword(event.target.value);
  };

  const dispatch = useDispatch();
  const onSubmitUsername = (e) => {
    e.preventDefault();
    dispatch(update_username(initialValues.email, username));
    setShowModalUsername(true);
  };

  const onSubmitPassword = (e) => {
    e.preventDefault();
    dispatch(forgot_password(initialValues.email, password));
    setShowModalPassword(true);
  };

  const handleClose = () => {
    setShowModalPassword(false);
    setShowModalUsername(false);
    window.location = '/profile';
  };

  return (
    <>
      <Modal show={showModalUsername} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success Update Username</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is your new username: {username}</Modal.Body>
        <Modal.Footer>
          <Link
            type="button"
            className="btn btn-secondary"
            to={'/profile'}
            onClick={handleClose}
          >
            OK
          </Link>
        </Modal.Footer>
      </Modal>
      <Modal show={showModalPassword} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link
            type="button"
            className="btn btn-secondary"
            to={'/profile'}
            onClick={handleClose}
          >
            OK
          </Link>
        </Modal.Footer>
      </Modal>

      <FormContainer>
        <h1>{user.username}'s Profile</h1>

        <Form onSubmit={onSubmitUsername}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              required
              defaultValue={initialValues.username}
              onChange={UsernameChangeHandler}
            />
          </Form.Group>
          <Button variant="primary" size="sm" type="submit">
            Update Username
          </Button>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter Email"
              disabled
              value={initialValues.email}
            />
          </Form.Group>
        </Form>
        <Formik
        validationSchema={confirmPasswordFormValidationSchema}
        onSubmit={onSubmitPassword}
        >
          <Form >
            <Form.Group controlId="password">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                placeholder='Enter New Password'
                defaultValue={user.password}
                onChange={PasswordChangeHandler}
              />
              </Form.Group>
              
            <Form.Group controlId="confirmPassword">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                required
                placeholder='Confirm Password'
                defaultValue={user.password}
                onChange={validate}
              />
              <p className='text-danger'>{errors}</p>
              <Button variant="primary" size="sm" type="submit">
                Update Password
              </Button>
            </Form.Group>
          </Form>
        </Formik>
      </FormContainer>
    </>
  );
};

export default Profile;
