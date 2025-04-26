import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TryNerdHero from '../components/tryNerd/TryNerdHero';
import FeaturesSection from '../components/tryNerd/FeaturesSection';
import DemoChat from '../components/tryNerd/DemoChat';
import PricingSection from '../components/tryNerd/PricingSection';
import TryNerdFAQ from '../components/tryNerd/TryNerdFAQ';
import { tryNerdData } from '../mock/data';

const TryNerdPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main id="main-content">
        <TryNerdHero data={tryNerdData.hero} />
        <FeaturesSection features={tryNerdData.features} />
        <DemoChat demoPrompts={tryNerdData.demoPrompts} />
        <PricingSection plans={tryNerdData.plans} />
        <TryNerdFAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default TryNerdPage;