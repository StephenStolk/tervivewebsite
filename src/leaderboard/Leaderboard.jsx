import React, { useState } from 'react';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Leaderboard = () => {
  const [globalData] = useState([
    { name: 'Alice Johnson', country: 'USA', credits: 1500 },
    { name: 'Zhang Wei', country: 'China', credits: 1450 },
    { name: 'Liam Smith', country: 'Canada', credits: 1400 },
    { name: 'Olivia Brown', country: 'UK', credits: 1350 },
    { name: 'Aarav Kumar', country: 'India', credits: 1300 },
  ]);

  const [regionalData] = useState([
    { name: 'John Doe', state: 'California', credits: 900 },
    { name: 'Jane Roe', state: 'New York', credits: 880 },
    { name: 'Jim Beam', state: 'Texas', credits: 870 },
    { name: 'Emma Stone', state: 'Florida', credits: 860 },
    { name: 'Jack Daniels', state: 'Ohio', credits: 850 },
  ]);

  const [activeTab, setActiveTab] = useState('global');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Leaderboard</h1>
      
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab('global')}
          className={`px-6 py-2 flex items-center space-x-2 rounded-t-lg transition-colors duration-300 ${
            activeTab === 'global' 
              ? 'bg-gradient-to-r from-green-400 to-green-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          <FaGlobe />
          <span>Global</span>
        </button>
        <button
          onClick={() => setActiveTab('regional')}
          className={`px-6 py-2 flex items-center space-x-2 rounded-t-lg transition-colors duration-300 ${
            activeTab === 'regional' 
              ? 'bg-gradient-to-r from-green-400 to-green-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          <FaMapMarkerAlt />
          <span>Regional</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {activeTab === 'global' ? (
          <GlobalLeaderboard data={globalData} />
        ) : (
          <RegionalLeaderboard data={regionalData} />
        )}
      </div>
    </div>
  );
};

const GlobalLeaderboard = ({ data }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Global Leaderboard</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
        }}
      >
        {data.map((user, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg shadow-lg text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="text-xl font-semibold mb-2 text-green-700">{user.name}</h3>
            <p className="text-gray-600">{user.country}</p>
            <p className="mt-4 text-lg font-bold text-green-800">{user.credits} Green Credits</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const RegionalLeaderboard = ({ data }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Regional Leaderboard</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
        }}
      >
        {data.map((user, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg shadow-lg text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="text-xl font-semibold mb-2 text-green-700">{user.name}</h3>
            <p className="text-gray-600">{user.state}</p>
            <p className="mt-4 text-lg font-bold text-green-800">{user.credits} Green Credits</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Leaderboard;
