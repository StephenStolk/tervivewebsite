import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="bg-gray-50 py-28" id="solutions">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Services Offered</h2>
        <p className="text-gray-600 mt-4">
          Manage your green credits, ensure smooth transactions, and prevent health problems in one stop
        </p>
      </div>

      {/* Card Container */}
      <div className="flex flex-col items-center md:flex-row justify-center gap-16 mb-28">
        {/* Card Container with stagger effect */}
        <div className="flex flex-col md:flex-row justify-center gap-16">
          {[
            {
              icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiwxqJJL-KFm9WxNGObkW4G1OMax-YUCqjw&s",
              title: "Real Time Search",
              description: "Boost your brand recognition with each click. Generic links don't mean a thing.",
              delay: 0.2,
              position: 0
            },
            {
              icon: "https://png.pngtree.com/png-vector/20221201/ourmid/pngtree-credit-manager-icon-with-male-worker-and-bank-building-vector-png-image_42976226.jpg",
              title: "Credits Management",
              description: "Gain insights into who is clicking your links. Knowing where traffic comes from helps make better decisions.",
              delay: 0.4,
              position: 1
            },
            {
              icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIONCndTSBH7XJaYQ2xgo7kpkvQZJ9mp0Sg&usqp=CAU",
              title: "Fully Customizable",
              description: "Improve brand awareness and content discoverability through customizable links.",
              delay: 0.6,
              position: 2
            },
            {
              icon: "https://static.vecteezy.com/system/resources/thumbnails/017/347/984/small_2x/sprout-of-plant-in-ecology-garden-silhouette-icon-organic-growth-leaf-on-soil-glyph-pictogram-eco-natural-seed-agriculture-symbol-eco-friendly-farm-sign-isolated-illustration-vector.jpg",
              title: "Comprehensive Analytics",
              description: "Track all metrics in one place. Easily monitor performance and identify growth areas.",
              delay: 0.8,
              position: 3
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-6 shadow-md w-80 h-80 md:w-72 md:h-72 flex flex-col justify-between"
              initial={{ opacity: 0, x: service.position % 2 === 0 ? -50 : 50 }} // Slide from left or right
              whileInView={{ opacity: 1, x: 0 }} // Animate when in view
              viewport={{ amount: 0.2 }} // Trigger animation each time in view
              transition={{ duration: 0.8, delay: service.delay }}
              style={{ marginTop: `${index * 2.5}rem` }} // Adjust vertical position
            >
              <div className="flex items-center">
                <img src={service.icon} alt="Icon" className="w-16 h-16" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
