import React from 'react';

const HomeSection = ({ onStartRide }) => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Tarifas Económicas',
      description: 'Los precios más competitivos del mercado',
      color: 'bg-blue-600'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Conductores Verificados',
      description: 'Seguridad y confianza en cada viaje',
      color: 'bg-green-600'
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://images.unsplash.com/photo-1519681393784-d120267933ba)',
        backgroundSize: 'cover'
      }}
    >
      <div className="text-center max-w-4xl px-4">
        <div className="mb-12">
          <img 
            src="https://via.placeholder.com/200" 
            alt="MotoRide Logo" 
            className="mx-auto mb-6 rounded-full shadow-2xl"
          />
          <h1 className="text-6xl font-bold mb-4 text-blue-400 drop-shadow-lg">
            MotoRide
          </h1>
          <p className="text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Transporte urbano inteligente. Rápido, seguro y al alcance de tu mano.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.color} p-6 rounded-lg shadow-xl transform transition hover:scale-105`}
            >
              {feature.icon}
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <button 
          onClick={onStartRide}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-full text-2xl transition transform hover:scale-110 shadow-2xl"
        >
          Iniciar Viaje
        </button>
      </div>
    </div>
  );
};

export default HomeSection;

// El resto de los archivos permanecen igual que en la versión anterior

// DONE