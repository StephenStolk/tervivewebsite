import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="bg-green-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Tervive</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/about" className="text-white">About</Link>
            <Link to="/contact" className="text-white">Contact</Link>
            <Link to="/products" className="text-white">Products</Link>
            <Link to="/signup">
              <button className="bg-white text-green-600 px-4 py-2 rounded">Signup</button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
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
            <div className="flex flex-col space-y-4 mt-4 text-white">
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
  