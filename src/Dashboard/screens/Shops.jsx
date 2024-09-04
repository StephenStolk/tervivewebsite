import React, { useState, useEffect } from 'react';

const API_KEY = '7e6e3144a2054236923c1e05c2a017ef';

const Shops = () => {
  const [location, setLocation] = useState(null);
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedShops, setExpandedShops] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);

  const getLocationPermission = async () => {
    if (navigator.geolocation) {
      return true;
    } else {
      alert('Geolocation is not supported by this browser.');
      return false;
    }
  };

  const getLocation = async () => {
    if (await getLocationPermission()) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
        fetchShops(position.coords.latitude, position.coords.longitude);
      }, (error) => {
        alert('Error getting location');
      });
    }
  };

  const fetchShops = async (lat, lon) => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://api.geoapify.com/v2/places?categories=commercial.agrarian&filter=circle:${lon},${lat},200000&bias=proximity:${lon},${lat}&limit=20&apiKey=${API_KEY}`
      );
      let result = await response.json();
      if (result.features) {
        setShops(result.features);
      } else {
        setShops([]);
      }
    } catch (error) {
      alert('Error fetching nearby shops');
      setShops([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCoordinates = async (city) => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${city}&apiKey=${API_KEY}`
      );
      let result = await response.json();
      if (result.features && result.features.length > 0) {
        let { lat, lon } = result.features[0].properties;
        fetchShops(lat, lon);
      } else {
        alert('Error fetching coordinates for the city');
        setShops([]);
      }
    } catch (error) {
      alert('Error fetching coordinates for the city');
      setShops([]);
    } finally {
      setLoading(false);
      setSearching(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const toggleExpand = (placeId) => {
    setExpandedShops((prevExpandedShops) => ({
      ...prevExpandedShops,
      [placeId]: !prevExpandedShops[placeId],
    }));
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearching(true);
      fetchCoordinates(searchQuery.trim());
    } else {
      alert('Please enter a city name to search');
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Nearby Shops</h2>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter city name"
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 text-white py-2 px-4 rounded"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {!loading && shops.length > 0 && (
        <div className="space-y-4">
          {shops.map((shop) => (
            <div key={shop.properties.place_id} className="border p-4 rounded bg-white shadow">
              <h3 className="text-xl font-semibold">{shop.properties.name}</h3>
              <p>{shop.properties.address_line1}</p>
              <button
                onClick={() => toggleExpand(shop.properties.place_id)}
                className="mt-2 text-blue-500 underline"
              >
                {expandedShops[shop.properties.place_id] ? 'Show Less' : 'Show More'}
              </button>
              {expandedShops[shop.properties.place_id] && (
                <div className="mt-2">
                  <p>Type: {shop.properties.categories.join(', ')}</p>
                  <p>Contact: {shop.properties.phone || 'N/A'}</p>
                  <p>Website: {shop.properties.website ? <a href={shop.properties.website} target="_blank" rel="noopener noreferrer">{shop.properties.website}</a> : 'N/A'}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {!loading && shops.length === 0 && !searching && (
        <p>No shops found nearby.</p>
      )}
    </div>
  );
};

export default Shops;
