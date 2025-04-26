import React from 'react';

const PricingCard = ({ plan }) => {
  const getCardClasses = () => {
    let classes = 'rounded-2xl p-8 relative transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl overflow-hidden';
    
    if (plan.name === 'Básico') {
      classes += ' bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700';
    } else if (plan.name === 'Profesional') {
      classes += ' bg-gray-900 border border-[#95BF92] popular-card';
    } else if (plan.name === 'Empresa') {
      classes += ' bg-gray-900 border border-yellow-500 premium-card lg:scale-105';
    } else {
      classes += ' bg-gray-900 border border-gray-800';
    }

    return classes;
  };

  const getBadgeClasses = () => {
    if (plan.popular) {
      return 'absolute top-0 right-0 bg-gradient-to-br from-[#95BF92] to-[#7FA37C] text-black text-sm font-medium px-4 py-1 rounded-bl-lg rounded-tr-lg';
    } else if (plan.name === 'Empresa') {
       return 'absolute top-0 right-0 bg-gradient-to-br from-yellow-500 to-orange-500 text-black text-sm font-medium px-4 py-1 rounded-bl-lg rounded-tr-lg';
    }
    return 'hidden';
  };

  const getButtonClasses = () => {
    if (plan.name === 'Profesional') {
      return 'w-full py-3 rounded-lg font-medium transition-all bg-[#95BF92] text-black hover:bg-opacity-90';
    } else if (plan.name === 'Empresa') {
      return 'w-full py-3 rounded-lg font-medium transition-all bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-orange-500 hover:to-yellow-500';
    } else {
      return 'w-full py-3 rounded-lg font-medium transition-all bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800';
    }
  };

  const getFeatureIconColor = () => {
    if (plan.name === 'Empresa') {
      return 'text-yellow-500';
    }
    return 'text-[#95BF92]';
  };

  return (
    <div className={getCardClasses()}>
      <div className={getBadgeClasses()}>
        {plan.popular ? 'Más Popular' : 'Premium'}
      </div>
      
      {/* Decorative Glows/Shines for Premium - Simplified for Tailwind */}
      {plan.name === 'Empresa' && (
        <>
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 30px rgba(255, 165, 0, 0.3)' }}></div>
          <div className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse" style={{ boxShadow: 'inset 0 0 20px rgba(255, 165, 0, 0.1)' }}></div>
        </>
      )}

      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-3xl font-bold mb-6">{plan.price}</p>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className={`w-5 h-5 mr-2 mt-0.5 ${getFeatureIconColor()}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={getButtonClasses()}>
        {plan.cta}
      </button>
    </div>
  );
};

export default PricingCard;