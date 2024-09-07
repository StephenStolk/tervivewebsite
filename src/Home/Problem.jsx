import React from "react";
import {
  FaLeaf,
  FaLungs,
  FaTractor,
  FaRecycle,
  FaCloud,
  FaExclamationTriangle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const problems = [
  {
    icon: <FaCloud size={100} className="text-green-800 sm:size-[200px]" />,
    title: "Air Pollution",
    description:
      "Increasing levels of air pollution leading to respiratory and cardiovascular diseases, particularly in urban areas.",
  },
  {
    icon: <FaLungs size={100} className="text-green-800 sm:size-[200px]" />,
    title: "Health Hazards",
    description:
      "Exposure to pollutants causing serious health issues affecting the quality of life and increasing healthcare costs.",
  },
  {
    icon: <FaRecycle size={100} className="text-green-800 sm:size-[200px]" />,
    title: "Inefficient Green Credit System",
    description:
      "Lack of streamlined management and transparency making it difficult to incentivize sustainable practices effectively.",
  },
  {
    icon: <FaTractor size={100} className="text-green-800 sm:size-[200px]" />,
    title: "Farmer Challenges",
    description:
      "Local farmers and vendors struggling to sell products due to middlemen, leading to reduced profits and economic instability.",
  },
  {
    icon: <FaLeaf size={100} className="text-green-800 sm:size-[200px]" />,
    title: "Environmental Degradation",
    description:
      "Continuous neglect leading to loss of biodiversity and natural resources, impacting future generations.",
  },
  {
    icon: <FaExclamationTriangle size={100} className="text-green-800 sm:size-[200px]" />,
    title: "Climate Change",
    description:
      "Rapid climate changes causing extreme weather conditions, affecting agriculture, health, and global economies.",
  },
];

const ProblemSection = () => {
  return (
    <>
      <section id="problems" className="bg-green-50 text-green-900 pb-24 pt-20">
        <div className="max-w-8xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center pt-20 pb-4 text-green-900"
          >
            The Problems We Face
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto mb-12 text-lg text-green-900"
          >
            Our environment and health are facing significant challenges that
            need immediate attention and effective solutions.
          </motion.p>
        </div>
        <div className="space-y-12 w-[90%] mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden h-[50vh] ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image/Icon Section */}
              <div className="w-full md:w-[35rem] bg-[#8a9d68] flex justify-center items-center h-[40vh] md:h-full">
                <div className="bg-[#8a9d68] rounded-full p-4">
                  {problem.icon}
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 p-4 ml-2 md:ml-8 px-4 text-center md:text-left text-green-900">
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                <p className="text-gray-600 max-w-[90%] mx-auto md:max-w-full">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
