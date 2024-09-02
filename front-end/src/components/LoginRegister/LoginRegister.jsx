import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const LoginRegister = () => {
  const [action, setAction] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  };

  const handleLogin = (e) => {
    e.preventDefault();  // Prevent the form from refreshing the page
    // Here, you could add your login validation logic if needed
    navigate('/viewer');  // Navigate to the Viewer page after login
  };

  return (
    <div className={`Wrapper${action}`}>
      <div className="form-box login">
        <form onSubmit={handleLogin}> {/* Trigger handleLogin on form submit */}
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button> {/* Button will submit the form */}
          <div className="register-link">
            <p>Don't have an account? <a href="#" onClick={registerLink}> Register</a></p>
          </div>
        </form>
      </div>
      <div className="form-box register">
        <form>
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="number" placeholder='Phone number' required />
            <FaPhone className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> I agree to the terms & conditions</label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>Already have an account? <a href="#" onClick={loginLink}> Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;