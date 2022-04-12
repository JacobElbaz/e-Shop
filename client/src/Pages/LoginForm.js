import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm({ setUser, users }) {

    const [details, setDetails] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const Login = details => {
        const found = users.find(user => user.email == details.email)
        if (found) {
            if (found.password == details.password) {
                setUser({ name: found.name, email: found.email })
                navigate('/')
            }
        }
        else {
            setError("Wrong username or password.")
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <div className='Login'>
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Login</h2>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' id='email' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name='password' id='password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="LOGIN" />
                </div>
            </form>
        </div>
    )
};

export default LoginForm;