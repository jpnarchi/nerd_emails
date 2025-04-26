import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SkipLinks from '../components/SkipLinks';
import FeaturesSection from '../components/home/FeaturesSection';
import HomeCTA from '../components/home/HomeCTA';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] text-white">
      <SkipLinks />
      <Header />
      
      <main id="main-content">
        <Hero />
        <FeaturesSection />
        <HomeCTA />
      </main>
      
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
// DONE