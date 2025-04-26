import React from 'react';

const JoinTeamSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#0a1a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 border border-[#95BF92]"> {/* Borde verde */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Únete a nuestro equipo</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos buscando mentes brillantes y apasionadas para ayudarnos a construir el futuro de la IA.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#95BF92] text-black px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all">
            Ver posiciones abiertas
          </button>
          <button className="bg-transparent border border-[#95BF92] text-[#95BF92] px-8 py-3 rounded-lg font-medium hover:bg-[#95BF92] hover:bg-opacity-10 transition-all">
            Conocer nuestra cultura
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
// DONE