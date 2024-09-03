import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import SignupPage from './Signup/Signup';
import DashboardLayout from './Dashboard/Dashboard';
import AqiReport from './Dashboard/screens/AqiReport';         
import Marketplace from './Dashboard/screens/Marketplace';
import HealthReport from './Dashboard/screens/HealthReport';
import Credits from './Dashboard/screens/Credits';              
import Leaderboard from './leaderboard/Leaderboard';  
import Shops from './Dashboard/screens/Shops';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Dashboard Layout with nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="aqi-report" element={<AqiReport />} />         
          <Route path="marketplace" element={<Marketplace />} />      
          <Route path="health-report" element={<HealthReport />} />   
          <Route path="credits" element={<Credits />} />   
          <Route path="shops" element={<Shops />} />            
          <Route path="leaderboard" element={<Leaderboard />} />      
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
