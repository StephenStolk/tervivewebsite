/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

const Community = () => {
    const [pestDiseases, setPestDiseases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [diseaseQuery, setDiseaseQuery] = useState(''); // State for disease search query
    const [page, setPage] = useState(1);
    const [limit] = useState(6); // Show 6 items initially
    const [expandedTextIds, setExpandedTextIds] = useState(new Set()); // To track expanded text

    // Fetch pest and disease data
    useEffect(() => {
        const fetchPestDiseases = async () => {
            try {
                const response = await fetch(
                    `https://api.gbif.org/v1/species?name=${diseaseQuery}`
                );
                const data = await response.json();
                setPestDiseases(data.results); // Adjust to match the GBIF API response structure
                setLoading(false);
            } catch (error) {
                console.error('Error fetching pest diseases:', error);
                setLoading(false);
            }
        };

        if (diseaseQuery) {
            fetchPestDiseases();
        } else {
            setPestDiseases([]);
        }
    }, [diseaseQuery]);

    const handleDiseaseSearch = (e) => {
        e.preventDefault();
        // Trigger a fetch with the new disease query
        setDiseaseQuery(searchQuery);
    };

    const handleToggleText = (id) => {
        setExpandedTextIds(prevIds => {
            const newIds = new Set(prevIds);
            if (newIds.has(id)) {
                newIds.delete(id);
            } else {
                newIds.add(id);
            }
            return newIds;
        });
    };

    const truncateText = (text, maxLength, id) => {
        if (expandedTextIds.has(id)) {
            return text;
        }
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <div className="bg-white p-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-green-700">Community Campaigns & Articles</h1>
                    <p className="text-gray-600">Stay updated with the latest health and agriculture campaigns.</p>
                </header>

                {/* Disease Search Section */}
                <section className="mb-8">
                    <div className="w-full mb-6">
                        <form onSubmit={handleDiseaseSearch} className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Search diseases"
                                className="p-3 border border-gray-300 rounded-md w-full"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="p-3 bg-[#8a9d68] text-white rounded-md w-full md:w-auto hover:bg-green-800 transition-colors"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </section>

                {/* Pest and Disease Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-green-700 mb-6">Pest and Disease Information</h2>
                    
                    {loading ? (
                        <p className="text-center text-gray-600">Loading pest and disease information...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {pestDiseases.map((disease) => (
                                <div key={disease.key} className="bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-xl font-bold mb-2">{disease.canonicalName}</h3>
                                    <p className="italic mb-2">{disease.scientificName}</p>
                                    <p className="text-gray-600">
                                        <strong>Kingdom:</strong> {disease.kingdom}<br />
                                        <strong>Phylum:</strong> {disease.phylum}<br />
                                        <strong>Class:</strong> {disease.class}<br />
                                        <strong>Order:</strong> {disease.order}<br />
                                        <strong>Family:</strong> {disease.family}<br />
                                        <strong>Genus:</strong> {disease.genus}<br />
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Join the Community Section */}
                <section className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">Join Our Community</h2>
                    <p className="text-gray-600 mb-6">
                        Connect with like-minded individuals who are passionate about health, agriculture, and sustainability. Share
                        your ideas, collaborate on projects, and contribute to our mission.
                    </p>
                    <a
                        href="#"
                        className="p-3 bg-green-600 text-white rounded-md hover:bg-green-800 transition-colors"
                    >
                        Join Us Now
                    </a>
                </section>
            </div>
        </div>
    );
};

export default Community;

