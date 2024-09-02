import React from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css';
import BusList from '../BusList/BusList';

const navigate = useNavigate();
const handleClick = () => {
  navigate('/BusList'); // Redirect to the "About" page
};

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

        <button onClick={handleClick} className="search-button">Search For Bus</button>
      </div>

      
    </div>
  );
}

export default Search;
