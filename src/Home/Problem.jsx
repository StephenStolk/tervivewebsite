import React from 'react';
import { FaLeaf, FaLungs, FaTractor, FaRecycle, FaCloud, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: <FaCloud size={40} className="text-green-600" />,
    title: 'Air Pollution',
    description:
      'Increasing levels of air pollution leading to respiratory and cardiovascular diseases, particularly in urban areas.',
  },
  {
    icon: <FaLungs size={40} className="text-green-600" />,
    title: 'Health Hazards',
    description:
      'Exposure to pollutants causing serious health issues affecting the quality of life and increasing healthcare costs.',
  },
  {
    icon: <FaRecycle size={40} className="text-green-600" />,
    title: 'Inefficient Green Credit System',
    description:
      'Lack of streamlined management and transparency making it difficult to incentivize sustainable practices effectively.',
  },
  {
    icon: <FaTractor size={40} className="text-green-600" />,
    title: 'Farmer Challenges',
    description:
      'Local farmers and vendors struggling to sell products due to middlemen, leading to reduced profits and economic instability.',
  },
  {
    icon: <FaLeaf size={40} className="text-green-600" />,
    title: 'Environmental Degradation',
    description:
      'Continuous neglect leading to loss of biodiversity and natural resources, impacting future generations.',
  },
  {
    icon: <FaExclamationTriangle size={40} className="text-green-600" />,
    title: 'Climate Change',
    description:
      'Rapid climate changes causing extreme weather conditions, affecting agriculture, health, and global economies.',
  },
];

const ProblemSection = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-green-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8"
        >
          The Problems We Face
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-12 text-lg"
        >
          Our environment and health are facing significant challenges that need immediate attention and effective solutions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-600 flex-grow">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
