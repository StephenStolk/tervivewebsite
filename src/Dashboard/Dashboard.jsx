import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaRegUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Tervive</h1>
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon */}
          <button 
            className="block md:hidden text-xl"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="flex items-center space-x-2">
            <FaRegUserCircle className="text-xl" />
            <span>JD</span> {/* Replace with dynamic initials */}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1">
        {/* Side Panel */}
        <nav
          className={`fixed inset-y-0 left-0 z-30 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-64 bg-green-700 text-white p-4 space-y-4 transition-transform duration-200 ease-in-out`}
        >
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
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
