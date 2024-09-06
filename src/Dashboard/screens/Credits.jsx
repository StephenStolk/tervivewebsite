import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Credits = () => {
  const [credits, setCredits] = useState(0);
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({ name: '', address: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`/api/users/${userId}`);
        setUserData(response.data);
        setCredits(response.data.credits);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

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
      navigate('/marketplace'); // Redirect to the marketplace
    } catch (error) {
      console.error('Failed to earn credits:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Credits</h1>
      <p>Your current credits: {credits}</p>
      <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Earn Credits</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border border-gray-300 p-2 rounded w-full mb-4"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="border border-gray-300 p-2 rounded w-full mb-4"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Credits;
