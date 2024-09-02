import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginRegister from './components/LoginRegister/LoginRegister';
import Viewer from './components/Viewer/Viewer';
import Search from './components/search/Search';
import Schedule from './components/Schedule/Schedule';
import ChangeSchedule from './components/ChangeSchedule/ChangeSchedule'; // Import the ChangeSchedule component
import AttendancePage from './components/AttendancePage/AttendancePage'; // Import the Attendance component

import LoginRegister from './components/LoginRegister/LoginRegister'; // Your login component
import Viewer from './components/Viewer/Viewer'; // Viewer component
import BusList from './components/BusList/BusList';
import Search from './components/search/Search';// Corrected component name


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Viewer />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />

        <Route path="/search" element={<Search />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/change-schedule" element={<ChangeSchedule />} /> 
        <Route path="/attendance" element={<AttendancePage />} /> 

        <Route path="/search" element={<Search />} /> 
        <Route path='/BusList' element={<BusList/>}/>

      </Routes>
    </Router>
  );
};

export default App;
