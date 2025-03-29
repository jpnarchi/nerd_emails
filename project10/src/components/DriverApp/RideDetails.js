import React from 'react';

const RideDetails = ({ ride }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Detalles del Viaje</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Origen:</p>
          <p className="font-bold">{ride.origin}</p>
        </div>
        <div>
          <p className="text-gray-600">Destino:</p>
          <p className="font-bold">{ride.destination}</p>
        </div>
        <div>
          <p className="text-gray-600">Distancia:</p>
          <p className="font-bold">{ride.distance}</p>
        </div>
        <div>
          <p className="text-gray-600">Tarifa:</p>
          <p className="font-bold text-green-600 text-xl">
            {ride.price}
          </p>
        </div>
        <div className="col-span-2 mt-4">
          <div className="bg-blue-100 p-3 rounded-lg text-center">
            <p className="text-sm text-blue-800">
              Tarifa calculada según distancia recorrida
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;