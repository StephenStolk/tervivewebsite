import React from 'react';

const HealthReport = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Health Report</h2>
      <iframe
        src="https://healthreport.streamlit.app/?embedded=true"
        title="Health Report"
        className="w-full h-screen border-none"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default HealthReport;
