import React from 'react';
import './css/Service.css';

const Services = () => {
  return (
    <div className="service-container">
      <h2>Our Services</h2>
      <div className="service-options">
        <div className="service-option">
          <img src="buy-house.jpg" alt="Buy a House" />
          <h3>Buy a House</h3>
          <p>
            Looking to buy a new home? Our expert agents will guide you
            through the buying process, from finding the perfect property to
            negotiating the best deal.
          </p>
        </div>
        <div className="service-option">
          <img src="rent-apartment.jpg" alt="Rent an Apartment" />
          <h3>Rent an Apartment</h3>
          <p>
            Need a place to rent? We have a wide range of rental properties
            available. Find your ideal apartment, condo, or house for rent.
          </p>
        </div>
        <div className="service-option">
          <img src="home.jpg" alt="Sell Your Property" />
          <h3>Sell Your Property</h3>
          <p>
            Ready to sell your property? Let our experienced agents help you
            list your property, market it to potential buyers, and get the best
            price for your real estate.
          </p>
        </div>
        <div className="service-option">
          <img src="Cash-Offer.jpg" alt="Cash Offers" />
          <h3>Cash Offers</h3>
          <p>
            Need a quick sale? We offer cash options for homeowners looking to
            sell their property fast. Get a fair cash offer for your home today.
          </p>
        </div>
      </div>
      
      <div className="service-content">
        <h3>Why Choose Our Services?</h3>
        <p>
          At XYZ Real Estate, we are committed to providing the best real estate solutions to our clients. Our experienced agents are dedicated to helping you find your dream home, get the best deal when selling, or secure a comfortable rental property. We take pride in offering competitive services with a focus on customer satisfaction.
        </p>
        <img src="service-team.webp" alt="Service Team" />
      </div>
      <div className="additional-content">
        <h3>Our Expert Agents</h3>
        <p>
          Our team of expert agents is here to assist you every step of the way. Whether you're buying, selling, or renting, we have the knowledge and experience to make the process smooth and successful.
        </p>
        <img src="expert-agents.jpg" alt="Expert Agents" />
      </div>
    </div>
  );
};

export default Services;
