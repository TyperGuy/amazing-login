import React from 'react';
import './Left.css';

function Left(){
  return(
    <div className="panel left-panel">
      <div className="content">
        <h3>Parece que é novo aqui!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, esse?</p>
        <button className="btn transparent" id="signup-btn">Cadastar</button>
      </div>
    </div>
  );
}
export default Left;