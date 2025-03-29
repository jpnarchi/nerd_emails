import React, { useState, useEffect } from 'react';

const GoogleMapsLoader = ({ children }) => {
  const [mapsLoaded, setMapsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapsLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return mapsLoaded ? children : <div>Cargando mapas...</div>;
};

export default GoogleMapsLoader;

// DONE