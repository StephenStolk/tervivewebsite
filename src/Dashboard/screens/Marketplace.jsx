import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import User from '../../../../backend/models/User';

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
            key: 'sk-9GCZ66d7038005a326710',
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

  const handleBuyClick = (plant) => {
    setSelectedPlant(plant);
    setQuantity(1);
    setCredits(quantity*10);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlant(null);
  };

  

// async function fetchUserDetails() {
//   try {
//     const response = await axios.get(`/api/users/${userId}`);
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching user details:', error);
//   }
// };


  const handleBuyOut = async () => {
    const pricePerUnit = (Math.random() * 100).toFixed(2);
    const totalPrice = (pricePerUnit * quantity).toFixed(2);
  
    alert(`You have purchased ${quantity} ${selectedPlant.common_name}(s) for $${totalPrice} USD`);
  
    // Deduct credits for the purchase (assumed 10 credits per purchase)
    // const plantCredits = 10;
    
    // fetchUserDetails();
    // try {
    //   const response = await axios.post('/api/users/update-credits', {
    //     userId: 'USER_ID_HERE', 
    //     purchasedPlant: selectedPlant.common_name,
    //     plantCredits,
    //   });
  
    //   // On success, navigate to credits page
    //   if (response.status === 200) {
    //     navigate('/credits'); // Assuming 'credits' is the route for credits page
    //   }
    // } catch (error) {
    //   console.error('Failed to update credits:', error);
    // }
  
    closeModal();
  };
  

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Two Stylish Cards for Farming Commodities and Plants */}
      <div className="flex flex-col md:flex-row justify-around mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4 md:mb-0 w-full md:w-5/12">
          <h2 className="text-2xl font-bold mb-2">Farming Commodities</h2>
          <p>Explore a wide range of farming commodities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-5/12">
          <h2 className="text-2xl font-bold mb-2">Plants</h2>
          <p>Find various plants for your garden or farm.</p>
        </div>
      </div>

      {/* Plant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {displayedPlants.map((plant) => (
          <div key={plant.id} className="bg-white p-4 rounded-lg shadow-lg">
            {plant.default_image && plant.default_image.thumbnail ? (
              <img
                src={plant.default_image.thumbnail}
                alt={plant.common_name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md mb-4">
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
            <button
              onClick={() => handleBuyClick(plant)}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 mb-0"
            >
              Buy
            </button>
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
              className="border p-2 rounded w-full"
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
              className="border p-2 rounded w-full"
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
              className="border p-2 rounded w-full"
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
              className="border p-2 rounded w-full"
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
              className="border p-2 rounded w-full"
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
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 "
          >
            More
          </button>
        </div>
      )}

      {/* Checkout Modal */}
      {showModal && selectedPlant && (
       
       <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
         <h2 className="text-2xl font-bold mb-4">Checkout</h2>
         <div className="mb-4">
           <strong>Plant:</strong> {selectedPlant.common_name}
         </div>
         <div className="mb-4">
           <strong>Price per unit:</strong> ${(Math.random() * 100).toFixed(2)}
         </div>
         <div className="mb-4">
           <label htmlFor="quantity" className="block mb-2 text-sm font-medium">Quantity</label>
           <input
             type="number"
             id="quantity"
             name="quantity"
             value={quantity}
             onChange={handleQuantityChange}
             min="1"
             className="border p-2 rounded w-full"
           />
         </div>
         <div className="mb-4">
           <strong>Total:</strong> ${(quantity * (Math.random() * 100)).toFixed(2)}
         </div>
         <div className="flex justify-end">
           <button
             onClick={closeModal}
             className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-600"
           >
             Cancel
           </button>
           <button
             onClick={handleBuyOut}
             className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
           >
             Buy
           </button>
         </div>
       </div>
     </div>
   )}
 </div>
);
};

export default Marketplace;
