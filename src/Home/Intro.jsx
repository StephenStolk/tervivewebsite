// 
import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="w-full flex flex-col md:flex-row mb-16">
      {/* Left side with text and buttons */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col mx-auto my-auto justify-center p-6 px-28 text-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-green-900">
          TERVIVE
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-2xl tracking-tight first:mt-0 mt-2 text-green-900">
          Your One stop solution!
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, iste?
        </h2>

        <motion.button
          className="bg-[#8a9d68] text-white font-semibold py-3 rounded-lg hover:bg-[#8a9d68] transition mt-4 w-1/4"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Join
        </motion.button>
      </motion.div>

      {/* Right side with image */}
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0CNMRgjBOYvxdO-0OT3ChqdHQxK0F9u6sw&usqp=CAU"
          alt="agriculture"
          className="w-[70%] h-[80%] rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Intro;
