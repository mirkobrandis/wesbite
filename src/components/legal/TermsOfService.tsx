import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
      <div className="prose prose-invert">
        <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Terms</h2>
        <p className="text-gray-300">By accessing our service, you agree to be bound by these terms...</p>
        {/* Add more terms of service content */}
      </div>
    </div>
  );
};

export default TermsOfService;