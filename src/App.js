// IT SHOWS NORMALLY  WITHOUT LOGIN CODE
// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';
// import Footer from './Footer';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'; // For brand icons (e.g., fab fa-linkedin)
// import { fas } from '@fortawesome/free-solid-svg-icons'; // For solid icons (e.g., fas fa-envelope)

// library.add(fab, fas);


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Services" element={<Services />} />
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';
// import Footer from './Footer';
// import Login from './Login';
// import Signup from './Signup'; 
// import login from './Login'; // Import your Login component
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'; // For brand icons (e.g., fab fa-linkedin)
// import { fas } from '@fortawesome/free-solid-svg-icons'; // For solid icons (e.g., fas fa-envelope)

// library.add(fab, fas);

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       {isLoggedIn && <Navbar />}
//       <Routes>
//         {isLoggedIn ? (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/services" element={<Services />} />
//           </>
//         ) : (
//           <Route
//             path="/"
//             element={<Login setIsLoggedIn={setIsLoggedIn} />}
//           />
//         )}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       {isLoggedIn && <Footer />}
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import PropertyDetails from './PropertyDetails.js';
import PaymentPage from './PaymentPage.js';
import Signup from './Signup';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, fas);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/PropertyDetails" element={<PropertyDetails/>} />
        <Route path="/PaymentPage" element={<PaymentPage/>} />
        {!isLoggedIn && <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />}
        {isLoggedIn && <Route path="/login" element={<Navigate to="/" />} />
        }
      </Routes>
      {isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;



