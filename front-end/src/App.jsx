import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './components/LoginRegister/LoginRegister';
import Viewer from './components/Viewer/Viewer';
import Search from './components/search/Search';
import Schedule from './components/Schedule/Schedule';
import ChangeSchedule from './components/ChangeSchedule/ChangeSchedule'; // Import the ChangeSchedule component
import AttendancePage from './components/AttendancePage/AttendancePage'; // Import the Attendance component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Viewer />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
        <Route path="/search" element={<Search />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/change-schedule" element={<ChangeSchedule />} /> {/* Add route for ChangeSchedule */}
        <Route path="/attendance" element={<AttendancePage />} /> {/* Add route for Attendance */}
      </Routes>
    </Router>
  );
};

export default App;
