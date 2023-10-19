import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {

  const statsData = [
    { label: 'Employees', count: 50 },
    { label: 'Clients', count: 1000 },
    { label: 'property sale', count: 500 },

  ];

  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div className="stat-item" key={index}>
          <div className="stat-count">
            <CountUp start={0} end={stat.count} duration={4} />
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
