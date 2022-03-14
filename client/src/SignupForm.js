import React, {useState} from 'react';
import './SignupForm.css';
import {useNavigate} from 'react-router-dom'

function SignupForm({Signup, error, setError}) {

    const navigate = useNavigate()
    
    const [details, setDetails] = useState({email:"", password:"", confirmPass:""});

    const submitHandler = e => {
        e.preventDefault();

        Signup(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Signup</h2>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
            <div className='form-group'>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password:</label>
                <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <div className='form-group'>
                <label htmlFor="password">Confirm password:</label>
                <input type="password" name='confpass' id='confpass' onChange={e => setDetails({...details, confirmPass: e.target.value})} value={details.confirmPass}/>
            </div>
            <input type="submit" value="Sign Up" />
            <button className='signup' onClick={() => {navigate("/"); setError("")}}>Back</button>
        </div>
    </form>
  )
};

export default SignupForm;