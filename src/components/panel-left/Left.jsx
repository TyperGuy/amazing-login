import React from 'react';
import './Left.css';
import signup from '../../assets/signup.png'

function Left(){
  return(
    <div className="panel left-panel">
      <div className="content">
        <h3>Parece que é novo aqui!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, esse?</p>
        <button className="btn transparent" id="signup-btn">Cadastar</button>
      </div>
      <img className="image" src={signup} alt="signup" />
    </div>
  );
}
export default Left;