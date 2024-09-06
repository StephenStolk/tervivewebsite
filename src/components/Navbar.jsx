import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="p-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-green-800 text-2xl font-bold">Tervive</div>
          {/* Center-align the navbar links */}
          <div className="hidden md:flex space-x-6 justify-center items-center">
            <Link to="/" className="text-green-800 hover:text-white hover:bg-[#8a9d68] px-4 py-2 hover:rounded-xl">Home</Link>
            <Link to="/about" className="text-green-800 hover:text-white hover:bg-[#8a9d68] px-4 py-2 hover:rounded-xl">About</Link>
            <Link to="/contact" className="text-green-800 hover:text-white hover:bg-[#8a9d68] px-4 py-2 hover:rounded-xl">Contact</Link>
            <Link to="/products" className="text-green-800 hover:text-white hover:bg-[#8a9d68] px-4 py-2 hover:rounded-xl">Products</Link>
            <Link to="/signup">
              <button className="bg-[#8a9d68] text-white rounded-xl px-4 py-2 rounded">Signup</button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-800 hover:text-green-800 hover:bg-green-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            className="md:hidden"
          >
            <div className="flex flex-col space-y-4 mt-4 text-green-800 hover:text-green-800 hover:bg-green-800">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/products">Products</Link>
              <Link to="/signup">
                <button className="bg-white text-green-600 px-4 py-2 rounded">Signup</button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    );
  }
  
  export default Navbar;
