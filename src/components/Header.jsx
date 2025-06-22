
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
  };

  const handleAuthClick = (formType) => {
    setIsMenuOpen(false);
    navigate(`/auth?form=${formType}`);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    if (location.pathname === '/') {
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      
      sections.forEach(section => observer.observe(section));

      return () => sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    } else {
      setActiveSection(''); // Clear active section if not on landing page
    }
  }, [navLinks, location.pathname]);


  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--lovebite-charcoal)]/80 backdrop-blur-lg border-b border-[var(--lovebite-gray)]/50 shadow-lg"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <Logo />
          </motion.div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === link.id && location.pathname === '/'
                    ? 'text-[var(--lovebite-red)]' 
                    : 'text-[var(--lovebite-light-gray)] hover:text-[var(--lovebite-cream)]'
                }`}
              >
                {link.label}
                {activeSection === link.id && location.pathname === '/' && (
                  <motion.div 
                    layoutId="activePill" 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--lovebite-red)] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              onClick={() => handleAuthClick('login')}
              className="text-[var(--lovebite-light-gray)] hover:text-[var(--lovebite-cream)] hover:bg-[var(--lovebite-gray)]/50"
            >
              Login
            </Button>
            <Button 
              onClick={() => handleAuthClick('signup')}
              className="lovebite-gradient text-white hover:opacity-90 px-5 py-2 text-sm"
            >
              Sign Up
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--lovebite-light-gray)]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 py-3 border-t border-[var(--lovebite-gray)]/50"
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2 px-2 rounded-md font-medium transition-colors ${
                    activeSection === link.id && location.pathname === '/'
                      ? 'text-[var(--lovebite-red)] bg-[var(--lovebite-red)]/10' 
                      : 'text-[var(--lovebite-light-gray)] hover:text-[var(--lovebite-cream)] hover:bg-[var(--lovebite-gray)]/30'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-[var(--lovebite-gray)]/50">
                <Button 
                  variant="ghost" 
                  onClick={() => handleAuthClick('login')}
                  className="justify-start text-[var(--lovebite-light-gray)] hover:text-[var(--lovebite-cream)] hover:bg-[var(--lovebite-gray)]/30"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => handleAuthClick('signup')}
                  className="lovebite-gradient text-white w-full"
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
