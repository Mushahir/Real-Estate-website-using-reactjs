// // Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './css/App.css'


// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="/realestatelogo.png" alt="Logo" />
//       </div>
//       <ul>
//       <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './css/App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img src="/realestatelogo1.png" alt="Logo" />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      {/* <div className="navbar-description">
        <p>Your unique real estate solutions provider</p>
      </div> */}
    </nav>
  );
}

export default Navbar;
