import React, { useState } from 'react';
import './ChangeSchedule.css'; // Import your CSS file

const ChangeSchedule = () => {
  const [busNumber, setBusNumber] = useState('');
  const [driverName, setDriverName] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle schedule update (e.g., API call)
    setNotification('Changes updated successfully!');

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification('');
    }, 3000); // 3 seconds
  };

  return (
    <div className="change-schedule-container">
      <div className="change-schedule-box">
        <h1>Change Bus Schedule</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Bus Number:</label>
            <input
              type="text"
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Driver Name:</label>
            <input
              type="text"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Schedule Time:</label>
            <input
              type="time"
              value={scheduleTime}
              onChange={(e) => setScheduleTime(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="update-button">
            Update
          </button>
        </form>
      </div>

      {/* Notification Pop-up */}
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
};

export default ChangeSchedule;
