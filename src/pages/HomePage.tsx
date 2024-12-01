import React from 'react';
import Hero from '../components/Hero';
import Pricing from '../components/pricing/Pricing';
import Features from '../components/Features';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="features">
        <Features />
      </section>
      <Contact />
    </main>
  );
};

export default HomePage;