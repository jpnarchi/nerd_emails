import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = ({ plans }) => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes y precios</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y comienza a experimentar el poder de Nerd.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(plan => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;