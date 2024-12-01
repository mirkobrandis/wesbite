import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, features, isPopular }) => {
  return (
    <div className={`bg-zinc-900 rounded-lg p-6 ${isPopular ? 'border-2 border-red-600' : ''}`}>
      {isPopular && (
        <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full">
          Limited Time Offer
        </span>
      )}
      <h3 className="text-xl font-bold text-white mt-4">{name}</h3>
      <div className="mt-4 mb-6">
        <span className="text-3xl font-bold text-white">${price}</span>
        <span className="text-gray-400">/USD a month</span>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-red-600 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full mt-8 bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
        Order Now
      </button>
    </div>
  );
};

export default PricingCard;