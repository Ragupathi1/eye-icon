import React, { useState } from 'react';
import './Card.css';

const Card = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <div className="icon">
        <img src="https://img.icons8.com/ios-filled/50/000000/visible.png" alt="Eye Icon" />
      </div>
      <h2>Name: Ragupathi</h2>
      <p>Registration No: 212221040135</p>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div className="details">
          <p>Additional details or content can go here...</p>
        </div>
      )}
    </div>
  );
};

export default Card;
