import React, { useState, useEffect } from 'react';

const RideNavigation = ({ ride }) => {
  const [currentStatus, setCurrentStatus] = useState('picking');
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    // Simular tiempo de viaje
    const totalTime = 15 * 60; // 15 minutos en segundos
    setRemainingTime(totalTime);

    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setCurrentStatus('completed');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const statusMessages = {
    picking: 'Dirigiéndome al punto de recogida',
    riding: 'Viaje en progreso',
    completed: 'Viaje finalizado'
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4">Navegación de Viaje</h2>
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="font-bold">Origen:</span>
            <span>{ride.origin}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-bold">Destino:</span>
            <span>{ride.destination}</span>
          </div>
        </div>
        <div className="bg-blue-500 text-white p-3 rounded-lg text-center mb-4">
          {statusMessages[currentStatus]}
        </div>
        <div className="text-center">
          <span className="text-2xl font-bold">
            {formatTime(remainingTime)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RideNavigation;