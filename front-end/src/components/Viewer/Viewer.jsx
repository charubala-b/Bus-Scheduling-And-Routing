import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Viewer.css'; // Import the CSS file

const Viewer = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/LoginRegister');
  };

  const handleClick = () => {
    navigate('/search'); // Redirect to the "About" page
  };
  const handleGovernmentClick = () => {
    navigate('/schedule'); // Navigates to the Schedule page
  };
  const handleAdmin=()=>{
    navigate('/Admin');
  };
  

  return (
    <div className="viewer-container">
      <div className="viewer-box">
        <h2 className="charu">Select Your Role</h2>
        <button onClick={handleClick} className="role-option">User</button>
        <button className="role-option" onClick={handleAdmin}>Admin</button>
        <button className="role-option" onClick={handleGovernmentClick}>Government</button>
        <button className="back-button" onClick={handleBack}>Back to Login</button>
      </div>
    </div>
  );
};

export default Viewer;