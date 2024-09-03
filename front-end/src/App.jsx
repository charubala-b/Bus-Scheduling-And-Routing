import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginRegister from './components/LoginRegister/LoginRegister';
import Viewer from './components/Viewer/Viewer';
import Search from './components/search/Search';
import Schedule from './components/Schedule/Schedule';
import ChangeSchedule from './components/ChangeSchedule/ChangeSchedule'; // Import the ChangeSchedule component
import AttendancePage from './components/AttendancePage/AttendancePage'; // Import the Attendance component
 // Viewer component
import BusList from './components/BusList/BusList';
// Corrected component name
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import BusDetails from './components/BusDetails/BusDetails';


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

        <Route path='/Admin' element={<AdminLogin/>}/>

        <Route path='/AdminDashboard' element={<AdminDashboard/>}/>

        <Route path='/BusDetails' element={<BusDetails/>}/>

      </Routes>
    </Router>
  );
};

export default App;
