import React from 'react';

const DeploymentSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a1a0a] to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tu aplicación está lista?</h2>
          <p className="text-xl text-gray-300">
            Haz click en el botón de "Subir a Internet" para publicar tu proyecto en línea 
            y hacer que todo el mundo pueda conocerlo. ¡Es rápido y sencillo!
          </p>
        </div>
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-[#95BF92]">
          <video 
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/subir_internet.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;