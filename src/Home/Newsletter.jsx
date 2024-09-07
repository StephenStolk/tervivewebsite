import React from 'react'

const Newsletter = () => {
  return (
    <> 
    <div className="flex justify-center items-center bg-green-50 p-12 pt-24">
  <div className="flex shadow-md p-2 w-full max-w-2xl p-4 bg-[#86946d]">
    <input
      type="text"
      placeholder="Find plant details..."
      className="flex-grow px-4 py-2 text-gray-700 rounded-l-lg focus:outline-none"
    />
    {/* Button */}
    <button className="bg-green-900  text-white font-semibold px-6 py-2 rounded-r-lg hover:bg-teal-600 transition">
      Find
    </button>
  </div>
</div>

    </>
  )
}

export default Newsletter