import React from 'react';

const TeamMissionVideo = () => {
  const videoId = '4y_Qo33FTUc'; // ID del video de YouTube
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="bg-gradient-to-b from-[#0a1a0a] to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra misión en <span className="text-[#95BF92]">Nerd</span></h2>
          <p className="text-xl text-gray-300">
            En Nerd, nuestra misión es democratizar el acceso a la inteligencia artificial, 
            creando herramientas potentes pero fáciles de usar que permitan a empresas y 
            personas innovar y alcanzar su máximo potencial. Creemos en un futuro donde 
            la tecnología avanzada sea una fuerza para el bien, impulsando la eficiencia, 
            la creatividad y el crecimiento responsable.
          </p>
        </div>
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-[#95BF92]"> {/* Añadido borde verde */}
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TeamMissionVideo;