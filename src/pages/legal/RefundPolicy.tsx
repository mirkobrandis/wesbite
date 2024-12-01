import React from 'react';

const RefundPolicy = () => {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-white mb-8">Refund Policy</h1>
      <div className="prose prose-invert">
        <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Refund Eligibility</h2>
          <p className="text-gray-300 mb-4">
            We offer refunds under the following conditions:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Service unavailability exceeding 24 hours</li>
            <li>Technical issues preventing service usage</li>
            <li>Cancellation within 24 hours of purchase</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Refund Process</h2>
          <p className="text-gray-300 mb-4">
            To request a refund:
          </p>
          <ol className="list-decimal pl-6 text-gray-300 space-y-2">
            <li>Contact our support team</li>
            <li>Provide order details and reason for refund</li>
            <li>Allow up to 5-7 business days for processing</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. Non-Refundable Items</h2>
          <p className="text-gray-300">
            The following are not eligible for refunds:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Used service time beyond 24 hours</li>
            <li>Add-on services after activation</li>
            <li>Customized configurations</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default RefundPolicy;