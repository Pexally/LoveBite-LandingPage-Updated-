
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Logo = ({ size = "w-10 h-10", className = "" }) => {
  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        className={`relative ${size}`}
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/8d661d7e-3103-4027-9188-e62d762adfbe/42d0ddead84bea0d1721830fcb4591ea.png"
          alt="LoveBite Logo"
          className="w-full h-full object-contain rounded-full"
         />
      </motion.div>
      <span className="text-xl font-bold text-white">LoveBite</span>
    </Link>
  );
};

export default Logo;
