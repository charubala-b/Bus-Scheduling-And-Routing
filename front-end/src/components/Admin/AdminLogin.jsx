import React from 'react';
import { useForm } from 'react-hook-form';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Navigate to the Admin Dashboard after successful login
    navigate('/AdminDashboard');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Admin Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={`form-input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        {/* Phone Number Field */}
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            {...register('phoneNumber', { required: 'Phone number is required' })}
            className={`form-input ${errors.phoneNumber ? 'input-error' : ''}`}
          />
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
        </div>

        {/* Private ID Field */}
        <div className="form-group">
          <label htmlFor="privateId">Private ID</label>
          <input
            type="password"
            name="privateId"
            id="privateId"
            {...register('privateId', { required: 'Private ID is required' })}
            className={`form-input ${errors.privateId ? 'input-error' : ''}`}
          />
          {errors.privateId && <p className="error-message">{errors.privateId.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;