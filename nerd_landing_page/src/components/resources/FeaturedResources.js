import React from 'react';
import ResourceCard from './ResourceCard';

const FeaturedResources = ({ resources }) => {
  return (
    <section className="bg-gradient-to-b from-black to-[#0a1a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Recursos destacados</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Explora nuestros recursos más populares para sacar el máximo provecho de Nerd.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;