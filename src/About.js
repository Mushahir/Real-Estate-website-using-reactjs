import React from 'react';
import Stats from './Stats';
import './css/About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="Marketing-HDevice.webp" alt="About Us" />
        </div>
        <div className="about-text">
          <p>
            Welcome to our real estate website! We are dedicated to providing you with the best
            services and helping you find your dream home or investment property.
          </p>
          <p>
            Whether you are looking to buy, sell, or rent a property, our website offers a
            wide range of listings to suit your needs.
          </p>
          <p>
            Our mission is to help you make informed decisions and turn your real estate
            aspirations into reality. We are here to assist you every step of the way.
          </p>
        </div>
      </div>
      <div className="about-content1">
        <div className="about-image1">
          <img src="ListingsGraphic.png" alt="About Us" />
        </div>
        <div className="about-text1">
          <p>
            Welcome to our real estate website! We are dedicated to providing you with the best
            services and helping you find your dream home or investment property.
          </p>
          <p>
            Whether you are looking to buy, sell, or rent a property, our website offers a
            wide range of listings to suit your needs.
          </p>
          <p>
            Our mission is to help you make informed decisions and turn your real estate
            aspirations into reality. We are here to assist you every step of the way.
          </p>
        </div>
      </div>
      <div className="what-we-offer">
  <h3>What We Offer</h3>
  <div className="offer-items">
    <div className="what-we-offer-left">
      <div className="offer-item">
        <img src="propertyevaluation.webp" alt="Offer 1" />
        <p>Property valuation</p>
      </div>
      <div className="offer-item">
        <img src="legal.jpg" alt="Offer 2" />
        <p>Legal assistance</p>
      </div>
      <div className="offer-item">
        <img src="handover.jpg" alt="Offer 3" />
        <p>Handover service</p>
      </div>
    </div>
    <div className="what-we-offer-right">
      <div className="offer-item">
        <img src="lease.avif" alt="Offer 4" />
        <p>Lease management</p>
      </div>
      <div className="offer-item">
        <img src="sale.jpg" alt="Offer 5" />
        <p>Property Buy/Sale</p>
      </div>
      <div className="offer-item">
        <img src="assistance.webp" alt="Offer 6" />
        <p>Instant assistance</p>
      </div>
    </div>
  </div>
</div>
<Stats />
    </div>
  );
}

export default About;
