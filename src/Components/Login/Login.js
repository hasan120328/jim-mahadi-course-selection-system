import React from 'react';
import  './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faUser,faUnlock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-box">
            <h1>Login</h1>
            
            <div className="textbox" >
            <i className="fas fa-desktop"><FontAwesomeIcon icon={faUser} /></i>
               <input type="text" required    placeholder="userName" name="user" />
             
            </div>
            <div className="textbox" >
            <FontAwesomeIcon icon={faUnlock} />
               <input type="password" placeholder="password" required name="pass" />
            </div>
           <div >
           <button className="btn"> <Link to="/header">sign in</Link></button>
           </div>
        </div>
    );
};

export default Login;