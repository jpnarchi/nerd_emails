import React from 'react';
import Logo from '../Logo'; // Importar el componente Logo

const SolutionsHero = ({ data }) => {
  return (
    <section className="bg-gradient-to-b from-black to-[#0a1a0a] text-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center relative"> {/* Añadido relative para posicionar el logo */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"> {/* Posicionar y estilizar el logo */}
          <Logo className="w-48 h-48 md:w-64 md:h-64" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative z-10"> {/* Añadido relative z-10 para asegurar que el texto esté encima */}
          {data.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto relative z-10"> {/* Añadido relative z-10 */}
          {data.description}
        </p>
      </div>
    </section>
  );
};

export default SolutionsHero;