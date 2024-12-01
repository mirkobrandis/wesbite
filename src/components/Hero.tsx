import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-blue-600 font-semibold">#1 PREMIUM SERVERS</span>
        <h1 className="text-5xl font-bold mt-6 mb-8">
          Redefine Virtual Efficiency with{' '}
          <span className="text-blue-600">DollaroTools</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Our RDP is a premium VPS service that offers you high-quality servers at affordable prices.
          Our servers are equipped with the latest hardware and software to ensure the best performance and stability.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
            Try Now
          </button>
          <button className="border border-gray-600 text-white px-8 py-3 rounded-md hover:border-gray-400">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;