import React, { useState, useRef, useEffect } from 'react';

const MapSelector = ({ onLocationSelect }) => {
  const [origin, setOrigin] = useState('Mi ubicación actual');
  const [destination, setDestination] = useState('');
  const originInputRef = useRef(null);
  const destinationInputRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Obtener ubicación actual al cargar el componente
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
          
          // Convertir coordenadas a dirección legible
          if (window.google && window.google.maps) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode(
              { location: { lat: latitude, lng: longitude } },
              (results, status) => {
                if (status === "OK") {
                  if (results[0]) {
                    setOrigin(results[0].formatted_address);
                  }
                }
              }
            );
          }
        },
        (error) => {
          console.error("Error obteniendo ubicación", error);
        }
      );
    }

    // Configurar Autocomplete para destino
    if (window.google && window.google.maps) {
      const destinationAutocomplete = new window.google.maps.places.Autocomplete(destinationInputRef.current);

      destinationAutocomplete.addListener('place_changed', () => {
        const place = destinationAutocomplete.getPlace();
        setDestination(place.formatted_address);
      });
    }
  }, []);

  const handleSearch = () => {
    if (origin && destination) {
      onLocationSelect({ 
        origin, 
        destination, 
        currentLocation 
      });
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Origen</label>
        <input 
          type="text" 
          value={origin}
          readOnly
          className="w-full p-2 border rounded-lg bg-gray-200 cursor-not-allowed"
        />
        <div className="text-xs text-gray-500 mt-1">
          Ubicación detectada automáticamente
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Destino</label>
        <input 
          ref={destinationInputRef}
          type="text" 
          placeholder="¿A dónde te diriges?" 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <button 
        onClick={handleSearch}
        disabled={!destination}
        className={`w-full p-2 rounded-lg transition ${
          destination 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Buscar Ruta
      </button>
    </div>
  );
};

export default MapSelector;