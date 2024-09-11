import React from 'react'

const Verification = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Health Report</h2>
      <iframe
        src="https://weather-app-ftfrwpdv98p5gtxr5ycuum.streamlit.app/?embedded=true"
        title="Health Report"
        className="w-full h-screen border-none"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Verification
