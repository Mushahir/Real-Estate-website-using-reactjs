//  // ProductListing.js
// import React from 'react';

// function ProductListing() {
//   // Define your product data, e.g., an array of products
//   const products = [
//     { id: 1, name: 'Product 1', price: 100 },
//     { id: 2, name: 'Product 2', price: 150 },
//     // Add more products here
//   ];

//   return (
//     <div>
//       <h2>Product Listing</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <p>Name: {product.name}</p>
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductListing;
// PropertyListing.js




import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function PropertyListing(props) {
  const { properties } = props;

  if (!properties) {
    return <div>Loading...</div>;
  }

  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 2, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
  };

  return (
    <div>
      <div className="property-list">
        <Slider {...sliderSettings}>
          {properties.map((property, index) => (
            <div key={index} className="property-item">
              <img src={property.image} alt={property.title} />
              <h3>{property.title}</h3>
              <p>Location: {property.location}</p>
              <p>Price: ${property.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PropertyListing;
