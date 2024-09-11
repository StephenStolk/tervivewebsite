// // Marketplace.jsx

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Marketplace = () => {
//   const navigate = useNavigate();
//   const [plants, setPlants] = useState([]);
//   const [displayedPlants, setDisplayedPlants] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     edible: null,
//     poisonous: null,
//     cycle: '',
//     watering: '',
//     sunlight: '',
//     indoor: null,
//   });
//   const [selectedPlant, setSelectedPlant] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [showModal, setShowModal] = useState(false);
//   const [purchases, setPurchases] = useState([]); // Store multiple purchases
//   const plantsPerPage = 10;

//   // Fetch previously stored purchases from localStorage when the component mounts
//   useEffect(() => {
//     const storedPurchases = JSON.parse(localStorage.getItem('purchases')) || [];
//     setPurchases(storedPurchases);
//   }, []);

//   useEffect(() => {
//     async function fetchPlants() {
//       try {
//         const { edible, poisonous, cycle, watering, sunlight, indoor } = filters;
        
//         // Constructing parameters dynamically to avoid null values
//         const params = {
//           key: 'sk-aiDp66e12bc0bd6b76761',
//           ...(edible !== null && { edible: edible ? 1 : 0 }),
//           ...(poisonous !== null && { poisonous: poisonous ? 1 : 0 }),
//           ...(cycle && { cycle }),
//           ...(watering && { watering }),
//           ...(sunlight && { sunlight }),
//           ...(indoor !== null && { indoor: indoor ? 1 : 0 }),
//         };

//         console.log("Requesting with parameters: ", params); // Debugging request

//         const response = await axios.get(`https://perenual.com/api/species-list`, { params });

//         if (response.data && response.data.data) {
//           setPlants(response.data.data);
//           setDisplayedPlants(response.data.data.slice(0, plantsPerPage));
//         } else {
//           console.error('Unexpected API response format', response);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error.response ? error.response.data : error.message);
//       }
//     }

//     fetchPlants();
//   }, [filters]);

//   const loadMorePlants = () => {
//     const nextPage = currentPage + 1;
//     const newPlants = plants.slice(0, nextPage * plantsPerPage);
//     setDisplayedPlants(newPlants);
//     setCurrentPage(nextPage);
//   };

//   const handleFilterChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleBuyClick = (plant) => {
//     setSelectedPlant(plant);
//     setQuantity(1);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedPlant(null);
//   };

//   const handleBuyOut = () => {
//     const totalCredits = quantity * 10;
//     const timestamp = new Date().toLocaleTimeString();

//     const newPurchase = {
//       plantName: selectedPlant.common_name,
//       quantity,
//       credits: totalCredits,
//       timestamp,
//     };

//     // Add the new purchase to the existing purchases array
//     const updatedPurchases = [...purchases, newPurchase];
//     setPurchases(updatedPurchases);

//     // Store the updated purchases array in localStorage
//     localStorage.setItem('purchases', JSON.stringify(updatedPurchases));

//     // Redirect to the credits page with all purchases
//     navigate('/dashboard/credits', {
//       state: { purchases: updatedPurchases },
//     });

//     closeModal();
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Two Stylish Cards for Farming Commodities and Plants */}
//       <div className="flex flex-col md:flex-row justify-around mb-8">
//         <div className="bg-white p-6 shadow-lg mb-4 md:mb-0 w-full md:w-5/12">
//           <h2 className="text-2xl font-bold mb-2">Farming Commodities</h2>
//           <p>Explore a wide range of farming commodities.</p>
//         </div>
//         <div className="bg-white p-6 shadow-lg w-full md:w-5/12">
//           <h2 className="text-2xl font-bold mb-2">Plants</h2>
//           <p>Find various plants for your garden or farm.</p>
//         </div>
//       </div>

