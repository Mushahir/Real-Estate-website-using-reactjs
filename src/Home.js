import React from 'react';
import ParentComponent from './ParentComponent';
import './css/Home.css';
import Propertymanagement from './Propertymanagement';
import FeaturedList from './FeaturedList';

function Home() {
  const featuredProperties = [
    {
      title: 'Luxury Villa',
      description: 'Spacious 4-bedroom villa with a pool and garden.',
      image: '/feauturepic.jpg',
    },
    {
      title: 'Downtown Apartment',
      description: 'Modern 2-bedroom apartment in the heart of the city.',
      image: '/feauturepic1.jpg',
    },    {
      title: 'Downtown Apartment',
      description: 'Modern 2-bedroom apartment in the heart of the city.',
      image: '/feauturepic2.jpg',
    },
    {
      title: 'Downtown Apartment',
      description: 'Modern 2-bedroom apartment in the heart of the city.',
      image: '/feauturepic3.jpg',
    }
    // Add more featured properties as needed
  ];
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
      {/* <div className="home-container1">
        {featuredProperties.map((property, index) => (
          <FeaturedList key={index} property={property} />
        ))}
      </div> */}
       <div className="home-container1">
        <FeaturedList featuredProperties={featuredProperties} />
      </div>
    </div>
  );
}

export default Home;


