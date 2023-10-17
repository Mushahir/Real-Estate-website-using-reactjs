
//  these is one  of the method like a ternary operator  it change the class to show something

// import React from 'react';
// import './css/Propertymanagement.css';

// function Propertymanagement({ isImageOnRight, sectionClassName }) {
//   const containerClassName = `property-manager-resources ${isImageOnRight ? 'right-image-section' : ''} ${sectionClassName  || ''}`;

//   return (
//     <div className={containerClassName}>
//       <div className="left-content">
//         <img src="/Person-chatting.webp" alt="Property Manager" />
//       </div>
//       <div className="right-content">
//         <h2>Property Manager Resources</h2>
//         <p>
//           Stay up-to-date using our tips and guides on rent payments, leasing, management solutions, and more.
//         </p>
//         <a href="/about" className="know-more-button">Know More</a>
//       </div>
//     </div>
//   );
// }

// export default Propertymanagement;
import React from 'react';
import './css/Propertymanagement.css';

function Propertymanagement({ isImageOnRight, sectionClassName, title, content, imageSource, buttonLabel, link,content1 }) {
  const containerClassName = `property-manager-resources ${isImageOnRight ? 'right-image-section' : ''} ${sectionClassName || ''}`;

  return (
    <div>
    <div className={containerClassName}>
      <div className="left-content">
        <img src={imageSource} alt="Property Manager" />
      </div>
      <div className="right-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <a href={link} className="know-more-button">{buttonLabel}</a>
      </div>
    </div>
    {isImageOnRight && ( // Only display if isImageOnRight is true
        <div class="texts">
          <h2 class="texts-color">{content1}</h2>
        </div>
      )}
    </div>
  );
}

export default Propertymanagement;
