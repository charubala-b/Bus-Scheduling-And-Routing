import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttendancePage.css'; // Make sure to create this CSS file

const AttendancePage = () => {
  const [hasCameraAccess, setHasCameraAccess] = useState(false);
  const [isTakingPicture, setIsTakingPicture] = useState(false);
  const [pictureTaken, setPictureTaken] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Schedule');
  };

  const handleCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setHasCameraAccess(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleTakePicture = () => {
    setIsTakingPicture(true);
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      setPictureTaken(true);
    }
  };

  const handleDoneClick = () => {
    alert('Your daily attendance is marked.');
    setPictureTaken(false);
    setIsTakingPicture(false);
  };

  React.useEffect(() => {
    handleCameraAccess();
  }, []);

  return (
    <div className="attendance-page">
    <button className="Back-button" onClick={handleBackClick}>
      Back to Schedule
    </button>
    <div className="attendance-container">
      <h1>Give Your Attendance Today!</h1>
      <div className="camera-container">
        <video ref={videoRef} autoPlay></video>
        {isTakingPicture && <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>}
        {!pictureTaken && <button className="take-picture-button" onClick={handleTakePicture}>Take Picture</button>}
        {pictureTaken && <button className="done-button" onClick={handleDoneClick}>Done</button>}
      </div>
    </div>
  </div>
);
};
 

export default AttendancePage;
