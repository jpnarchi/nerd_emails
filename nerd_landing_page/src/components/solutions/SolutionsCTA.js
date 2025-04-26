import React from 'react';

const SolutionsCTA = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#0a1a0a] text-white py-20 px-6 md:px-12"> {/* Ajustado el degradado */}
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 border border-[#95BF92] text-center"> {/* Borde verde y text-center */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones de IA pueden ayudarte a optimizar procesos, aumentar la productividad y mejorar la experiencia de tus clientes.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#95BF92] text-black px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all">
            Solicitar demo
          </button>
          <button className="bg-transparent border border-[#95BF92] text-[#95BF92] px-8 py-3 rounded-lg font-medium hover:bg-[#95BF92] hover:bg-opacity-10 transition-all">
            Contactar ventas
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
// DONE