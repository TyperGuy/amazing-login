import React from 'react';
import './Right.css';
import signup from '../../assets/signup.png'

function Right(){
  return(
     <div className="panel right-panel">
      <div className="content">
        <h3>Parece que é novo aqui!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, esse?</p>
        <button className="btn transparent signin-btn" id="signin-btn">Entrar</button>
      </div>
      <img className="image" src={signup} alt="signin" />
    </div>
  );
}
export default Right;