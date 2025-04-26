import React from 'react';

const ValueCard = ({ value, index }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-[#95BF92] relative overflow-hidden"> {/* Borde verde */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95BF92] to-[#7FA37C]"></div> {/* Degradado verde */}
      <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
      <p className="text-gray-300">{value.description}</p>
    </div>
  );
};

export default ValueCard;