import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleSignup = () => {
    // Implement your signup logic here.
    // This is where you would typically send a request to your backend to create a new user.

    // Use the navigate function to navigate back to the login page upon successful signup.
    navigate('/Login');
    // setIsLoggedIn(true);
  };

  return (
    <div>
    <div id="bannerImage">
  <div className="banner-overlay">
    <div id="content" className="header">
      <img src="realestatelogo1.png" style={{ height: '32.375px' }} />
    </div>
  </div>
</div>
<div class="col-md-12 sign-up-form">
    <div class="container" style= {{bottom: "0px"}}>
        <div class="col-md-6 col-md-offset-3 central-panel">
            <div id="user-registration" class="user-registration col-md-12">
    <div className="signup-container">
      <h2 class="padding-medium title col-md-offset-3"> Signup Page</h2>
      <label className='login-label'>Username</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className='login-label'>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className='login-label'>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p style={{ color:'#0c0c0c'}}>Already have an account? <Link to="/login">Login</Link></p>
      {/* <p> already have an account? <Link to="/Login">Login</Link></p> */}
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Signup;
