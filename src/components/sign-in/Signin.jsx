import React from 'react';
import './Signin.css';
import Social from '../social/Social';

function Signin(){
  return(
    <form action="" className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="UserName" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="PassWord" />
      </div>
      <input type="submit" className="btn solid" />
      <Social/>

    </form>
  );
}

export default Signin;