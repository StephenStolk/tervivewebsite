import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Marketplace = () => {
  const navigate = useNavigate();
  const [plants, setPlants] = useState([]);
  const [displayedPlants, setDisplayedPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    edible: null,
    poisonous: null,
    cycle: '',
    watering: '',
    sunlight: '',
    indoor: null,
  });
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [credits, setCredits] = useState(0);
  const plantsPerPage = 10;

  useEffect(() => {
    async function fetchPlants() {
      try {
        const { edible, poisonous, cycle, watering, sunlight, indoor } = filters;
        const response = await axios.get(`https://perenual.com/api/species-list`, {
          params: {
            key: 'sk-RQmk66dbeb376c7216761',
            edible: edible ? 1 : null,
            poisonous: poisonous ? 1 : null,
            cycle: cycle || null,
            watering: watering || null,
            sunlight: sunlight || null,
            indoor: indoor ? 1 : null,
          },
        });
        if (response.data && response.data.data) {
          setPlants(response.data.data);
          setDisplayedPlants(response.data.data.slice(0, plantsPerPage));
        } else {
          console.error('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchPlants();
  }, [filters]);

  const loadMorePlants = () => {
    const nextPage = currentPage + 1;
    const newPlants = plants.slice(0, nextPage * plantsPerPage);
    setDisplayedPlants(newPlants);
    setCurrentPage(nextPage);
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // const handleBuyClick = (plant) => {
  //   setSelectedPlant(plant);
  //   setQuantity(1);
  //   setCredits(quantity * 10);
  //   setShowModal(true);
  // };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlant(null);
  };

  // const handleBuyOut = async () => {
  //   try {
  //     const pricePerUnit = (Math.random() * 100).toFixed(2);
  //     const totalPrice = (pricePerUnit * quantity).toFixed(2);

  //     // Create purchase request to the backend
  //     const purchaseData = {
  //       plantType: selectedPlant.common_name,
  //       quantity,
  //       initialLocation: {
  //         lat: 0, // Set to user's actual location in production
  //         lon: 0, // Set to user's actual location in production
  //       },
  //       initialImage: 'sample-image-url', // Replace with actual image data
  //     };

  //     const response = await axios.post('/api/purchases/create', purchaseData);
  //     if (response.status === 201) {
  //       // Purchase created successfully, redirect to credits page
  //       navigate('/dashboard/credits', {
  //         state: {
  //           plantName: selectedPlant.common_name,
  //           quantity,
  //           credits: response.data.currentCredits, // Use the credits returned by the API
  //           timestamp: new Date().toLocaleTimeString(),
  //         },
  //       });
  //     } else {
  //       console.error('Failed to create purchase:', response.status);
  //     }
      
  //     closeModal();
  //   } catch (error) {
  //     console.error('Error creating purchase:', error);
  //   }
  // };

  // Modified handleBuyClick in Marketplace.jsx
const handleBuyClick = (plant) => {
  setSelectedPlant(plant);
  setQuantity(1);
  setCredits(quantity * 10); // Assuming 10 credits per plant
  setShowModal(true);
};

// Modified handleBuyOut in Marketplace.jsx
const handleBuyOut = async () => {
  const totalCredits = quantity * 10; // Assuming each plant gives 10 credits
  const timestamp = new Date().toLocaleTimeString();

  // Redirect to Credits page with plant data and quantity
  navigate('/dashboard/credits', {
    state: {
      plantName: selectedPlant.common_name,
      quantity,
      credits: totalCredits,
      timestamp,
    },
  });
  
  closeModal();
};

//original above

// const handleBuyO = async (plantId, plantName, quantity, totalPrice) => {
//   const token = localStorage.getItem('authToken');

//   const response = await fetch('/api/purchases/create', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       plantId,
//       plantName,
//       quantity,
//       totalPrice,
//     }),
//   });

//   const data = await response.json();

//   if (response.ok) {
//     console.log('Purchase successful:', data);
//     // Redirect to the credits page or update the UI as needed
//   } else {
//     console.error('Error during purchase:', data.message);
//   }
// };


  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Two Stylish Cards for Farming Commodities and Plants */}
      <div className="flex flex-col md:flex-row justify-around mb-8">
        <div className="bg-white p-6 shadow-lg mb-4 md:mb-0 w-full md:w-5/12">
          <h2 className="text-2xl font-bold mb-2">Farming Commodities</h2>
          <p>Explore a wide range of farming commodities.</p>
        </div>
        <div className="bg-white p-6 shadow-lg w-full md:w-5/12">
          <h2 className="text-2xl font-bold mb-2">Plants</h2>
          <p>Find various plants for your garden or farm.</p>
        </div>
      </div>

      {/* Plant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {displayedPlants.map((plant) => (
          <div key={plant.id} className="bg-white p-4 shadow-lg flex flex-col h-full">
            {plant.default_image && plant.default_image.thumbnail ? (
              <img
                src={plant.default_image.thumbnail}
                alt={plant.common_name}
                className="w-full h-40 object-cover mb-4"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-gray-600 text-center">{plant.common_name}</span>
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{plant.common_name}</h3>
            <p className="text-gray-700 mb-2">
              <strong>Scientific Name:</strong> {plant.scientific_name.join(', ')}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Cycle:</strong> {plant.cycle}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Watering:</strong> {plant.watering}
            </p>
            <div className="mt-auto">
              <button
                onClick={() => handleBuyClick(plant)}
                className="w-full bg-green-600 text-white py-2 px-4 hover:bg-green-700"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Options */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Edible</label>
            <select
              name="edible"
              onChange={handleFilterChange}
              className="border p-2 w-full"
            >
              <option value="">Any</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Poisonous</label>
            <select
              name="poisonous"
              onChange={handleFilterChange}
              className="border p-2 w-full"
            >
              <option value="">Any</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Cycle</label>
            <select
              name="cycle"
              onChange={handleFilterChange}
              className="border p-2 w-full"
            >
              <option value="">Any</option>
              <option value="perennial">Perennial</option>
              <option value="annual">Annual</option>
              <option value="biennial">Biennial</option>
              <option value="biannual">Biannual</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Watering</label>
            <select
              name="watering"
              onChange={handleFilterChange}
              className="border p-2 w-full"
            >
              <option value="">Any</option>
              <option value="frequent">Frequent</option>
              <option value="average">Average</option>
              <option value="minimum">Minimum</option>
              <option value="none">None</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Sunlight</label>
            <select
              name="sunlight"
              onChange={handleFilterChange}
              className="border p-2 w-full"
            >
              <option value="">Any</option>
              <option value="full_shade">Full Shade</option>
              <option value="part_shade">Part Shade</option>
              <option value="sun-part_shade">Sun/Part Shade</option>
              <option value="full_sun">Full Sun</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Indoor</label>
            <input
              type="checkbox"
              name="indoor"
              onChange={handleFilterChange}
              className="mr-2"
            />
            Indoor
          </div>
        </div>
      </div>

      {/* Load More Button */}
      {displayedPlants.length < plants.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMorePlants}
            className="bg-green-600 text-white py-2 px-4 hover:bg-green-700"
          >
            Load More Plants
          </button>
        </div>
      )}

      {/* Buy Modal */}
      {showModal && selectedPlant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">{selectedPlant.common_name}</h2>
            <p className="mb-4">Enter the quantity you want to buy:</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="border p-2 mb-4 w-full"
            />
            <button
              onClick={handleBuyOut}
              className="w-full bg-green-600 text-white py-2 px-4 hover:bg-green-700"
            >
              Buy Now
            </button>
            <button
              onClick={closeModal}
              className="w-full bg-red-600 text-white py-2 px-4 mt-4 hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;

