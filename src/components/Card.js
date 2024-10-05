import React from 'react';
import '../styles/Card.css'; // You can create this CSS file for styling

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;