
// import React from 'react';
// import './css/PropertyDetails.css'; // Import your CSS file
// import { useNavigate } from 'react-router-dom';
// const properties = [
//     {
//       id: 1,
//       title: 'Spacious Family Home',
//       location: '123 Main St, City, Country',
//       price: 250000,
//       image: 'propertdetails.jpg', // Replace with the actual image URL
//     },
//     {
//       id: 2,
//       title: 'Modern Downtown Apartment',
//       location: '456 Elm St, City, Country',
//       price: 180000,
//       image: 'propertydetails2.png', // Replace with the actual image URL
//     },
//     {
//       id: 3,
//       title: 'Luxury Beachfront Villa',
//       location: '789 Palm St, City, Country',
//       price: 750000,
//       image: 'propertydetails1.png', // Replace with the actual image URL
//     },
//     {
//       id: 3,
//       title: 'Jebel Ali Industrial',
//       location: '789 Palm St, City, Country',
//       price: 750000,
//       image: 'propertydetails1.png', // Replace with the actual image URL
//     },
//     {
//       id: 3,
//       title: 'Jumeirah Garden City',
//       location: '789 Palm St, City, Country',
//       price: 750000,
//       image: 'propertydetails1.png', // Replace with the actual image URL
//     },
//     {
//       id: 3,
//       title: 'Al Qusais Residences',
//       location: '789 Palm St, City, Country',
//       price: 750000,
//       image: 'propertydetails1.png', // Replace with the actual image URL
//     },
//     // Add more property listings as needed
//   ];

// function PropertyDetails() {
//   const navigate = useNavigate();
//   return (
//   <div>
// <div className='property-title'>
// <h2>PropertyDetails</h2>     
// </div>
//     <div className="property-details-container">
//       {properties.map((property, index) => (
//         <div className="property-card" key={property.id}>
//           <div className="property-image">
//             <img src={property.image} alt={property.title} />
//           </div>
//           <div className="property-info">
//             <h2>{property.title}</h2>
//             <p>{property.location}</p>
//             <p>Price: ${property.price}</p>
//             <button className="buy-button" onClick={() => navigate('/PaymentPage')}>Buy Now</button>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// }



  import React, { useState } from 'react';
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
      id: 4,
      title: 'Jebel Ali Industrial',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    {
      id: 5,
      title: 'Jumeirah Garden City',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    {
      id: 6,
      title: 'Al Qusais Residences',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    {
      id: 7,
      title: 'Al Qusais Residences',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    {
      id: 8,
      title: 'Al Qusais Residences',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    {
      id: 9,
      title: 'Al Qusais Residences',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    {
      id: 19,
      title: 'Al Qusais Residences',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    {
      id: 11,
      title: 'Al Qusais Residences',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    {
      id: 12,
      title: 'Al Qusais Residences',
      location: '789 Palm St, City, Country',
      price: 750000,
      image: 'propertydetails1.png', // Replace with the actual image URL
    },
    // Add more property listings as needed
  ];
  
  const propertiesPerPage = 6; // Number of properties to display per page

  function PropertyDetails() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
  
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = (currentPage - 1) * propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
  
    const totalPages = Math.ceil(properties.length / propertiesPerPage);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    return (
      <div>
        <div className='property-title'>
          <h2>PropertyDetails</h2>
        </div>
        <div className="property-details-container">
          {currentProperties.map((property) => (
            <div className="property-card" key={property.id}>
              <div className="property-image">
                <img src={property.image} alt={property.title} />
              </div>
              <div className="property-info">
                <h2>{property.title}</h2>
                <p>{property.location}</p>
                <p>Price: ${property.price}</p>
                <button className="buy-button" onClick={() => navigate('/PaymentPage')}>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="text-center">
            <ul id="pagination-demo" className="pagination">
              {/* <li className={`first ${currentPage === 1 ? 'disabled' : ''}`}>
                <a href="#" className="page-link" onClick={() => handlePageChange(1)}>
                  &lt;&lt;
                </a>
              </li> */}
              <li className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
                <a href="#" className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                  Previous
                </a>
              </li>
              {[...Array(totalPages).keys()].map((page) => (
                <li key={page + 1} className={`page page_num ${currentPage === page + 1 ? 'active' : ''}`}>
                  <a href="#" className="page-link" onClick={() => handlePageChange(page + 1)}>
                    {page + 1}
                  </a>
                </li>
              ))}
              <li className={`next ${currentPage === totalPages ? 'disabled' : ''}`}>
                <a href="#" className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                  Next
                </a>
              </li>
              {/* <li className={`last ${currentPage === totalPages ? 'disabled' : ''}`}>
                <a href="#" className="page-link" onClick={() => handlePageChange(totalPages)}>
                  &gt;&gt;
                </a>
              </li> */}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  export default PropertyDetails;
  
  