//       {/* Plant Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//         {displayedPlants.map((plant) => (
//           <div key={plant.id} className="bg-white p-4 shadow-lg flex flex-col h-full">
//             {plant.default_image && plant.default_image.thumbnail ? (
//               <img
//                 src={plant.default_image.thumbnail}
//                 alt={plant.common_name}
//                 className="w-full h-40 object-cover mb-4"
//               />
//             ) : (
//               <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-4">
//                 <span className="text-gray-600 text-center">{plant.common_name}</span>
//               </div>
//             )}
//             <h3 className="text-xl font-bold mb-2">{plant.common_name}</h3>
//             <p className="text-gray-700 mb-2">
//               <strong>Scientific Name:</strong> {plant.scientific_name.join(', ')}
//             </p>
//             <p className="text-gray-700 mb-2">
//               <strong>Cycle:</strong> {plant.cycle}
//             </p>
//             <p className="text-gray-700 mb-2">
//               <strong>Watering:</strong> {plant.watering}
//             </p>
//             <div className="mt-auto">
//               <button
//                 onClick={() => handleBuyClick(plant)}
//                 className="w-full bg-green-600 text-white py-2 px-4 hover:bg-green-700"
//               >
//                 Buy
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Filter Options */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Filters</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div>
//             <label className="block mb-2 text-sm font-medium">Edible</label>
//             <select
//               name="edible"
//               onChange={handleFilterChange}
//               className="border p-2 w-full"
//             >
//               <option value="">Any</option>
//               <option value="true">Yes</option>
//               <option value="false">No</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium">Poisonous</label>
//             <select
//               name="poisonous"
//               onChange={handleFilterChange}
//               className="border p-2 w-full"
//             >
//               <option value="">Any</option>
//               <option value="true">Yes</option>
//               <option value="false">No</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium">Cycle</label>
//             <select
//               name="cycle"
//               onChange={handleFilterChange}
//               className="border p-2 w-full"
//             >
//               <option value="">Any</option>
//               <option value="perennial">Perennial</option>
//               <option value="annual">Annual</option>
//               <option value="biennial">Biennial</option>
//               <option value="biannual">Biannual</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium">Watering</label>
//             <select
//               name="watering"
//               onChange={handleFilterChange}
//               className="border p-2 w-full"
//             >
//               <option value="">Any</option>
//               <option value="frequent">Frequent</option>
//               <option value="average">Average</option>
//               <option value="minimum">Minimum</option>
//               <option value="none">None</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium">Sunlight</label>
//             <select
//               name="sunlight"
//               onChange={handleFilterChange}
//               className="border p-2 w-full"
//             >
//               <option value="">Any</option>
//               <option value="full_shade">Full Shade</option>
//               <option value="part_shade">Part Shade</option>
//               <option value="full_sun">Full Sun</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium">Indoor</label>
//             <select
//               name="indoor"
//               onChange={handleFilterChange}
//               className="border p-2 w-full"
//             >
//               <option value="">Any</option>
//               <option value="true">Yes</option>
//               <option value="false">No</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={loadMorePlants}
//         className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-700"
//       >
//         Load More
//       </button>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4">Buy {selectedPlant.common_name}</h2>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Quantity</label>
//               <input
//                 type="number"
//                 value={quantity}
//                 onChange={handleQuantityChange}
//                 min="1"
//                 className="border p-2 w-full"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 onClick={closeModal}
//                 className="bg-gray-300 text-gray-700 py-2 px-4 mr-2 hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleBuyOut}
//                 className="bg-green-600 text-white py-2 px-4 hover:bg-green-700"
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Marketplace;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Marketplace = () => {
  const navigate = useNavigate();
  const [plants, setPlants] = useState([]);
  const [displayedPlants, setDisplayedPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [purchases, setPurchases] = useState([]); // Store multiple purchases
  const plantsPerPage = 10;

  // Fetch previously stored purchases from localStorage when the component mounts
  useEffect(() => {
    const storedPurchases = JSON.parse(localStorage.getItem('purchases')) || [];
    setPurchases(storedPurchases);
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const params = {
          scientificName: 'Rosa chinensis', // Example name, adjust based on your needs
          mediaType: 'StillImage',
          limit: 100, // Increased limit to handle pagination
        };

        console.log("Requesting with parameters: ", params); // Debugging request

        const response = await axios.get('https://api.gbif.org/v1/occurrence/search', { params });

        if (response.data && response.data.results) {
          setPlants(response.data.results);
          setDisplayedPlants(response.data.results.slice(0, plantsPerPage));
        } else {
          console.error('Unexpected API response format', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
      }
    }

    fetchPlants();
  }, []);

  const loadMorePlants = () => {
    const nextPage = currentPage + 1;
    const newPlants = plants.slice(0, nextPage * plantsPerPage);
    setDisplayedPlants(newPlants);
    setCurrentPage(nextPage);
  };

  const handleBuyClick = (plant) => {
    setSelectedPlant(plant);
    setQuantity(1);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlant(null);
  };

  const handleBuyOut = () => {
    const totalCredits = quantity * 10;
    const timestamp = new Date().toLocaleTimeString();

    const newPurchase = {
      plantName: selectedPlant.scientificName,
      quantity,
      credits: totalCredits,
      timestamp,
    };

    // Add the new purchase to the existing purchases array
    const updatedPurchases = [...purchases, newPurchase];
    setPurchases(updatedPurchases);

    // Store the updated purchases array in localStorage
    localStorage.setItem('purchases', JSON.stringify(updatedPurchases));

    // Redirect to the credits page with all purchases
    navigate('/dashboard/credits', {
      state: { purchases: updatedPurchases },
    });

    closeModal();
  };

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
          <div key={plant.key} className="bg-white p-4 shadow-lg flex flex-col h-full">
            {plant.media && plant.media.length > 0 ? (
              <img
                src={plant.media[0].identifier}
                alt={plant.scientificName}
                className="w-full h-40 object-cover mb-4"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-gray-600 text-center">{plant.scientificName}</span>
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{plant.scientificName}</h3>
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

      <button
        onClick={loadMorePlants}
        className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-700"
      >
        Load More
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Buy {selectedPlant.scientificName}</h2>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="border p-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 py-2 px-4 mr-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleBuyOut}
                className="bg-green-600 text-white py-2 px-4 hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
