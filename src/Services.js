import React, { useState } from 'react';
import './css/Service.css';
import Servicemanagement from './Servicemanagement.js';

const Services = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      text: "XYZ Real Estate helped us find our dream home. Their team was professional and efficient throughout the entire process.",
      author: "John Doe",
      image: "enterprise-home.jpg",
    },
    {
      text: "We decided to sell our property through XYZ Real Estate, and we were delighted with the results. They secured a great deal for us.",
      author: "Jane Smith",
      image: "enterprise-home.jpg",
    },
  ];

  const prevTestimonial = () => {
    setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((activeTestimonial + 1) % testimonials.length);
  };

  return (
    <div className="service-container">
      <div className="home-container1">
      <Servicemanagement
        title="Why Choose Our Services?"
        content="At XYZ Real Estate, we are committed to providing the best real estate solutions to our clients. Our experienced agents are dedicated to helping you find your dream home, get the best deal when selling, or secure a comfortable rental property. We take pride in offering competitive services with a focus on customer satisfaction."
        imageSource="/service-team.webp"
        buttonLabel="Know More"
        link="/section1"
        content1="Renting Made Easy for Residents and Property Managers
        Our articles, guides, and videos help you through the process, start to finish."/>
     <Servicemanagement
        title="Our Expert Agents"
        content="Our team of expert agents is here to assist you every step of the way. Whether you're buying, selling, or renting, we have the knowledge and experience to make the process smooth and successful."
        imageSource="/legal.jpg"
        buttonLabel="View Listings"
        link="/section2"
        isImageOnRight // Image on the right
        sectionClassName="custom-section" // Custom CSS class for further styling
        content1="Search over 1 million listings including apartments, houses, condos, and townhomes available for rent. Youll find your next home, in any style you prefer."
      />
      </div>
      <h2 className='serviceh3'>Our Services</h2>
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
      <div className="testimonials">
        <h3 className="serviceh3">What Our Clients Say</h3>
        <div className="testimonial-slider">
          <button className="prev-button" onClick={prevTestimonial}>
            &#8249;
          </button>
          <div className="testimonial">
            <img src={testimonials[activeTestimonial].image} alt="Client" />
            <p>{testimonials[activeTestimonial].text}</p>
            <p className="author">- {testimonials[activeTestimonial].author}</p>
          </div>
          <button className="next-button" onClick={nextTestimonial}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
