import React, { useState, useEffect } from "react";
import { FaWind, FaSmog, FaMapMarkerAlt } from "react-icons/fa";
import { BsThermometerSun } from "react-icons/bs";

const API_TOKEN = "e4e3faf70f12c7792717a0ca57faa7bb415e3b5b";

const AqiReport = () => {
  const [location, setLocation] = useState(null);
  const [aqiData, setAqiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const getLocationPermission = async () => {
    if (navigator.geolocation) {
      return true;
    } else {
      alert("Geolocation is not supported by this browser.");
      return false;
    }
  };

  const getLocation = async () => {
    if (await getLocationPermission()) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords);
          fetchAqiData(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          alert("Error getting location");
        }
      );
    }
  };

  const fetchAqiData = async (lat, lon) => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://api.waqi.info/feed/geo:${lat};${lon}/?token=${API_TOKEN}`
      );
      let result = await response.json();
      if (result.status === "ok") {
        setAqiData(result.data);
      } else {
        alert("Error fetching AQI data");
      }
    } catch (error) {
      alert("Error fetching AQI data");
    } finally {
      setLoading(false);
    }
  };

  const fetchAqiDataByQuery = async () => {
    if (query.trim() === "") {
      alert("Please enter a location");
      return;
    }
    setLoading(true);
    try {
      let response = await fetch(
        `https://api.waqi.info/feed/${query}/?token=${API_TOKEN}`
      );
      let result = await response.json();
      if (result.status === "ok") {
        setAqiData(result.data);
      } else {
        alert("Error fetching AQI data");
      }
    } catch (error) {
      alert("Error fetching AQI data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-4xl font-bold mb-6 text-green-900 text-center">
          Air Quality Index (AQI) Report
        </h2>

        <div className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter location"
            className="border border-green-500 rounded-lg p-2 w-full sm:w-3/4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={fetchAqiDataByQuery}
            className="bg-[#8a9d68] hover:bg-[#7a8b5b] text-white py-2 px-4 rounded-lg w-full sm:w-1/4 transition duration-300 ease-in-out"
          >
            Search
          </button>
        </div>

        {loading && (
          <div className="text-center text-green-900">
            <p>Loading...</p>
          </div>
        )}

        {aqiData && (
          <div className="text-center mt-10">
            <h3 className="text-3xl font-semibold text-green-900 flex justify-center items-center gap-2">
              <FaMapMarkerAlt className="text-green-900" /> {aqiData.city.name}
            </h3>
            <p className="text-lg mt-4">AQI: {aqiData.aqi}</p>
            <p className="text-lg mb-6">
              Dominant Pollutant: {aqiData.dominentpol.toUpperCase()}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aqiData.iaqi && Object.keys(aqiData.iaqi).map((pollutant) => (
                <div
                  key={pollutant}
                  className="bg-white text-green-900 shadow-lg border border-green-900 p-4 flex flex-col items-center h-32"
                >
                  <div className="text-3xl mb-2">
                    {pollutant === "pm25" && <FaSmog />}
                    {pollutant === "pm10" && <FaWind />}
                    {pollutant === "temp" && <BsThermometerSun />}
                    {/* Add more icons as needed */}
                  </div>
                  <p className="text-lg font-semibold text-center">{pollutant.toUpperCase()}</p>
                  <p className="text-md text-center">
                    {aqiData.iaqi[pollutant].v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    
    </>
  );
};

export default AqiReport;
