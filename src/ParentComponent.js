
import React from 'react';
import PropertyListing from './PropertyListing'; // Import the PropertyListing component

function ParentComponent() {
  // Define your properties data
  const properties = [
    {
      id: 1,
      title: 'Spacious Family Home',
      location: '123 Main St, City, Country',
      price: 250000,
      image: 'property2.jpg', // Replace with the actual image URL
    },
    {
      id: 2,
      title: 'Modern Downtown Apartment',
      location: '456 Elm St, City, Country',
      price: 180000,
      image: 'property2.jpg', // Replace with the actual image URL
    },
    {
      id: 3,
      title: 'Luxury Beachfront Villa',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'property2.jpg', // Replace with the actual image URL
    },
    // Add more property listings as needed
  ];
  return (
    <div>
      {/* Pass the "properties" data as a prop to the PropertyListing component */}
      <PropertyListing properties={properties} />
    </div>
  );
}

export default ParentComponent;



