import React from 'react';

const FeatureCard = ({ feature, index }) => {
  // Diferentes colores para cada característica
  const colors = [
    'from-purple-600 to-blue-700',
    'from-green-500 to-teal-600',
    'from-yellow-500 to-orange-600'
  ];
  
  const currentColor = colors[index % colors.length];

  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${currentColor}`}></div>
      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;