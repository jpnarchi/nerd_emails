import React from 'react';
import ProductGrid from './ProductGrid';

const WomenSection = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://img.freepik.com/foto-gratis/retrato-mujer-elegante-posando_23-2148947479.jpg" 
          alt="Moda Femenina Urbana"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Moda Femenina</h1>
            <p className="text-xl">Diseños contemporáneos para ella</p>
          </div>
        </div>
      </div>
      <ProductGrid initialCategory="woman" />
    </div>
  );
};

export default WomenSection;