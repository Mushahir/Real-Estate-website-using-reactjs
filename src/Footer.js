import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-address">
        <h2>Address</h2>
        <h4>Head office</h4>
        <p>123 Real Estate Street</p>
        <p>City, State, ZIP Code</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="footer-address">
        <h2>Address</h2>
        <p>123 Real Estate Street</p>
        <p>City, State, ZIP Code</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="footer-links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/PropertyDetails">Property Listings</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-map">
          <iframe
            title="Map"
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-75.1234567!3d40.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNTDCsDIwJzUwLjEiTiA3NcKwMjEnNTQuMCJX!5e0!3m2!1sen!2sus!4v1621332445229!5m2!1sen!2sus"
          ></iframe>
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
        &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED. DESIGNED BY real Estate DEVELOPED BY Musha
      </p>
  </footer>
  );
}

export default Footer;
