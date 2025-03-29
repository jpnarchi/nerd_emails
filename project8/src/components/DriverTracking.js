import React from 'react';

const DriverTracking = ({ driver }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Tu conductor</h2>
      <div className="flex items-center bg-white rounded-lg p-4 shadow-md">
        <img 
          src="https://via.placeholder.com/50" 
          alt="Conductor" 
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="font-bold">{driver.name}</h3>
          <p className="text-gray-500">{driver.motoModel}</p>
        </div>
      </div>
      <div className="mt-4 bg-blue-500 text-white p-3 rounded-lg text-center">
        Llegada estimada: 5-10 minutos
      </div>
    </div>
  );
};

export default DriverTracking;