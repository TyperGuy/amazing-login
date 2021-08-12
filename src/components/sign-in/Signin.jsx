import React from 'react';
import './Signin.css';

function Signin(){
  return(
    <form action="" className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="UserName" />
      </div>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Pass World" />
      </div>
      

    </form>
  );
}

export default Signin;