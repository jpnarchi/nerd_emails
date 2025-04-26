import React from 'react';

const HomeCTA = () => {
  const handleTryNerdClick = () => {
    window.location.href = 'https://www.nerd.lat';
  };

  return (
    <section className="bg-gradient-to-b from-black to-[#0a1a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 border border-[#95BF92] text-center"> {/* Añadido text-center */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comienza a crear hoy</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descubre cómo Nerd puede ayudarte a innovar y alcanzar tus objetivos más rápido.
          </p>
        </div>
        <button 
          className="bg-[#95BF92] text-black px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
          onClick={handleTryNerdClick}
        >
          Prueba Nerd
        </button>
      </div>
    </section>
  );
};

export default HomeCTA;