import React from 'react';

const LocationPermissionModal = ({ onAllow, onDeny }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center">
        <h2 className="text-xl font-bold mb-4">Permitir Ubicación</h2>
        <p className="mb-4">
          MotoRide necesita acceder a tu ubicación para brindarte un mejor servicio
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={onAllow}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Permitir
          </button>
          <button 
            onClick={onDeny}
            className="bg-gray-300 text-black px-4 py-2 rounded-lg"
          >
            Denegar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPermissionModal;