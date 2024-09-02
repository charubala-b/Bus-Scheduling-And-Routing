import React from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css';

function Search() {
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
          <input type="text" id="from" placeholder="" />
        </div>

        <div className="form-group">
          <label htmlFor="to">To</label>
          <input type="text" id="to" placeholder="" />
        </div>

        <button className="search-button">Search For Bus</button>
      </div>

      <footer>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/8d/School_bus.jpg" 
          alt="Bus" 
          className="bus-image"
        />
      </footer>
    </div>
  );
}

export default Search;
