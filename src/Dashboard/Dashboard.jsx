import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaRegUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userInitials, setUserInitials] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to extract initials
  const getInitials = (name) => {
    const initials = name
      .split(' ')
      .map(word => word[0].toUpperCase())
      .join('');
    return initials;
  };

  // Retrieve the user name from localStorage when the component mounts
  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      setUserInitials(getInitials(userName));
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#8a9d68] text-white p-4 space-y-4 transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:transform-none`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Tervive</h1>
          <button 
            className="block md:hidden text-xl"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul>
          <li>
            <Link to="aqi-report" className="block py-2 px-4 rounded hover:bg-green-800">AQI Report</Link>
          </li>
          <li>
            <Link to="health-report" className="block py-2 px-4 rounded hover:bg-green-800">Health Report</Link>
          </li>
          <li>
            <Link to="marketplace" className="block py-2 px-4 rounded hover:bg-green-800">Marketplace</Link>
          </li>
          <li>
            <Link to="credits" className="block py-2 px-4 rounded hover:bg-green-800">Credits</Link>
          </li>
          <li>
            <Link to="shops" className="block py-2 px-4 rounded hover:bg-green-800">Nearby Shops</Link>
          </li>
          <li>
            <Link to="leaderboard" className="block py-2 px-4 rounded hover:bg-green-800">Leaderboard</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
        {/* Header */}
        <header className="bg-[#8a9d68] text-white flex items-center p-4 fixed top-0 left-0 right-0 z-20">
          <div className="flex items-center space-x-2 ml-auto">
            <FaRegUserCircle className="text-xl" />
            <span>{userInitials || 'User'}</span> {/* Dynamic initials or fallback */}
          </div>
          <button 
            className="md:hidden ml-4 text-xl"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 pt-16 overflow-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
