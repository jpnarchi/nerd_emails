import React, { useState } from 'react';

const heroProducts = [
  { 
    id: 1, 
    name: 'Colección Invierno', 
    description: 'Chaquetas de última generación para enfrentar el frío con estilo',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230512/pngtree-cold-weather-down-jackets-in-a-store-image_2505500.jpg', 
    price: 129.99 
  }
];

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fondo con imagen de producto */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroProducts[0].image} 
          alt={heroProducts[0].name} 
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 container mx-auto flex items-center h-full">
        <div className="text-white max-w-xl space-y-6 p-6 bg-black/40 rounded-xl">
          <h1 className="text-5xl font-bold uppercase tracking-tight">
            {heroProducts[0].name}
          </h1>
          <p className="text-xl opacity-80">
            {heroProducts[0].description}
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-3xl font-bold">
              ${heroProducts[0].price}
            </span>
            <button className="bg-white text-black px-8 py-3 rounded-full 
              hover:bg-gray-200 transition-colors duration-300 font-semibold">
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// DONE