import React from "react";
import './Loginpage.css'; // Optional if you want to style separately
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  // Dummy login function placeholder
  
    const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/list');
  };


  return (
    <div className="loginpage">
      <div className="loginbox">
        
        <h2 className="mainHeding">Login</h2>
        <div className="inputbox">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
     
        <button 
          onClick={handleLogin} 
          className="loginbutton" >Login
        </button>

      </div>
    </div>
  );
};

export default Loginpage;
