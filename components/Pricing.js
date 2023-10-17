// components/Pricing.js
import React, { useState } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({ pricingData }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="pricing-container">
      <button onClick={togglePricing}>
        {isAnnual ? 'Annual Pricing' : 'Monthly Pricing'}
      </button>
      <div className="pricing-grid">
        {pricingData.map((data, index) => (
          <PricingCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;