import React from 'react';
import ProductGrid from './ProductGrid';

const MenSection = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://img.freepik.com/foto-gratis/retrato-hombre-guapo-posando-ropa-moderna_23-2148947483.jpg" 
          alt="Moda Masculina Urbana"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Moda Masculina</h1>
            <p className="text-xl">Estilo urbano para el hombre moderno</p>
          </div>
        </div>
      </div>
      <ProductGrid initialCategory="man" />
    </div>
  );
};

export default MenSection;