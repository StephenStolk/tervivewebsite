import React from 'react';

const PlantRecommend = () => {
  return (
    <div className="min-h-screen">
      {/* <h2 className="text-3xl font-bold mb-4"></h2> */}
      <iframe
        src="https://hostaqi-f84pyacedcprzl4gujqgmv.streamlit.app/?embedded=true"
        title="Health Report"
        className="w-full h-screen border-none"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default PlantRecommend;
