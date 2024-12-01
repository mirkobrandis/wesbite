import React from 'react';
import { Shield, Zap, Clock, HardDrive, Scale, HeadphonesIcon } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'High Performance',
      description: 'Get maximum performance with our latest Intel & AMD processors and NVMe SSDs.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Security',
      description: 'Your data is our top priority. Our servers are protected with enterprise-level security.',
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Instant Setup',
      description: 'Get your server up and running in minutes with our automated deployment system.',
    },
    {
      icon: <HardDrive className="w-8 h-8 text-blue-600" />,
      title: 'SSD Storage',
      description: 'All servers come with NVMe SSD storage for lightning-fast read and write speeds.',
    },
    {
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      title: 'Scalability',
      description: 'Easily upgrade your resources as your needs grow with our flexible plans.',
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-blue-600" />,
      title: 'Fast Support',
      description: '24/7 technical support to help you with any issues you might encounter.',
    },
  ];

  return (
    <section className="bg-zinc-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6">
              {feature.icon}
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;