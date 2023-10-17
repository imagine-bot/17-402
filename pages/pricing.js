// pages/pricing.js
import React from 'react';
import Pricing from '../components/Pricing';

const pricingData = [
  {
    plan: 'Basic',
    price: '$10/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    buttonText: 'Choose Plan',
  },
  {
    plan: 'Pro',
    price: '$20/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    buttonText: 'Choose Plan',
  },
  {
    plan: 'Premium',
    price: '$30/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    buttonText: 'Choose Plan',
  },
];

const PricingPage = () => (
  <div>
    <Pricing pricingData={pricingData} />
  </div>
);

export default PricingPage;