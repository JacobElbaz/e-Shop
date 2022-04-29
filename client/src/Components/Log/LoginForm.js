import React, { useState } from 'react';
import axios from "axios";
import './LoginForm.css';

function LoginForm() {

    const [details, setDetails] = useState({ email: "", password: "" });



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
                console.log(res);
                if (res.data.errors) {
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    window.location = "/";
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
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            onChange={e => setDetails({ ...details, email: e.target.value })}
                            value={details.email} />
                        <div className="email error"></div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            onChange={e => setDetails({ ...details, password: e.target.value })}
                            value={details.password} />
                        <div className="password error"></div>
                    </div>
                    <input type="submit" value="LOGIN" />
                </div>
            </form>
        </div>
    )
};

export default LoginForm;