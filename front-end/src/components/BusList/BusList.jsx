import React, { useEffect, useState } from 'react';
import './BusList.css';
import { useNavigate, useLocation } from 'react-router-dom';

function BusList() {
  const navigate = useNavigate();
  const location = useLocation();
  const { from, to } = location.state || {}; // Get "from" and "to" values from state
  const [buses, setBuses] = useState([]); // State to store filtered buses

  // Function to handle navigation to BusTracking
  const handleBack = () => {
    navigate('/BusTracking');
  };

  // Fetch and filter buses based on "from" and "to" values
  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await fetch('https://database-wx46.onrender.com/get-Bus'); // Updated URL to deployed backend
        const data = await response.json();

        if (response.ok) {
          // Filter buses based on "from" and "to" values
          const filteredBuses = data.total.filter(bus => 
            bus.location.from.toLowerCase() === from.toLowerCase() &&
            bus.location.to.toLowerCase() === to.toLowerCase()
          );
          setBuses(filteredBuses);
        } else {
          console.error('Failed to fetch buses:', data.error);
        }
      } catch (error) {
        console.error('Error fetching buses:', error);
      }
    };

    fetchBuses();
  }, [from, to]); // Dependency array ensures this effect runs when "from" or "to" changes

  return (
    <div className="container">
      <header>
        <div className="menu-icon">☰</div>
        <h1>Buses Nearby</h1>
      </header>

      {/* Display filtered buses */}
      <div className="bus-info">
        {buses.length > 0 ? (
          buses.map((bus, index) => (
            <div key={index} className="bus-card" onClick={handleBack}>
              <div className="bus-number">NO : {bus.busNumber}</div>
              <div className="bus-details">
                <span className="time">Start: {bus.location.from}</span>
                <span className="arrow">→</span>
                <span className="time">End: {bus.location.to}</span>
                <span className="destination">Status: {bus.status}</span>
              </div>
              <div className="price">₹{bus.price}/-</div>
            </div>
          ))
        ) : (
          <p>No buses found for the selected route.</p>
        )}
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
