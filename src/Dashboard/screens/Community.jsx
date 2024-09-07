/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

const Community = () => {
    const [plantGuides, setPlantGuides] = useState([]);
    const [filteredGuides, setFilteredGuides] = useState([]);
    const [pestDiseases, setPestDiseases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [guideType, setGuideType] = useState('');
    const [diseaseQuery, setDiseaseQuery] = useState(''); // State for disease search query
    const [page, setPage] = useState(1);
    const [limit] = useState(6); // Show 6 items initially
    const [expandedTextIds, setExpandedTextIds] = useState(new Set()); // To track expanded text

    // Fetch the plant guides data from the API
    useEffect(() => {
        const fetchPlantGuides = async () => {
            try {
                const response = await fetch(
                    `https://perenual.com/api/species-care-guide-list?key=sk-RQmk66dbeb376c7216761&page=${page}&q=${searchQuery}&type=${guideType}`
                );
                const data = await response.json();
                setPlantGuides(data.data);
                setFilteredGuides(data.data.slice(0, limit)); // Show only limited guides initially
                setLoading(false);
            } catch (error) {
                console.error('Error fetching plant care guides:', error);
                setLoading(false);
            }
        };

        fetchPlantGuides();
    }, [page, searchQuery, guideType]);

    // Fetch pest and disease data
    useEffect(() => {
        const fetchPestDiseases = async () => {
            try {
                const response = await fetch(
                    `https://perenual.com/api/pest-disease-list?key=sk-RQmk66dbeb376c7216761&page=${page}&q=${diseaseQuery}`
                );
                const data = await response.json();
                setPestDiseases(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching pest diseases:', error);
                setLoading(false);
            }
        };

        fetchPestDiseases();
    }, [page, diseaseQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Filter the guides based on search
        setFilteredGuides(plantGuides.filter(guide => guide.common_name.toLowerCase().includes(searchQuery.toLowerCase())));
    };

    const handleTypeFilter = (e) => {
        setGuideType(e.target.value);
    };

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

                {/* Search and Filters Section */}
                <section className="mb-8">
                    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Search by species name"
                            className="p-3 border border-gray-300 rounded-md w-full"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <select
                            className="p-3 border border-gray-300 rounded-md w-full md:w-auto"
                            value={guideType}
                            onChange={handleTypeFilter}
                        >
                            <option value="">Filter by Guide Type</option>
                            <option value="sunlight">Sunlight</option>
                            <option value="watering">Watering</option>
                        </select>
                        <button
                            type="submit"
                            className="p-3 bg-[#8a9d68] text-white rounded-md w-full md:w-auto hover:bg-green-800 transition-colors"
                        >
                            Search
                        </button>
                    </form>
                </section>

                {/* Plant Guides Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-green-700 mb-6">Plant Care Guides</h2>
                    {loading ? (
                        <p className="text-center text-gray-600">Loading plant guides...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredGuides.map((guide) => (
                                <div
                                    key={guide.id}
                                    className="bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-bold mb-2">{guide.common_name}</h3>
                                    <p className="italic mb-2">{guide.scientific_name.join(', ')}</p>
                                    <div>
                                        {guide.section.map((section) => (
                                            <div key={section.id} className="mb-4">
                                                <h4 className="font-bold text-green-600 capitalize">{section.type}</h4>
                                                <p className="text-gray-600">{truncateText(section.description, 150, section.id)}</p>
                                                {section.description.length > 150 && (
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleToggleText(section.id);
                                                        }}
                                                        className="text-green-600 hover:text-green-800 cursor-pointer"
                                                    >
                                                        {expandedTextIds.has(section.id) ? 'Read Less' : 'Read More'}
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                <hr className="my-10 border-gray-300" />

                {/* Pest and Disease Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-green-700 mb-6">Pest and Disease Information</h2>
                    
                    {/* Disease Search Section */}
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
                    
                    {loading ? (
                        <p className="text-center text-gray-600">Loading pest and disease information...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {pestDiseases.map((pest) => (
                                <div key={pest.id} className="bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-xl font-bold mb-2">{pest.common_name}</h3>
                                    <p className="italic mb-2">{pest.scientific_name}</p>
                                    <img
                                        src={pest.images[0]?.medium_url || '/placeholder.jpg'} // Use a placeholder if no image is available
                                        alt={pest.common_name}
                                        className="mb-4 w-full h-48 object-cover"
                                    />
                                    <p className="text-gray-600">{pest.host.join(', ')}</p>
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
