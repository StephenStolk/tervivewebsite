import React from 'react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-green-900 mt-28 mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Solutions</h2>
      <div className="max-w-4xl mx-auto">
        <p className="mb-4">
          Tervive addresses these issues by providing a comprehensive platform that monitors pollution levels, offers health condition reports, and streamlines the green credit management system. We also empower local farmers and vendors by providing a marketplace free from the middlemen, ensuring they get the best value for their products.
        </p>
        <div className="text-center mt-8">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            className="bg-[#8a9d68] text-white px-6 py-3 rounded"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
