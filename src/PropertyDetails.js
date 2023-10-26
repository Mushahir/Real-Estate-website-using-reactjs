
import React from 'react';
import './css/PropertyDetails.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
const properties = [
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
    {
      id: 3,
      title: 'Jebel Ali Industrial',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    {
      id: 3,
      title: 'Jumeirah Garden City',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    {
      id: 3,
      title: 'Al Qusais Residences',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    // Add more property listings as needed
  ];

function PropertyDetails() {
  const navigate = useNavigate();
  return (
  <div>
<div className='property-title'>
<h2>PropertyDetails</h2>     
</div>
    <div className="property-details-container">
      {properties.map((property, index) => (
        <div className="property-card" key={property.id}>
          <div className="property-image">
            <img src={property.image} alt={property.title} />
          </div>
          <div className="property-info">
            <h2>{property.title}</h2>
            <p>{property.location}</p>
            <p>Price: ${property.price}</p>
            <button className="buy-button" onClick={() => navigate('/PaymentPage')}>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default PropertyDetails;
