import React, { useState } from 'react';

import Email from './Assests/Email.png';
import Padlock from './Assests/Padlock.png';
import User from './Assests/User.png';
import './PartOne.css';

function PartOne() {


const[action,setaction]=useState("Sign Up"); 

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action=="Login"?<div></div>:<div className="input">
          <img src={User} alt="" />
          <input type="text" placeholder='Name' />
        </div>}
        

        <div className="input">
          <img src={Email} alt="" />
          <input type="email" placeholder='Email ID'/>
        </div>

        <div className="input">
          <img src={Padlock} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
        {action=="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>Click here!</span></div>}
        
        <div className="submit-container">
          <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
          <div className={action=="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>
        </div>

      </div>
    </div>
  )
}

export default PartOne;