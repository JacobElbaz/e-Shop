import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './LoginForm.css';

function LoginForm({ setUser, users }) {

    const [details, setDetails] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const navigate = useNavigate()


    const submitHandler = e => {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/client/login`,
            withCredentials: true,
            data: details
        })

        .then((res) => {
            if(res.data.errors) {
                emailError.innerHTML = res.data.errors.email;
                passwordError.innerHTML = res.data.errors.password;
            } else {
                navigate('/');
                setUser({name: 'Sam', email: details.email})
            }
        })

        .catch((err) => {
            console.log(err);
        });
    };

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