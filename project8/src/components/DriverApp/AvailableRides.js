import React, { useState, useEffect } from 'react';

const AvailableRides = ({ onAcceptRide }) => {
  const [availableRides, setAvailableRides] = useState([]);

  useEffect(() => {
    // Simular obtención de viajes disponibles con cálculo de tarifa
    const mockRides = [
      {
        id: 1,
        origin: 'Av. Siempre Viva 742',
        destination: 'Centro Comercial',
        distance: '5.2 km',
        estimatedTime: '15 min',
        price: '$8.50',
        baseRate: 2.50,
        ratePerKm: 1.20
      },
      {
        id: 2,
        origin: 'Parque Central',
        destination: 'Universidad',
        distance: '3.7 km',
        estimatedTime: '10 min',
        price: '$6.50',
        baseRate: 2.50,
        ratePerKm: 1.20
      }
    ];

    setAvailableRides(mockRides);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Viajes Disponibles</h2>
      {availableRides.map((ride) => (
        <div 
          key={ride.id} 
          className="bg-white shadow-md rounded-lg p-4 mb-3"
        >
          <div className="flex justify-between mb-2">
            <span className="font-bold">Origen:</span>
            <span>{ride.origin}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-bold">Destino:</span>
            <span>{ride.destination}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-bold">Distancia:</span>
            <span>{ride.distance}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-bold">Tiempo Estimado:</span>
            <span>{ride.estimatedTime}</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-600">Tarifa Base: $2.50</span>
              <br />
              <span className="text-xl font-bold text-green-500">
                Total: {ride.price}
              </span>
            </div>
            <button 
              onClick={() => onAcceptRide(ride)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Aceptar Viaje
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableRides;

// DONE