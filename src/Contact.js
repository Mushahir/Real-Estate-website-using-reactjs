import React from 'react';
import ContactForm from './Contactform';
import './css/Contactform.css';

function Contact() {
  return (
    <div>
<div className='contact-component'>
<h2 className='title'>Get in touch</h2>
<ContactForm/> 
</div>



<div className="contact-container1">
      <div className="contact-method">
        <img src="phone.png" alt="Phone Icon" />
        <h3>Call Us</h3>
        <p className="contact-phone">(844) 759-7732</p>
      </div>

      <div className="contact-method">
        <img src="message.png" alt="Message Icon" />
        <h3>Message Us</h3>
        <p>Send our Customer Service Team questions about our site</p>
      </div>

      <div className="contact-method">
        <img src="messageicon.png" alt="Email Icon" />
        <h3>Email Us</h3>
        <p>Connect with us via email for assistance</p>
      </div>
    </div>
<div className='contact-content'>
  <p>©Sotheby's International Realty Affiliates LLC. All Rights Reserved.

Texas Real Estate Commission Consumer Protection Notice

Sotheby's International Realty Affiliates LLC fully supports the principles of the Fair Housing Act and the Equal Opportunity Act. Each Office is Independently Owned and Operated. Sotheby's International Realty, the Sotheby's International Realty logo, "For the Ongoing Collection of Life" and RESIDE are registered (or unregistered) service marks owned or licensed to Sotheby's International Realty Affiliates LLC.

The information set forth on this site is based upon information which we consider reliable, but because it has been supplied by third parties to our franchisees (who in turn supplied it to us), we can not represent that it is accurate or complete, and it should not be relied upon as such. The offerings are subject to errors, omissions, changes, including price, or withdrawal without notice. All dimensions are approximate and have not been verified by the selling party and can not be verified by Sotheby's International Realty Affiliates LLC. It is recommended that you hire a professional in the business of determining dimensions, such as an appraiser, architect or civil engineer, to determine such information.

Texas Real Estate Commission Information About Brokerage Services</p>
</div>
</div>
  );
}

export default Contact;
