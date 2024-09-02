import React from 'react';
import './BusList.css';
import BusTracking from '../BusTracking/BusTracking';

const navigate = useNavigate();

const handleBack = () => {
  navigate('/BusTracking');
};

function BusList() {
  return (
    <div className="container">
      <header>
        <div className="menu-icon">☰</div>
        <h1>Buses Nearby</h1>
      </header>

      <div className="route-info">
        <div className="route">
          <span className="start-location">Titarpur</span> 
          <span className="arrow">→</span>
          <span className="end-location">Meenakshi Garden</span>
        </div>
        <div className="city-info">
          <span>Delhi</span> → <span>Delhi</span>
        </div>
        <div className="date">Thursday 28-08-2024</div>
      </div>

      <div className="bus-info">
        <div className="bus-card">
          <div className="bus-number">NO : 35</div>
          <div className="bus-details">
            <span className="time">8:00am</span>
            <span className="arrow">→</span>
            <span className="time">8:30am</span>
            <span className="destination">Meenakshi</span>
          </div>
          <div className="price">₹20/-</div>
        </div>

        <div onClick={handleBack} className="bus-card">
          <div className="bus-number">NO : 45</div>
          <div className="bus-details">
            <span className="time">8:10am</span>
            <span className="arrow">→</span>
            <span className="time">8:45am</span>
            <span className="destination">Via Meenakshi → Rajouri</span>
          </div>
          <div className="price">₹25/-</div>
        </div>

        <div onClick={handleBack} className="bus-card">
          <div className="bus-number">NO : 50</div>
          <div className="bus-details">
            <span className="time">8:40am</span>
            <span className="arrow">→</span>
            <span className="time">9:10am</span>
            <span className="destination">Rajouri</span>
          </div>
          <div className="price">₹50/-</div>
        </div>
      </div>

      <footer>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/8d/School_bus.jpg" 
          alt="Bus"
          className="bus-image"
        />
        <div className="clock-icon">🕒</div>
      </footer>
    </div>
  );
}

export default BusList;
