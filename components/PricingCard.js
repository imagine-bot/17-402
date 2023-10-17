// components/PricingCard.js
import React from 'react';

const PricingCard = ({ plan, price, features, buttonText }) => (
  <div className="pricing-card">
    <h2>{plan}</h2>
    <h3>{price}</h3>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button>{buttonText}</button>
  </div>
);

export default PricingCard;