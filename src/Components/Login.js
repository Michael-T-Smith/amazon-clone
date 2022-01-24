import React from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';

function Login() {
  return (
  <div className="login">
    <Link to="/">
      <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Logo" />
    </Link>

    <div className="login__container">
      <h1>Sign-in</h1>

    <form action="">
      <h5>E-mail</h5>
      <input type="text" />
      <h5>Password</h5>
      <input type="password" />
      <button className="login__registerButton">Sign in</button>
    </form>
    <p>THIS IS FOR TERMS AND CONDITIONS AGREEMENT PARAGRAPH</p>
    <button className="login__signinButton">Create Amazon Account</button>
    </div>
  </div>
  );
}

export default Login;
