import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaRegUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userInitials, setUserInitials] = useState('');
  const location = useLocation();

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
            <Link to="aqi-report" className="block py-2 px-4 rounded hover:bg-green-900 mt-12">AQI Report</Link>
          </li>
          <li>
            <Link to="plantrecommend" className="block py-2 px-4 rounded hover:bg-green-800">Plant Recommend</Link>
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
            <Link to="verification" className="block py-2 px-4 rounded hover:bg-green-800">Verify Credits</Link>
          </li>
          <li>
            <Link to="shops" className="block py-2 px-4 rounded hover:bg-green-800">Nearby Shops</Link>
          </li>
          <li>
            <Link to="leaderboard" className="block py-2 px-4 rounded hover:bg-green-800">Leaderboard</Link>
          </li>
          <li>
            <Link to="community" className="block py-2 px-4 rounded hover:bg-green-800">Community</Link>
          </li>
          <li>
            <Link to="faq" className="block py-2 px-4 rounded hover:bg-green-800">Plant FAQ</Link>
          </li>
          <li>
            <Link to="ourproducts" className="block py-2 px-4 rounded hover:bg-green-800">Our Products</Link>
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
          {/* Default content when no route is selected */}
          {location.pathname === '/' ? (
            <div className="space-y-6">
              {/* Campaign Section */}
              <section className="bg-white p-6 shadow rounded-md">
                <h2 className="text-2xl font-semibold mb-4">Ongoing Campaigns</h2>
                <p className="text-gray-600">
                  We are actively working on health and pollution awareness campaigns, sustainable agriculture, and environmental conservation initiatives. Join us in making a difference!
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src="https://source.unsplash.com/800x400/?environment" alt="Environment" className="rounded-md shadow-md" />
                  <img src="https://source.unsplash.com/800x400/?pollution" alt="Pollution" className="rounded-md shadow-md" />
                </div>
              </section>

              {/* Statistics Section */}
              <section className="bg-white p-6 shadow rounded-md">
                <h2 className="text-2xl font-semibold mb-4">Related Statistics</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Over 9 million deaths annually due to air pollution.</li>
                  <li>Pollution costs the global economy $2.9 trillion annually.</li>
                  <li>By 2050, agriculture will need to produce 60% more food to feed the global population.</li>
                  <li>More than 40% of Earth's land is degraded, impacting 3.2 billion people.</li>
                </ul>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src="https://source.unsplash.com/800x400/?agriculture" alt="Agriculture" className="rounded-md shadow-md" />
                  <img src="https://source.unsplash.com/800x400/?health" alt="Health" className="rounded-md shadow-md" />
                </div>
              </section>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
