import React, { useEffect, useState } from 'react';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  const [busData, setBusData] = useState([]);
  const [driverData, setDriverData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await fetch('https://database-wx46.onrender.com/get-Bus');
        if (response.ok) {
          const data = await response.json();
          setBusData(data.total);
        } else {
          setError('Failed to fetch bus details');
        }
      } catch (err) {
        setError('Error occurred while fetching bus details');
      }
    };

    const fetchDriverData = async () => {
      try {
        const response = await fetch('https://database-wx46.onrender.com/get-Driver');
        if (response.ok) {
          const data = await response.json();
          setDriverData(data.total);
        } else {
          setError('Failed to fetch driver details');
        }
      } catch (err) {
        setError('Error occurred while fetching driver details');
      }
    };

    fetchBusData();
    fetchDriverData();
  }, []);

  return (
    <div className="table-container">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="table-wrapper">
            <h1>Bus Details</h1>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Bus Number</th>
                  <th>Capacity</th>
                  <th>Status</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Last Updated</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {busData.map((bus, index) => (
                  <tr key={index}>
                    <td>{bus.busNumber}</td>
                    <td>{bus.capacity}</td>
                    <td>{bus.status}</td>
                    <td>{bus.location.from}</td>
                    <td>{bus.location.to}</td>
                    <td>{new Date(bus.lastUpdated).toLocaleString()}</td>
                    <td>{bus.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-wrapper">
            <h1>Driver Details</h1>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Driver ID</th>
                  <th>Name</th>
                  <th>License Number</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {driverData.map((driver, index) => (
                  <tr key={index}>
                    <td>{driver.driverId}</td>
                    <td>{driver.name}</td>
                    <td>{driver.licenseNumber}</td>
                    <td>{driver.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;