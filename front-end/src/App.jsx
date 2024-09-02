import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './components/LoginRegister/LoginRegister'; // Your login component
import Viewer from './components/Viewer/Viewer'; // Viewer component
import Search
 from './components/search/search';// Corrected component name

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Viewer />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
        <Route path="/search" element={<Search />} /> {/* Corrected component name */}
      </Routes>
    </Router>
  );
};

export default App;
