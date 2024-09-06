import React from 'react'

const Services = () => {
  return (
    <>
      <section className="bg-gray-50 py-28">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Services Offered</h2>
          <p className="text-gray-600 mt-4">
            Manage your green credits, ensure smooth transactions, and prevent health problems in one stop
          </p>
        </div>
  
        {/* Card Container */}
        <div className="flex flex-col items-center md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 mb-28">
          {/* First Card */}
          <div className="relative bg-white p-6 rounded-lg3 shadow-md w-80 h-80 md:w-72 md:h-72 flex flex-col justify-between mt-0 md:mt-0">
            <div>
              <div className=" rounded-full w-12 h-12 flex items-center justify-center mb-6">
                {/* Icon */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiwxqJJL-KFm9WxNGObkW4G1OMax-YUCqjw&s" alt="Icon" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real Time Search</h3>
              <p className="text-gray-600">
                Boost your brand recognition with each click. Generic links don't mean a thing.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative bg-white p-6 rounded-lg3 shadow-md w-80 h-80 md:w-72 md:h-72 flex flex-col justify-between mt-8 md:mt-0">
            <div>
              <div className="w-16 h-12 flex items-center justify-center mb-6">
                {/* Icon */}
                <img src="https://png.pngtree.com/png-vector/20221201/ourmid/pngtree-credit-manager-icon-with-male-worker-and-bank-building-vector-png-image_42976226.jpg" className='' alt="Icon" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Credits Management</h3>
              <p className="text-gray-600">
                Gain insights into who is clicking your links. Knowing where traffic comes from helps make better decisions.
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="relative bg-white p-6 rounded-lg3 shadow-md w-80 h-80 md:w-72 md:h-72 flex flex-col justify-between mt-8 md:mt-0">
            <div>
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                {/* Icon */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIONCndTSBH7XJaYQ2xgo7kpkvQZJ9mp0Sg&usqp=CAU" alt="Icon" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fully Customizable</h3>
              <p className="text-gray-600">
                Improve brand awareness and content discoverability through customizable links.
              </p>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="relative bg-white p-6 rounded-lg3 shadow-md w-80 h-80 md:w-72 md:h-72 flex flex-col justify-between mt-8 md:mt-0">
            <div>
              <div className=" rounded-full w-16 h-12 flex items-center justify-center mb-6">
                {/* Icon */}
                <img src="https://static.vecteezy.com/system/resources/thumbnails/017/347/984/small_2x/sprout-of-plant-in-ecology-garden-silhouette-icon-organic-growth-leaf-on-soil-glyph-pictogram-eco-natural-seed-agriculture-symbol-eco-friendly-farm-sign-isolated-illustration-vector.jpg" alt="Icon" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Comprehensive Analytics</h3>
              <p className="text-gray-600">
                Track all metrics in one place. Easily monitor performance and identify growth areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
