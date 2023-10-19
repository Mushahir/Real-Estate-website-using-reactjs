// Stats.js
import React from 'react';

const Stats = () => {
  // Define your statistics data here
  const statsData = [
    { label: 'Employees', count: 50 },
    { label: 'Clients', count: 1000 },
    // Add more statistics as needed
  ];

  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div className="stat-item" key={index}>
          <div className="stat-count">{stat.count}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
