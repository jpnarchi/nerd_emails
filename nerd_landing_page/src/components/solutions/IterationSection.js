import React from 'react';

const IterationSection = () => {
  const imageUrl = 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0j2K8MDzprvgIPmTtsSNY2ecybAh5LloqCaQw';

  return (
    <section className="bg-gradient-to-b from-black to-[#0a1a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full rounded-xl overflow-hidden shadow-lg border border-[#95BF92]"> {/* Borde verde */}
          <img src={imageUrl} alt="App Iteration" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No te gustó algo?</h2>
          <p className="text-xl text-gray-300">
            No te preocupes, dile a <span className="text-[#95BF92]">Nerd</span> los cambios que deseas realizar 
            hasta que quedes satisfecho con tu App. La iteración es clave para la perfección.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IterationSection;