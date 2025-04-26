import React from 'react';
import Logo from './Logo';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#0a1a0a] text-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center"> {/* Usar flexbox para centrar */}
        <div className="space-y-6 text-center md:text-left"> {/* Centrado en móvil, alineado a la izquierda en desktop */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Tu <span className="text-[#95BF92]">Nerd</span> de confianza
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Inteligencia Artificial para resultados reales
          </p>
          <div className="grid grid-cols-1 gap-4 pt-4 max-w-sm mx-auto md:mx-0"> {/* Centrado en móvil */}
            <div className="bg-black border border-[#95BF92] rounded-xl p-6 hover:bg-gray-900 transition-all">
              <h3 className="text-xl font-bold text-[#95BF92] mb-2">Nerd Assistant</h3>
              <p className="text-gray-300 mb-4">La IA más avanzada para tu empresa</p>
              <button className="bg-[#95BF92] text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all w-full">
                Comenzar
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center"> {/* Centrado */}
          <Logo className="w-64 h-64 md:w-96 md:h-96" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
// DONE