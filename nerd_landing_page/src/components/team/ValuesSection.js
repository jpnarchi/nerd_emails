import React from 'react';
import ValueCard from './ValueCard';

const ValuesSection = ({ values }) => {
  return (
    <section className="bg-gradient-to-b from-[#0a1a0a] to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nuestros valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;