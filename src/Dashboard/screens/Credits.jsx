// CreditsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreditsPage = () => {
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await axios.get('/api/users/profile'); // Adjust endpoint as needed
        if (response.data) {
          setCredits(response.data.credits);
        }
      } catch (error) {
        console.error('Error fetching credits:', error);
      }
    };

    fetchCredits();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Credits</h1>
      <p className="text-lg">You have {credits} credits.</p>
    </div>
  );
};

export default CreditsPage;
