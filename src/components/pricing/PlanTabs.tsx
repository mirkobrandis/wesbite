import React from 'react';

interface PlanTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const PlanTabs: React.FC<PlanTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center space-x-4 mb-12">
      <button
        onClick={() => onTabChange('standard')}
        className={`px-6 py-2 rounded-md ${
          activeTab === 'standard'
            ? 'bg-blue-600 text-white'
            : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
        }`}
      >
        Standard (Intel)
      </button>
      <button
        onClick={() => onTabChange('premium')}
        className={`px-6 py-2 rounded-md ${
          activeTab === 'premium'
            ? 'bg-blue-600 text-white'
            : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
        }`}
      >
        Premium (Ryzen)
      </button>
      <button
        onClick={() => onTabChange('addons')}
        className={`px-6 py-2 rounded-md ${
          activeTab === 'addons'
            ? 'bg-blue-600 text-white'
            : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
        }`}
      >
        Add-ons
      </button>
    </div>
  );
};

export default PlanTabs;