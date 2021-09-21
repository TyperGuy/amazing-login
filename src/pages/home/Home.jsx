import React from 'react';
import './Home.css'
import Signin from '../../components/sign-in/Signin';
import Signup from '../../components/sign-up/Signup';
import Left from '../../components/panel-left/Left';
import Right from '../../components/panel-right/Right';
import signup from '../../assets/signup.png'



function Home(){
     const signin_btn = document.getElementById("signin-btn");
     const signup_btn = document.getElementById("signup-btn");
     

     function handleClick(e){
       e.preventDefault();
       const container = document.querySelector(".container");
       container.classList.add("sign-up-mode");
     }

  return (

    <div class="container" className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <Signin/>
          <Signup/>
        </div>
        
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Parece que é novo aqui!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, esse?</p>
            <button onClick={handleClick} className="btn transparent" id="signup-btn">Cadastar</button>
          </div>
          <img className="image" src={signup} alt="signup" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Parece que é novo aqui!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, esse?</p>
            <button className="btn transparent signin-btn" id="signin-btn">Entrar</button>
          </div>
          <img className="image" src={signup} alt="signin" />
        </div>
      </div>
    </div>
  );

}
export default Home;