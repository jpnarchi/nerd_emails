import React from 'react';

const AppCreationSection = () => {
  const imageUrl = 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0TXpEESw5OC5NA8gnBVpXH1xYGvSUuPebwsFo';

  return (
    <section className="bg-gradient-to-b from-[#0a1a0a] to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¡Crea tu App en Minutos!</h2>
          <p className="text-xl text-gray-300">
            Solo dile a <span className="text-[#95BF92]">Nerd</span> tu idea y él la hará realidad, 
            después despliégala en la web y comienza a usarla.
          </p>
        </div>
        <div className="w-full rounded-xl overflow-hidden shadow-lg border border-[#95BF92]"> {/* Borde verde */}
          <img src={imageUrl} alt="App Creation" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AppCreationSection;