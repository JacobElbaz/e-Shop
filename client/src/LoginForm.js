import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ Login, error, setError }) {

    const [details, setDetails] = useState({ email: "", password: "" });

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