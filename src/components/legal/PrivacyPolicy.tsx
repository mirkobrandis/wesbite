import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
      <div className="prose prose-invert">
        <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-gray-300">We collect information that you provide directly to us...</p>
        {/* Add more privacy policy content */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;