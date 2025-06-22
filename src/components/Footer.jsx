
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (linkName) => {
    toast({
      title: `🚧 ${linkName} link isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const footerLinkCategories = {
    product: ['Features', 'Pricing', 'AI Symptom Checker', 'Mobile App (Coming Soon)'],
    company: ['About Us', 'Blog', 'Careers', 'Press Kit'],
    support: ['Help Center', 'Privacy Policy', 'Terms of Service', 'Contact Us'],
  };

  const socialMediaLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
  ];

  return (
    <footer className="bg-[var(--lovebite-charcoal)] border-t border-[var(--lovebite-gray)]/50 text-[var(--lovebite-light-gray)] relative overflow-hidden">
      <div className="absolute inset-0 paw-pattern-dark opacity-[0.03]"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Logo />
            <p className="text-sm leading-relaxed my-6">
              Modern pet care for loving pet parents. Manage health, get AI insights, and never miss a moment.
            </p>
            <div className="mb-4">
              <span className="text-md font-semibold text-[var(--lovebite-cream)] mb-2 block">Get The App</span>
              <div className="flex space-x-3">
                <motion.a href="#" onClick={() => handleLinkClick('App Store')} whileHover={{ scale: 1.05 }} className="block">
                  <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/8d661d7e-3103-4027-9188-e62d762adfbe/0fdc6942b4653a90c35ada1c3bf24dbd.webp" alt="Download on the App Store" className="h-10" />
                </motion.a>
                <motion.a href="#" onClick={() => handleLinkClick('Google Play')} whileHover={{ scale: 1.05 }} className="block">
                  <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/8d661d7e-3103-4027-9188-e62d762adfbe/a27f3467929100388163e02ddde0ada5.png" alt="Get it on Google Play" className="h-10" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {Object.entries(footerLinkCategories).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <span className="text-md font-semibold text-[var(--lovebite-cream)] mb-4 block capitalize">{category}</span>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="hover:text-[var(--lovebite-red)] transition-colors text-sm"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-[var(--lovebite-gray)]/50 pt-8"
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-xs mt-6 md:mt-0">
              <p>© {currentYear} LoveBite. All rights reserved.</p>
              <p>Powered and developed by <a href="https://pexally.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[var(--lovebite-red)] transition-colors">Pexally</a></p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
                <span className="text-md font-semibold text-[var(--lovebite-cream)] mb-2 block">Get Connected</span>
                <div className="flex items-center space-x-3">
                {socialMediaLinks.map((social) => (
                    <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "var(--lovebite-red)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(social.name);}}
                    className="p-2 rounded-full hover:bg-[var(--lovebite-gray)]/50 transition-colors"
                    title={social.name}
                    >
                    <social.icon className="w-5 h-5" />
                    </motion.a>
                ))}
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
