import React from 'react';

const FeatureBlock = ({ title, description, icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'trust':
        return (
          <img 
            src="/lentes.svg" 
            alt="Lentes icon" 
            className="w-24 h-24 text-[#95BF92] mx-auto mb-4"
          />
        );
      case 'idea':
        return (
          <img 
            src="/idea.svg" 
            alt="Idea icon" 
            className="w-24 h-24 text-[#95BF92] mx-auto mb-4"
          />
        );
      case 'rocket':
        return (
          <svg className="w-24 h-24 text-[#95BF92] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-8 text-center border border-[#95BF92] relative overflow-hidden transition-all hover:transform hover:scale-[1.02] hover:shadow-xl"> {/* Borde verde y relative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95BF92] to-[#7FA37C]"></div> {/* Degradado verde */}
      {renderIcon()} {/* Renderizar el ícono */}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureBlock;