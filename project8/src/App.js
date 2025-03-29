import React, { useState } from 'react';
import Header from './components/Header';
import MapSelector from './components/MapSelector';
import RouteMap from './components/RouteMap';
import RideOptions from './components/RideOptions';
import DriverTracking from './components/DriverTracking';
import GoogleMapsLoader from './components/GoogleMapsLoader';
import LocationPermissionModal from './components/LocationPermissionModal';

function App() {
  const [currentView, setCurrentView] = useState('location');
  const [rideDetails, setRideDetails] = useState(null);
  const [selectedRide, setSelectedRide] = useState(null);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const handleLocationSelect = (locations) => {
    setRideDetails(locations);
    setCurrentView('map');
  };

  const handleRideSelect = (ride) => {
    setSelectedRide(ride);
    setCurrentView('tracking');
  };

  const mockDriver = {
    name: 'Carlos Mendoza',
    motoModel: 'Honda CBR 500R'
  };

  return (
    <GoogleMapsLoader>
      <div className="min-h-screen bg-white">
        {showLocationModal && (
          <LocationPermissionModal 
            onAllow={() => setShowLocationModal(false)}
            onDeny={() => setShowLocationModal(false)}
          />
        )}
        <Header />
        {currentView === 'location' && (
          <MapSelector onLocationSelect={handleLocationSelect} />
        )}
        {currentView === 'map' && rideDetails && (
          <>
            <RouteMap 
              origin={rideDetails.origin} 
              destination={rideDetails.destination}
              currentLocation={rideDetails.currentLocation}
            />
            <RideOptions onSelectRide={handleRideSelect} />
          </>
        )}
        {currentView === 'tracking' && (
          <DriverTracking driver={mockDriver} />
        )}
      </div>
    </GoogleMapsLoader>
  );
}

export default App;

// DONE