import React from 'react';
import './css/Propertymanagement.css';

function Service({ isImageOnRight, sectionClassName, title, content, imageSource, buttonLabel, link,content1 }) {
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
    </div>
  );
}

export default Service;