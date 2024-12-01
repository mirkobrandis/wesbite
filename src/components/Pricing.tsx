import React from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
  const plans = [
    {
      name: 'Ryzen Starter',
      price: 7.99,
      features: ['4GB DDR4 RAM', 'Private vCores', '50 GB NVMe SSD', 'Germany'],
    },
    {
      name: 'Ryzen Boost',
      price: 13.99,
      features: ['8GB DDR4 RAM', 'Private vCores', '120 GB NVMe SSD', 'Germany'],
      isPopular: true,
    },
    {
      name: 'Ryzen Super',
      price: 20.99,
      features: ['16GB DDR4 RAM', 'Private vCores', '250 GB NVMe SSD', 'Germany'],
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;