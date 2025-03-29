import React, { useRef, useEffect, useState } from 'react';

const RouteMap = ({ origin, destination, currentLocation }) => {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: currentLocation || { lat: -34.397, lng: 150.644 },
        zoom: 12,
        disableDefaultUI: true
      });
      setMapInstance(map);

      // Marcar ubicación actual
      if (currentLocation) {
        new window.google.maps.Marker({
          position: currentLocation,
          map: map,
          title: 'Tu ubicación',
          icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          }
        });
      }
    }
  }, [currentLocation]);

  useEffect(() => {
    if (mapInstance && window.google && window.google.maps) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      
      directionsRenderer.setMap(mapInstance);

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          }
        }
      );
    }
  }, [mapInstance, origin, destination]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-64 bg-gray-200 rounded-lg shadow-md"
    />
  );
};

export default RouteMap;