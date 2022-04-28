import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupForm({ users, setUsers }) {
  const [details, setDetails] = useState({
    username: '',
    email: '',
    password: '',
    code: '',
    manager: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/client/register`,
      data: {username: details.username, 
            email: details.email,
            password: details.password,
            manager: details.manager},
    });
    //then try catch
    navigate('/login');
  };

  return (
    <div className="Signup">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Manager Signup</h2>
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
          <div className="form-group">
            <label htmlFor="code">Company code:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, code: e.target.value })
              }
              value={details.code}
            />
          </div>
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
