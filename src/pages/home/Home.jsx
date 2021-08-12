import React from 'react';
import './Home.css'
import Signin from '../../components/sign-in/Signin';

function Home(){
   
  return (

    <div className="container">
      <div className="forms-container">
        <Signin/>
      </div>
    </div>
  );

}
export default Home;