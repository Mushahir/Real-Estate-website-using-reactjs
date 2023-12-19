import React, { useState } from 'react';
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
import Chatbot from './Chatbot';
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
        <Route path="/PropertyDetails" element={<PropertyDetails />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        {!isLoggedIn && <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />}
        {isLoggedIn && <Route path="/login" element={<Navigate to="/" />} />}
      </Routes>
      {isLoggedIn && <Footer />}
      <Chatbot />
    </Router>
  );
}

export default App;
