import React from 'react';
import './Home.css'
import Signin from '../../components/sign-in/Signin';
import Signup from '../../components/sign-up/Signup';
import Left from '../../components/panel-left/Left';
import Right from '../../components/panel-right/Right';

function Home(){
   
  return (

    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <Signin/>
          <Signup/>
        </div>
        
      </div>
      <div className="panels-container">
        <Left/>
        <Right/>
      </div>
    </div>
  );

}
export default Home;