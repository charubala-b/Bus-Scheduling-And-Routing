import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css';

function Search() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to BusList and send 'from' and 'to' values
    navigate('/BusList', { state: { from, to } });
  };

  return (
    <div className="container">
      <header>
        <div className="home-icon">🏠</div>
        <h1>Home</h1>
      </header>

      <div className="content">
        <h2>View the upcoming buses earlier easily !!</h2>
        
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input 
            type="text" 
            id="from" 
            value={from} 
            onChange={(e) => setFrom(e.target.value)} 
            placeholder="Enter starting point" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="to">To</label>
          <input 
            type="text" 
            id="to" 
            value={to} 
            onChange={(e) => setTo(e.target.value)} 
            placeholder="Enter destination" 
          />
        </div>

        <button onClick={handleClick} className="search-button">Search For Bus</button>
      </div>
    </div>
  );
}

export default Search;
