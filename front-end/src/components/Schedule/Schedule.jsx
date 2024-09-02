import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Schedule.css';
import { useNavigate } from 'react-router-dom';


const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [busSchedule, setBusSchedule] = useState([]);
  const navigate = useNavigate();

  const busSchedules = {
    '2024-09-02': [
      'G7 Bus - Scheduled 10 AM to 7 PM',
      'G9 Bus - Scheduled 11 AM to 6 PM',
      'G10 Bus - Scheduled 8 AM to 5 PM',
    ],
    '2024-09-03': [
      'G12 Bus - Scheduled 9 AM to 5 PM',
      'G14 Bus - Scheduled 12 PM to 8 PM',
    ],
    '2024-09-05': [
      'G15 Bus - Scheduled 7 AM to 4 PM',
      'G16 Bus - Scheduled 11 AM to 7 PM',
    ],
    '2024-09-07': [
      'G17 Bus - Scheduled 8 AM to 5 PM',
      'G18 Bus - Scheduled 9 AM to 6 PM',
      'G19 Bus - Scheduled 10 AM to 7 PM',
    ],
    '2024-09-09': [
      'G20 Bus - Scheduled 7 AM to 4 PM',
      'G21 Bus - Scheduled 8 AM to 6 PM',
      'G22 Bus - Scheduled 9 AM to 5 PM',
    ],
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split('T')[0];
    setBusSchedule(busSchedules[formattedDate] || []);
  };

  const handleChangeOptionClick = () => {
    navigate('/change-schedule'); // Navigate to the change schedule page
  };

  const handleAttendanceClick = () => {
    navigate('/attendance'); // Navigate to the attendance page
  };

  return (
    <div className="schedule-container">
      <button className="attendance-button" onClick={handleAttendanceClick}>
        Attendance
      </button>
      <div className="schedule-box">
        <h1>Find Your Bus Schedule Here</h1>
        <div className="schedule-list">
          {busSchedule.length > 0 ? (
            busSchedule.map((schedule, index) => (
              <p key={index}>{schedule}</p>
            ))
          ) : (
            <p className="no-schedule">Oops! No buses are scheduled for this day.</p>
          )}
        </div>
        <button className="change-option" onClick={handleChangeOptionClick}>
          Change Option
        </button>
      </div>
      <div className="calendar">
        <h2>Calendar</h2>
        <Calendar onChange={handleDateChange} />
      </div>
    </div>
  );
};

export default SchedulePage;
