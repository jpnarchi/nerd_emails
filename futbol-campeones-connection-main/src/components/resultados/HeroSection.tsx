
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-28 bg-supercopa-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-supercopa-navy/95 to-supercopa-navy/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2071')] bg-cover bg-center bg-no-repeat opacity-40"></div>
      
      <div className="relative container mx-auto px-4 text-center z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Resultados <span className="text-supercopa-gold">SuperCopa</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
          Mantente al tanto de partidos, tabla de posiciones y goleadores del torneo.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
