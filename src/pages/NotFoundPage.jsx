
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Home, AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[var(--lovebite-charcoal)] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden paw-pattern-dark">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "circOut" }}
        className="mb-8"
      >
        <Logo size="w-32 h-32" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
        className="bg-[var(--lovebite-gray)]/50 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-[var(--lovebite-gray)] max-w-lg w-full"
      >
        <motion.div
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 150 }}
          className="mb-6"
        >
          <AlertTriangle className="w-20 h-20 text-[var(--lovebite-red)] mx-auto" />
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--lovebite-cream)] mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--lovebite-cream)] mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-[var(--lovebite-light-gray)] mb-10">
          It looks like the page you're searching for has taken a little detour, or maybe it's off playing fetch!
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            asChild
            size="lg"
            className="lovebite-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-[var(--lovebite-red)]/50"
          >
            <Link to="/">
              <Home className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Go Back Home
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <p className="mt-12 text-sm text-[var(--lovebite-light-gray)]/70">
        If you think this is a bug, please let us know!
      </p>
    </div>
  );
};

export default NotFoundPage;
