import React from 'react';
import './App.css';

function BusTracking() {
  return (
    <div className="container">
      <header>
        <div className="menu-icon">☰</div>
        <h1>About Bus</h1>
      </header>

      <div className="bus-summary">
        <div className="bus-time">
          <span className="time">8:00am</span>
          <span className="arrow">→</span>
          <span className="time">8:30am</span>
        </div>
        <div className="bus-route">
          <span className="location">Titarpur</span>
          <span className="location">Meenakshi</span>
        </div>
        <div className="price">₹20/-</div>
      </div>

      <div className="bus-details">
        <div className="live-section">
          <div className="live-indicator">LIVE</div>
          <div className="bus-number">NO : 45</div>
        </div>
        <div className="crowd-info">
          <div className="crowd-status">
            <span>Crowd</span>
            <span>30 out of 50</span>
          </div>
          <div className="remaining-seats">20 Remaining !</div>
        </div>
        <div className="map">
          <img 
            src="https://via.placeholder.com/300x150.png?text=Map" 
            alt="Map" 
            className="map-image"
          />
        </div>
        <button className="tracking-button">Start Tracking</button>
      </div>
      
    </div>
  );
}

export default BusTracking;
