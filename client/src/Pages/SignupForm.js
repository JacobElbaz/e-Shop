import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupForm({ users, setUsers }) {
  const [details, setDetails] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/client/register`,
      data: details,
    });
    //then try catch
  };

  const Signup = (details) => {
    if (users.some((u) => u.email == details.email)) {
      setError('Email already exists.');
    } else if (details.username == '') {
      setError('Empty name.');
    } else if (details.email == '') {
      setError('Empty emaiil.');
    } else if (details.password == '') {
      setError('Empty password.');
    } else {
      const newusers = [...users];
      newusers.push(details);
      setUsers(newusers);
      navigate('/login');
    }
  };

  return (
    <div className="Signup">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Signup</h2>
          {error != '' ? <div className="error">{error}</div> : ''}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
            />
          </div>
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
          </div>
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
