// import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const onButtonClick = () => {
        // You'll update this function later...
    }

    return (
        <div className={'mainContainer'}>
            <div className={'title'}>
                <div>@Hursley</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <Link to="/preferences">
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
                </Link>
            </div>
        </div>
    );
}
// function Login() {

//     return (
//         <div className="login">
//            <h1 className="title">@hursley</h1> 
//            <div className="loginButton">
//            <Link to= "/preferences">
//             <button>Login</button>
//            </Link>
//            </div>
//         </div>
//     );
// };

export default Login;
