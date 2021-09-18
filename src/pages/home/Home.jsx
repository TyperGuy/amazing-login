import React from 'react';
import './Home.css'
import Signin from '../../components/sign-in/Signin';
import Signup from '../../components/sign-up/Signup';
import Left from '../../components/panel-left/Left';

function Home(){
   
  return (

    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <Signin/>
          <Signup/>
        </div>
        
      </div>
      <div className="panel-container">
        <Left/>
      </div>
    </div>
  );

}
export default Home;