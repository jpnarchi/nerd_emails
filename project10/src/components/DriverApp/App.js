import React, { useState } from 'react';
import DriverRegistration from './DriverRegistration';
import AvailableRides from './AvailableRides';
import RideNavigation from './RideNavigation';

function DriverApp() {
  const [currentView, setCurrentView] = useState('registration');
  const [driverData, setDriverData] = useState(null);
  const [selectedRide, setSelectedRide] = useState(null);

  const handleRegistrationComplete = (data) => {
    setDriverData(data);
    setCurrentView('available');
  };

  const handleAcceptRide = (ride) => {
    setSelectedRide(ride);
    setCurrentView('navigation');
  };

  return (
    <div className="min-h-screen bg-white">
      {currentView === 'registration' && (
        <DriverRegistration 
          onRegistrationComplete={handleRegistrationComplete} 
        />
      )}
      {currentView === 'available' && (
        <AvailableRides onAcceptRide={handleAcceptRide} />
      )}
      {currentView === 'navigation' && selectedRide && (
        <RideNavigation ride={selectedRide} />
      )}
    </div>
  );
}

export default DriverApp;

// DONE