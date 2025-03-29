import React from 'react';

const RideOptions = ({ onSelectRide }) => {
  const rideTypes = [
    { 
      name: 'Económico', 
      price: '$5', 
      description: 'Viaje más económico' 
    },
    { 
      name: 'Estándar', 
      price: '$8', 
      description: 'Viaje equilibrado' 
    },
    { 
      name: 'Premium', 
      price: '$12', 
      description: 'Moto de alta gama' 
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Selecciona tu viaje</h2>
      {rideTypes.map((ride, index) => (
        <div 
          key={index} 
          onClick={() => onSelectRide(ride)}
          className="bg-white shadow-md rounded-lg p-4 mb-3 cursor-pointer hover:bg-gray-100"
        >
          <div className="flex justify-between">
            <h3 className="font-bold">{ride.name}</h3>
            <span className="text-blue-500">{ride.price}</span>
          </div>
          <p className="text-gray-500">{ride.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RideOptions;