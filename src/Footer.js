import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-address">
        <h4>Contact Us</h4>
        <p>123 Real Estate Street</p>
        <p>City, State, ZIP Code</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/listings">Property Listings</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="https://www.linkedin.com/your-page" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
        </div>
      </div>
      <div className="footer-divider"></div>
      <p className="footer-copy">
        &copy; real estate {new Date().getFullYear()}
      </p>
  </footer>
  );
}

export default Footer;
