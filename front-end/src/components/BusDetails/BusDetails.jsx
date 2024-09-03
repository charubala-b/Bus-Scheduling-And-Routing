import React from 'react';
import './BusDetails.css';
import { useLocation } from 'react-router-dom';
import img from './map.jpg';

function BusDetails() {
  const location = useLocation();
  const { bus } = location.state || {}; // Get the selected bus details from state

  const handleStartTracking = () => {
    // Logic to start live tracking the bus
    console.log('Starting live tracking for bus:', bus.busNumber);
  };

  const handleQRCodeScan = () => {
    // Logic to open the QR scanner and purchase a ticket
    console.log('Opening QR scanner for bus:', bus.busNumber);
  };

  return (
    <div className="container">
      <header>
        <div className="menu-icon">☰</div>
        <h1>About Bus</h1>
      </header>

      <div className="bus-summary">
        <div className="bus-timing">
          {bus.location.from} → {bus.location.to}
        </div>
        <div className="bus-price">₹{bus.price}/-</div>
      </div>

      <div className="bus-live-info">
        <div className="live-status">
          <div className="live-icon">LIVE</div>
          <div className="bus-number">NO : {bus.busNumber}</div>
        </div>
        <div className="crowd-info">
          <div className="crowd-count">Crowd: {bus.crowd} out of 50</div>
          <div className="remaining-seats">{bus.remainingSeats} Remaining!</div>
        </div>
        <div className="bus-map">
          {/* Include a map here or an image of the route */}
          <a href='https://maps.app.goo.gl/juLZK1UUA5ihsBFP8'><img src={img} alt="Bus route map" className='mapimg' /></a>
        </div>
      </div>
    </div>
  );
}

export default BusDetails;
