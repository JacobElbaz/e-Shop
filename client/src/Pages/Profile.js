import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateProfile} from '../actions/user.action';

import { Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import { profileFormValidationSchema } from '../validations';
import Input from '../Components/Input';
import FormContainer from '../Components/FormContainer';


const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validate = ({ password, confirmPassword }) => {
  let errors = {};
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Password not matched';
  }
  return errors;
};

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const [savedFormValues, setSavedFormValues] = useState(null);

  useEffect(() => {
    if (user) {
      dispatch(getUser(user._id));
      setSavedFormValues({ ...user, password: '', confirmPassword: '' });
    }
  }, [user, setSavedFormValues]);

  const onSubmit = ({ name, password }) => {

    dispatch(updateProfile(user._id, name, password));
    
  };

 
  return (
    <>
      <FormContainer>
        <h1>{user.username}'s Profile</h1>
        <Formik
          initialValues={savedFormValues || initialValues}
          validationSchema={profileFormValidationSchema}
          validate={validate}
          onSubmit={onSubmit}
          enableReinitialize>
          {({ values, isSubmitting }) => (
            <Form>
              <Input label="Name" name="name" type="text" />
              <Input
                label="Email"
                name="email"
                type="email"
                disabled={user && values.email}
              />
              <Input label="Password" name="password" type="password" />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <Button
                className="d-block ml-auto"
                type="submit"
                variant="primary"
                disabled={isSubmitting}
              >
                Update
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};

export default Profile;
