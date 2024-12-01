import React from 'react';

const PrivacyPolicy = () => {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
      <div className="prose prose-invert">
        <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            We collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Create an account or purchase our services</li>
            <li>Contact our support team</li>
            <li>Subscribe to our newsletter</li>
            <li>Participate in our surveys or promotions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process your payments and prevent fraud</li>
            <li>Send you important updates and notifications</li>
            <li>Improve our services and develop new features</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
          <p className="text-gray-300">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;