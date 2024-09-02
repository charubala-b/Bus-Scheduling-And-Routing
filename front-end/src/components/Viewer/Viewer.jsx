import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Viewer.css'; // Import the CSS file

const Viewer = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleClick = () => {
    navigate('/search'); // Redirect to the "About" page
  };

  return (
    <div className="viewer-container">
      <div className="viewer-box">
        <h2>Select Your Role</h2>
        <button onClick={handleClick} className="role-option">User</button>
        <button className="role-option">Admin</button>
        <button className="role-option">Government</button>
        <button className="back-button" onClick={handleBack}>Back to Login</button>
      </div>
    </div>
  );
};

export default Viewer;