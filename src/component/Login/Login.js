import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import CustomizedSnackbars from '../Snackbars'

export const Login = () => {

    const [loginDetails, setloginDetails] = useState({
        email: "",
        password: ""
    });

    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const loginData = loginDetails
        console.log(loginData)
        setloginDetails({ email: '', password: "" })

        axios.post('https://user-auth-node-1.herokuapp.com/login', loginDetails)
            .then((response) => {
                console.log(response);
                setMessage(response.data);
                setSuccess(true)
            }, (error) => {
                console.log(error);
            });
            setSuccess(false);
    }

    return (
        <form onSubmit={onSubmit}>
            {
                success ? <CustomizedSnackbars message={message} /> : ''
            }
            <div className="form-control">
                <input type="text" value={loginDetails.email} onChange={(e) => setloginDetails({ ...loginDetails, email: e.target.value })}
                    placeholder="Email"></input>
            </div>
            <div className="form-control">
                <input value={loginDetails.password} onChange={(e) => setloginDetails({ ...loginDetails, password: e.target.value })}
                    placeholder="password" />
            </div>
            <button>Login</button>
            <NavLink to="/signup">
                <p>Create Account</p>
            </NavLink>
        </form>
    )
}

