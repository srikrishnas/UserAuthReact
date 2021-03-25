import React, { useState } from 'react'
import axios from 'axios';
import CustomizedSnackbars from '../Snackbars'

export const Signup = () => {

    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const [new_user, setUserDetails] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: ""
    });

    const onSubmit = (e) => {
        e.preventDefault();
        var loginData = new_user
        console.log(loginData)
        sendDatatodb(loginData)
        setUserDetails({ name: '', phoneNumber: "", email: '', password: "" })
    }

    const sendDatatodb = async (loginData) => {
        axios.post('https://user-auth-node-1.herokuapp.com/register', new_user)
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
                success ? <CustomizedSnackbars message={message}/> : ''
            }
            <div className="form-control">
                <input value={new_user.name} onChange={(e) => setUserDetails({ ...new_user, name: e.target.value })}
                    placeholder="name" />
            </div>
            <div className="form-control">
                <input value={new_user.phoneNumber} onChange={(e) => setUserDetails({ ...new_user, phoneNumber: e.target.value })}
                    placeholder="Phone number" />
            </div>
            <div className="form-control">
                <input type="text" value={new_user.email} onChange={(e) => setUserDetails({ ...new_user, email: e.target.value })}
                    placeholder="Email"></input>
            </div>
            <div className="form-control">
                <input value={new_user.password} onChange={(e) => setUserDetails({ ...new_user, password: e.target.value })}
                    placeholder="password" />
            </div>

            <button>Register</button>

            
        </form>
    )
}
