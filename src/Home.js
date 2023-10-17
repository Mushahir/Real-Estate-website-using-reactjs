import React from 'react';
import ParentComponent from './ParentComponent';
import './css/Home.css';
import Propertymanagement from './Propertymanagement';

function Home() {
  return (
    <div>
      <div className="home-container">
        <h2 style={{ position:'relative',bottom:"120px" }}>Welcome to Our Real Estate Website</h2>
        <ParentComponent />
      </div>
      <div className="home-container1">
      <Propertymanagement
        title="Property Manager Resources"
        content="Stay up-to-date using our tips and guides on rent payments, leasing, management solutions, and more."
        imageSource="/person-chatting.webp"
        buttonLabel="Know More"
        link="/section1"
        content1="Renting Made Easy for Residents and Property Managers
        Our articles, guides, and videos help you through the process, start to finish."/>
      <Propertymanagement
        title="Tips for Renters"
        content="Explore our real estate listings and find your dream home."
        imageSource="/couples.jpg"
        buttonLabel="View Listings"
        link="/section2"
        isImageOnRight // Image on the right
        sectionClassName="custom-section" // Custom CSS class for further styling
        content1="Search over 1 million listings including apartments, houses, condos, and townhomes available for rent. Youll find your next home, in any style you prefer. "
      />
      </div>
    </div>
  );
}

export default Home;

