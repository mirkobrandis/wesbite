import React from 'react';

const TermsOfService = () => {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
      <div className="prose prose-invert">
        <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-300">
            By accessing and using DollaroTools services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Service Usage</h2>
          <p className="text-gray-300 mb-4">Users must:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Provide accurate account information</li>
            <li>Maintain the security of their account</li>
            <li>Use services in compliance with applicable laws</li>
            <li>Not engage in any unauthorized activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
          <p className="text-gray-300">
            Services are billed on a subscription basis. You agree to pay all fees associated with your selected plan. Prices are subject to change with notice.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsOfService;