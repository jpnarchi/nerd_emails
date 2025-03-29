import React, { useState, useEffect } from 'react';

const CostCalculator = ({ origin, destination }) => {
  const [distance, setDistance] = useState(null);
  const [estimatedCost, setEstimatedCost] = useState(null);

  // Tarifas base
  const BASE_FARE = 2.50;  // Tarifa inicial
  const RATE_PER_KM = 1.20; // Precio por kilómetro
  const MINIMUM_FARE = 4.00; // Tarifa mínima

  useEffect(() => {
    if (window.google && window.google.maps) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (response, status) => {
          if (status === 'OK') {
            const route = response.routes[0];
            const leg = route.legs[0];
            const distanceInKm = leg.distance.value / 1000; // Convertir metros a kilómetros

            // Cálculo de tarifa
            const calculatedCost = Math.max(
              MINIMUM_FARE, 
              BASE_FARE + (distanceInKm * RATE_PER_KM)
            );

            setDistance(distanceInKm.toFixed(2));
            setEstimatedCost(calculatedCost.toFixed(2));
          }
        }
      );
    }
  }, [origin, destination]);

  if (!distance || !estimatedCost) {
    return (
      <div className="p-4 bg-gray-100 text-center">
        Calculando distancia y tarifa...
      </div>
    );
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Detalles del Viaje</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Distancia:</p>
          <p className="font-bold">{distance} km</p>
        </div>
        <div>
          <p className="text-gray-600">Costo Estimado:</p>
          <p className="font-bold text-green-600 text-xl">
            ${estimatedCost}
          </p>
        </div>
        <div className="col-span-2 mt-4">
          <div className="bg-blue-100 p-3 rounded-lg text-center">
            <p className="text-sm text-blue-800">
              Tarifa incluye: Tarifa base + Distancia recorrida
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;