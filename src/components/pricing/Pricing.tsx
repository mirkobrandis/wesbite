import React, { useState } from 'react';
import PricingCard from './PricingCard';
import PlanTabs from './PlanTabs';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('standard');

  const standardPlans = [
    {
      name: 'Intel Basic',
      price: 5.99,
      features: ['2GB DDR4 RAM', '2 vCPUs (Intel Xeon)', '30 GB SSD', 'Germany'],
    },
    {
      name: 'Intel Pro',
      price: 11.99,
      features: ['4GB DDR4 RAM', '4 vCPUs (Intel Xeon)', '60 GB SSD', 'Germany'],
      isPopular: true,
    },
    {
      name: 'Intel Enterprise',
      price: 17.99,
      features: ['8GB DDR4 RAM', '6 vCPUs (Intel Xeon)', '120 GB SSD', 'Germany'],
    },
  ];

  const premiumPlans = [
    {
      name: 'Ryzen Starter',
      price: 7.99,
      features: ['4GB DDR4 RAM', '2 vCPUs (Ryzen 7)', '50 GB NVMe SSD', 'Germany'],
    },
    {
      name: 'Ryzen Pro',
      price: 15.99,
      features: ['8GB DDR4 RAM', '4 vCPUs (Ryzen 7)', '120 GB NVMe SSD', 'Germany'],
      isPopular: true,
    },
    {
      name: 'Ryzen Elite',
      price: 24.99,
      features: ['16GB DDR4 RAM', '6 vCPUs (Ryzen 9)', '250 GB NVMe SSD', 'Germany'],
    },
  ];

  const addons = [
    {
      name: 'Extra Storage',
      price: 5,
      features: ['100 GB Additional NVMe SSD', 'Instant Activation', 'No Setup Fee'],
      type: 'addon',
    },
    {
      name: 'Backup Service',
      price: 3,
      features: ['Daily Backups', '7-Day Retention', 'Instant Recovery'],
      type: 'addon',
    },
    {
      name: 'DDoS Protection',
      price: 10,
      features: ['Advanced Mitigation', '24/7 Monitoring', 'Traffic Analysis'],
      type: 'addon',
    },
  ];

  const getActivePlans = () => {
    switch (activeTab) {
      case 'standard':
        return standardPlans;
      case 'premium':
        return premiumPlans;
      case 'addons':
        return addons;
      default:
        return standardPlans;
    }
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-gray-400">Select the perfect plan for your needs</p>
        </div>
        <PlanTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="grid md:grid-cols-3 gap-8">
          {getActivePlans().map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;