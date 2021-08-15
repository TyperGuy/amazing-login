import React from 'react';
import './Signup.css';
import Social from '../social/Social';

function Signup(){
  return(
    <form action="" className="sign-up-form">
      <h2 className="title">Sign Up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="UserName" />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="text" placeholder="Email" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Pass Word" />
      </div>
      <input type="submit" className="btn solid" />
      <Social/>

    </form>
  );
}

export default Signup;