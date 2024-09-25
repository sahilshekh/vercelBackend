import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({ title, content }) => {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default DashboardCard;
