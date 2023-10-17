import React from 'react';

function CitySelection(props) {
  const cities = ['Bangalore', 'Chennai', 'Hyderabad', 'Mumbai']; // List of cities

  return (
    <div className="city-selection">
      <p>Choose a city to view properties:</p>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <button onClick={() => props.onCitySelect(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitySelection;
