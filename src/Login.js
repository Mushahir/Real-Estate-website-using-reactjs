import React, { useState } from 'react';
import './css/login.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here.
    // For this example, assume login is successful.

    // Redirect to the App component upon successful login.
    setIsLoggedIn(true);
  };

  return (
    <div>
    <div id="bannerImage">
  <div className="banner-overlay">
    <div id="content" className="header">
      <img src="/realestatelogo1.png" className='logoestate' />
    </div>
  </div>
</div>
<div class="col-md-12 sign-up-form">
    <div class="container" style= {{bottom: "0px"}}>
        <div class="col-md-6 col-md-offset-3 central-panel">
            <div id="user-registration" class="user-registration col-md-12">
            <div className="login-container">
            <p style={{ marginleft : "0px"}} class="padding-medium title col-md-offset-3">Welcome to Real Estate</p>
                <div class="sub-title col-md-offset-0">Don't have an account yet? Reach out to your real estate agent to get started with OneHome.</div>
                <div class="login-input">
                  <label className='login-label' >Username</label>
                <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className='login-label' >Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
                </div>
    
      <button onClick={handleLogin}>Login</button>
      <p style={{ color:'#0c0c0c'}}>
        Already have an account? <Link to="/Signup">Signup</Link>
      </p>
    </div>
    </div>
            </div>
        </div>
    </div>
</div>
    
  );
}

export default Login;
