// import React from 'react';

// function FeaturedList({ property }) {
//   return (
//     <div className="featured-property">
//       <img src={property.image} alt={property.title} />
//       <h3>{property.title}</h3>
//       <p>{property.description}</p>
//       <button>View Details</button>
//     </div>
//   );
// }

// export default FeaturedList;
import React from 'react';
import './css/feauturedlist.css';
import { useNavigate } from 'react-router-dom';
function FeaturedList({ featuredProperties }) {
  const navigate = useNavigate();

  return (
    <div className="featured-list">
      <h2>Explore Rentals</h2>
      <div className="feauturearea-list">
        {featuredProperties.map((property, index) => (
          <div key={index} className="featured-property">
            <img src={property.image} alt={property.title} />
            <div className="property-details">
              <h3>{property.title}</h3>
              <p>{property.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-more-button" onClick={() => navigate('/PropertyDetails')}>
  View More
</button>
    </div>
  );
}

export default FeaturedList;