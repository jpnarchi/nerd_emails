import React, { useState } from 'react';
import Header from './Header';
import UserRegistration from './UserRegistration';
import MapSelector from './MapSelector';
import RideOptions from './RideOptions';
import DriverTracking from './DriverTracking';
import CostCalculator from './CostCalculator';
import HomeSection from './HomeSection';
import GoogleMapsLoader from '../GoogleMapsLoader';

function UserApp() {
  const [currentView, setCurrentView] = useState('registration');
  const [userData, setUserData] = useState(null);
  const [rideDetails, setRideDetails] = useState(null);
  const [selectedRide, setSelectedRide] = useState(null);

  const handleRegistrationComplete = (data) => {
    setUserData(data);
    setCurrentView('home');
  };

  const handleLocationSelect = (locations) => {
    setRideDetails(locations);
    setCurrentView('cost');
  };

  const handleRideSelect = (ride) => {
    setSelectedRide(ride);
    setCurrentView('tracking');
  };

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const mockDriver = {
    name: 'Carlos Mendoza',
    motoModel: 'Honda CBR 500R'
  };

  return (
    <GoogleMapsLoader>
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigation} />
        
        <div className="pt-16">
          {currentView === 'registration' && (
            <UserRegistration 
              onRegistrationComplete={handleRegistrationComplete} 
            />
          )}
          
          {currentView === 'home' && (
            <HomeSection onStartRide={() => setCurrentView('location')} />
          )}
          
          {currentView === 'location' && (
            <MapSelector onLocationSelect={handleLocationSelect} />
          )}
          
          {currentView === 'cost' && rideDetails && (
            <>
              <CostCalculator 
                origin={rideDetails.origin}
                destination={rideDetails.destination}
              />
              <RideOptions onSelectRide={handleRideSelect} />
            </>
          )}
          
          {currentView === 'tracking' && (
            <DriverTracking driver={mockDriver} />
          )}
        </div>
      </div>
    </GoogleMapsLoader>
  );
}

export default UserApp;

// DONE