import React from 'react';

const Mission = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Nuestra Misión</h2>
        <p className="text-xl leading-relaxed text-gray-300">
          En Nerd creamos inteligencia artificial accesible que impulsa la eficiencia empresarial. 
          Ponemos tecnología avanzada al alcance de todos.
        </p>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#" className="px-6 py-3 border border-[#95BF92] text-[#95BF92] rounded-lg hover:bg-[#95BF92] hover:bg-opacity-10 transition-all">
            Nuestra historia
          </a>
          <a href="#" className="px-6 py-3 border border-[#95BF92] text-[#95BF92] rounded-lg hover:bg-[#95BF92] hover:bg-opacity-10 transition-all">
            Casos de éxito
          </a>
          <a href="#" className="px-6 py-3 border border-[#95BF92] text-[#95BF92] rounded-lg hover:bg-[#95BF92] hover:bg-opacity-10 transition-all">
            Centro de ayuda
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mission;