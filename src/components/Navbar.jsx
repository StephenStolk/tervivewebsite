import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Use 'react-scroll' for smooth scrolling
import { Link as RouterLink } from 'react-router-dom'; // Use 'react-router-dom' for routing
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="p-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-green-800 text-2xl font-bold">Tervive</div>
          {/* Center-align the navbar links */}
          <div className="hidden md:flex space-x-6 justify-center items-center">
            {/* Internal Links for Smooth Scroll */}
            <ScrollLink to="home" smooth={true} duration={500} className="text-green-800 hover:text-white hover:bg-[#8a9d68] px-4 py-2 hover:rounded-xl hover:cursor-pointer">Home</ScrollLink>
            <ScrollLink to="problems" smooth={true} duration={500} className="text-green-800 hover:text-white hover:bg-[#8a9d68] px-4 py-2 hover:rounded-xl hover:cursor-pointer">Problems</ScrollLink>
            <ScrollLink to="testimonial" smooth={true} duration={500} className="text-green-800 hover:text-white hover:bg-[#8a9d68] px-4 py-2 hover:rounded-xl hover:cursor-pointer">Our Team</ScrollLink>
            <ScrollLink to="solutions" smooth={true} duration={500} className="text-green-800 hover:text-white hover:bg-[#8a9d68] px-4 py-2 hover:rounded-xl hover:cursor-pointer">Solutions</ScrollLink>
            {/* External Link for Routing to /login */}
            {/* <RouterLink to="/login" className="text-green-800 hover:text-white hover:bg-[#8a9d68] px-4 py-2 hover:rounded-xl hover:cursor-pointer">Login</RouterLink> */}
            {/* External Link for Routing to /signup */}
            <RouterLink to="/signup">
              <button className="bg-[#8a9d68] text-white rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-green-900">Signup</button>
            </RouterLink>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-800 hover:text-green-800 hover:bg-green-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            className="md:hidden"
          >
            <div className="flex flex-col space-y-4 mt-4 text-green-800">
              {/* Internal Links for Mobile */}
              <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
              <ScrollLink to="products" smooth={true} duration={500}>Products</ScrollLink>
              {/* External Link for Routing to /signup */}
              <RouterLink to="/signup">
                <button className="bg-white text-green-600 px-4 py-2 rounded">Signup</button>
              </RouterLink>
            </div>
          </motion.div>
        )}
      </nav>
    );
}

export default Navbar;
