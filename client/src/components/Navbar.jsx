import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-sm bg-white/50">
      <Link to="/" className="text-2xl font-bold tracking-tighter text-vc-dark flex items-center gap-2">
        <span className="w-8 h-8 bg-gradient-to-br from-vc-yellow to-vc-orange rounded-md block"></span>
        VC
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-vc-dark/80">
        <Link to="/" className="hover:text-vc-orange transition-colors">Work</Link>
        <Link to="/" className="hover:text-vc-orange transition-colors">Services</Link>
        <Link to="/" className="hover:text-vc-orange transition-colors">About</Link>
        <Link to="/" className="hover:text-vc-orange transition-colors">Contact</Link>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-vc-dark text-white rounded-full font-medium text-sm hover:bg-vc-orange transition-colors"
      >
        Start Project
      </motion.button>
    </nav>
  );
};

export default Navbar;
