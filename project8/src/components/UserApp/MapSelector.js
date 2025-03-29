import React, { useState, useRef, useEffect } from 'react';

const MapSelector = ({ onLocationSelect }) => {
  const [origin, setOrigin] = useState('Mi ubicación actual');
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const destinationInputRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
          
          if (window.google && window.google.maps) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode(
              { location: { lat: latitude, lng: longitude } },
              (results, status) => {
                if (status === "OK" && results[0]) {
                  setOrigin(results[0].formatted_address);
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
  }, []);

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    setSuggestions([]);

    // Limpiar timeout anterior
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Nuevo timeout para reducir llamadas a la API
    const newTimeout = setTimeout(() => {
      if (window.google && window.google.maps && value.length > 2) {
        const autocompleteService = new window.google.maps.places.AutocompleteService();
        
        autocompleteService.getPlacePredictions(
          { 
            input: value,
            types: ['geocode'],
            componentRestrictions: { country: 'mx' } // Ajusta según tu región
          },
          (predictions, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              setSuggestions(predictions || []);
            }
          }
        );
      }
    }, 500); // 500ms de debounce

    setDebounceTimeout(newTimeout);
  };

  const handleSuggestionSelect = (suggestion) => {
    setDestination(suggestion.description);
    setSuggestions([]);
  };

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
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://images.unsplash.com/photo-1558981852-426c6c22a060)',
        backgroundSize: 'cover'
      }}
    >
      <div className="bg-white/90 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          ¿A dónde vas?
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-gray-700">
            Origen
          </label>
          <input 
            type="text" 
            value={origin}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-200 cursor-not-allowed"
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm font-bold mb-2 text-gray-700">
            Destino
          </label>
          <input 
            type="text"
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Escribe tu destino completo"
            className="w-full p-3 border rounded-lg"
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
              {suggestions.map((suggestion) => (
                <li 
                  key={suggestion.place_id}
                  onClick={() => handleSuggestionSelect(suggestion)}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion.description}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button 
          onClick={handleSearch}
          disabled={!destination}
          className={`w-full p-3 rounded-lg text-white font-bold transition ${
            destination 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Buscar Viaje
        </button>
      </div>
    </div>
  );
};

export default MapSelector;

// CAMBIOS PRINCIPALES:
// 1. Añadido debounce para reducir llamadas a la API
// 2. Removida la limitación de 4 letras
// 3. Agregado scroll a sugerencias
// 4. Placeholder más descriptivo

// El resto de los archivos permanecen igual que en la versión anterior

// DONE