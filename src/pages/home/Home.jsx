import React from 'react';
import './Home.css'
import Signin from '../../components/sign-in/Signin';
import Signup from '../../components/sign-up/Signup';

function Home(){
   
  return (

    <div className="container">
      <div className="forms-container">
        <Signin/>
        <Signup/>
      </div>
    </div>
  );

}
export default Home;