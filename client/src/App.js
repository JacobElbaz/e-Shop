import { useState } from 'react'
import LoginForm from './LoginForm';
import './App.css';
import { Routes, Route } from "react-router-dom"
import SignupForm from './SignupForm';
import HomePage from './HomePage';
import NavbarComp from "./NavbarComp";

function App() {

    const users = [{
        email: "test@test.com",
        password: "12345"
    }]

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        for (let user of users) {
            if (details.email == user.email && details.password == user.password) {
                console.log("Logged in");
                setUser({
                    name: details.name,
                    email: details.email
                });
                break;
            }
        }
        if(user.name == ""){
            console.log(user.name);
            console.log("Details not match!");
            setError("Wrong password/email.")
        }
    }

    const Signup = details => {
        // verify if the email is already exist in the db
    }

    return (
        <div className="App">
            <NavbarComp/>
        </div>
    );
}

export default App;