import React, { useState } from 'react';

const LocationInput = ({ onLocationSelect }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    onLocationSelect({ origin, destination });
  };

  return (
    <div className="p-4 bg-gray-100">
      <input 
        type="text" 
        placeholder="Origen" 
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="w-full p-2 mb-2 rounded-lg"
      />
      <input 
        type="text" 
        placeholder="Destino" 
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full p-2 mb-2 rounded-lg"
      />
      <button 
        onClick={handleSearch}
        className="w-full bg-blue-500 text-white p-2 rounded-lg"
      >
        Buscar Viaje
      </button>
    </div>
  );
};

export default LocationInput;