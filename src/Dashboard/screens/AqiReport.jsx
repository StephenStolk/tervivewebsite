import React, { useState, useEffect } from 'react';

const API_TOKEN = 'e4e3faf70f12c7792717a0ca57faa7bb415e3b5b';

const AqiReport = () => {
  const [location, setLocation] = useState(null);
  const [aqiData, setAqiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

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
        fetchAqiData(position.coords.latitude, position.coords.longitude);
      }, (error) => {
        alert('Error getting location');
      });
    }
  };

  const fetchAqiData = async (lat, lon) => {
    setLoading(true);
    try {
      let response = await fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${API_TOKEN}`);
      let result = await response.json();
      if (result.status === 'ok') {
        setAqiData(result.data);
      } else {
        alert('Error fetching AQI data');
      }
    } catch (error) {
      alert('Error fetching AQI data');
    } finally {
      setLoading(false);
    }
  };

  const fetchAqiDataByQuery = async () => {
    if (query.trim() === '') {
      alert('Please enter a location');
      return;
    }
    setLoading(true);
    try {
      let response = await fetch(`https://api.waqi.info/feed/${query}/?token=${API_TOKEN}`);
      let result = await response.json();
      if (result.status === 'ok') {
        setAqiData(result.data);
      } else {
        alert('Error fetching AQI data');
      }
    } catch (error) {
      alert('Error fetching AQI data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">AQI Report</h2>
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter location"
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={fetchAqiDataByQuery}
          className="bg-green-600 text-white py-2 px-4 rounded"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {aqiData && (
        <div>
          <h3 className="text-2xl font-semibold">Location: {aqiData.city.name}</h3>
          <p>AQI: {aqiData.aqi}</p>
          <p>Dominant Pollutant: {aqiData.dominentpol}</p>
          {/* Additional information like pollutants */}
          <div className="mt-4">
            {aqiData.iaqi && Object.keys(aqiData.iaqi).map((pollutant) => (
              <p key={pollutant}>
                {pollutant.toUpperCase()}: {aqiData.iaqi[pollutant].v}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AqiReport;
