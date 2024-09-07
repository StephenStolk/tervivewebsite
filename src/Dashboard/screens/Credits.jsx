import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Credits = () => {
  const [credits, setCredits] = useState(10); // Initial credits set to 10
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({ name: '', address: '' });
  const [loadingTime, setLoadingTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`/api/users/${userId}`);
        setUserData(response.data);
        setCredits(response.data.credits || 10); // Set at least 10 credits
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    const currentTime = new Date().toLocaleTimeString();
    setLoadingTime(currentTime);

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      await axios.post('/api/users/update-credits', {
        userId,
        plantCredits: 10,
      });
      alert('Credits earned successfully!');
      navigate('/marketplace');
    } catch (error) {
      console.error('Failed to earn credits:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 text-green-900">Your Credits: {credits}</h1>

      {/* Side-by-side Ticket and Earn Credit */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Ticket Box */}
        <div className="bg-white p-4 border border-gray-300 shadow w-full md:w-1/2">
          <div className="border border-dashed border-gray-500 p-4 relative">
            <div className="absolute top-2 left-4 text-xs text-gray-500">Page Loaded: {loadingTime}</div>
            <h2 className="text-xl font-semibold mb-4 text-center uppercase tracking-wide text-green-900">Johin Japanese Maple</h2>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-semibold">Current Credits:</span>
              <span className="text-green-900 text-xl font-bold">{credits}</span>
            </div>
          </div>
        </div>

        {/* Earn Credits Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 border border-gray-300 shadow w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4 text-green-900">Earn Credits</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-300 p-2 w-full mb-4 text-green-900"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="border border-gray-300 p-2 w-full mb-4 text-green-900"
            required
          />
          <button
            type="submit"
            className="bg-[#8a9d68] text-white py-2 px-4 w-full uppercase font-semibold hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Blockchain Contract Section */}
      <div className="bg-white p-6 border border-gray-300 shadow w-full mb-6">
        <h2 className="text-xl font-bold mb-4 text-green-900">Blockchain-Based Contract</h2>
        <p className="text-gray-600 mb-4">
          This blockchain contract ensures transparency between farmers and merchants by eliminating middlemen. Both parties sign a secure digital contract.
        </p>
        
        <div className="bg-gray-100 p-4 flex items-center mb-6">
          <img
            src="https://img.icons8.com/color/96/contract.png"
            alt="Blockchain Contract"
            className="w-16 h-16 mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg text-green-900">Farmer-Merchant Agreement</h3>
            <p className="text-gray-500">Blockchain-Secured Digital Contract</p>
          </div>
        </div>

        {/* Benefits Section */}
        <h3 className="text-lg font-semibold mb-2 text-green-900">Benefits of the Contract</h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Transparency in Transactions</li>
          <li>Eliminates the Middleman</li>
          <li>Real-time Verification of Transactions</li>
          <li>Secure and Tamper-Proof</li>
        </ul>

        {/* New Cards for Contract Features */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 1: Real-Time Contract Tracking */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Real-Time Contract Tracking</h3>
            <p className="text-gray-600 mb-4">
              Track the status of your contract in real-time, from initiation to completion, ensuring full transparency and accountability.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              Track Contract
            </button>
          </div>

          {/* Card 2: Dispute Resolution */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Dispute Resolution</h3>
            <p className="text-gray-600 mb-4">
              In case of any disputes, our blockchain-based system helps in quickly resolving conflicts, ensuring fairness for both parties.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              Resolve Dispute
            </button>
          </div>

          {/* Card 3: Contract Analytics */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Contract Analytics</h3>
            <p className="text-gray-600 mb-4">
              View analytics for all your past contracts, including completion rates, revenue generated, and more to help you make informed decisions.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              View Analytics
            </button>
          </div>
        </div>

        {/* Additional Feature Cards */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Card 4: Contract Renewal */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Contract Renewal</h3>
            <p className="text-gray-600 mb-4">
              Renew expired contracts easily with just a few clicks, ensuring your partnership continues smoothly.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              Renew Contract
            </button>
          </div>

          {/* Card 5: Marketplace Access with Credits */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Marketplace Access with Credits</h3>
            <p className="text-gray-600 mb-4">
              Use your earned credits to get discounts and special access to our exclusive marketplace for seeds, fertilizers, and more.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              Explore Marketplace
            </button>
          </div>

          {/* Card 6: Partnership Programs */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Partnership Programs</h3>
            <p className="text-gray-600 mb-4">
              Form partnerships with other farmers or merchants to create group contracts with built-in profit-sharing capabilities.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              Join Partnership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
