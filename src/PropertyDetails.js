import React from 'react';
import './css/PropertyDetails.css'; // Import your CSS file
const property = [
  {
    id: 1,
    title: 'Spacious Family Home',
    location: '123 Main St, City, Country',
    price: 250000,
    image: 'propertdetails.jpg', // Replace with the actual image URL
  },
  {
    id: 2,
    title: 'Modern Downtown Apartment',
    location: '456 Elm St, City, Country',
    price: 180000,
    image: 'propertydetails2.png', // Replace with the actual image URL
  },
  {
    id: 3,
    title: 'Luxury Beachfront Villa',
    location: '789 Palm St, City, Country',
    price: 750000,
    image: 'propertydetails1.png', // Replace with the actual image URL
  },
  // Add more property listings as needed
];
function PropertyDetails() {
  return (
    
    <div>
    <div className='property-title'>
<h2>PropertyDetails</h2>
      </div>
    <div className="property-details-container">
    {property.map((property, index) => (
          <div key={index} className="property-details-container">
            <div className="property-image">
            <img src={property.image} alt={property.title} />
          </div>
          <div className="property-info">
            <h1>{property.title}</h1>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
            </div>
          ))}
    </div>
    </div>
  );
}

export default PropertyDetails;
