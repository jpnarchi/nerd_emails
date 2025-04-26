import React from 'react';

const TryNerdHero = ({ data }) => {
  return (
    <section className="bg-black text-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {data.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          {data.description}
        </p>
      </div>
    </section>
  );
};

export default TryNerdHero;