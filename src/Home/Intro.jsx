import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import terviveimage from "./terviveimage.png";

const Intro = () => {
  // Intersection Observer Hook
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: false });

  return (
    <section className="w-full flex flex-col md:flex-row bg-[#8a9d68] h-[35rem]">
      {/* Left side with text and buttons */}
      <motion.div
        ref={textRef}
        className="w-full md:w-1/2 flex flex-col mx-auto justify-center px-10 text-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-green-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Your One stop solution!
          <br />
          Solve all your agrarian and credits management here 
        </motion.h1>

        <motion.button
          className="bg-[#7a8b56] text-green-900 font-semibold py-3 px-6 hover:bg-green-900 transition mt-4 w-1/4 text-green-900"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: '#7a8b56' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Join
        </motion.button>
      </motion.div>

      {/* Right side with image */}
      <motion.div
        ref={imageRef}
        className="w-full md:w-1/2 flex items-center justify-center bg-white py-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.img
          src={terviveimage}
          alt="agriculture"
          className="w-full h-auto shadow-sm rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0.95 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Intro;
