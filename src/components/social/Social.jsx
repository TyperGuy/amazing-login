import React from 'react';
import './Social.css';

function Social(){
  return(
    <>
     <p className="social-text">Or Try with the social bellow</p>
     <div className="social-media">
       <a href="" className="social-icon"><i className="fab fa-facebook-f"/></a>
       <a href="" className="social-icon"><i className="fab fa-twitter"/></a>
       <a href="" className="social-icon"><i className="fab fa-google"/></a>
       <a href="" className="social-icon"><i className="fab fa-linkedin-in"/></a>
     </div>
    </>
  );
}
export default Social;