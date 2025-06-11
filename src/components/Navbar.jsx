import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo.jpg';

const navLinks = ['Home', 'About', 'Contact Us', 'Footer'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full top-0 left-0 px-6 py-4 flex items-center justify-between bg-white shadow-md z-50"
    >
      {/* Left: Logo and Text */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <div className="text-xl font-bold flex items-center gap-1">
          <span>𝑅𝑒𝒶𝓁 </span>
          <span className="text-yellow-500" style={{ position: "relative", top: "1px" }}>𝐸𝓈𝓉𝒶𝓉𝑒</span>
        </div>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex gap-10 font-medium text-sm">
        {navLinks.map(link => (
          <motion.a
            key={link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`#${link.toLowerCase().replace(" ", "")}`}
            className="cursor-pointer"
          >
            {link}
          </motion.a>
        ))}
      </div>

      {/* Right: Hamburger */}
      <div className="flex items-center gap-4">
        <div className="hidden md:block text-xl">😊</div>
        <button
          onClick={toggleMenu}
          className="block md:hidden p-2 rounded z-[60]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Fullscreen Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white/90 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-6 md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                onClick={closeMenu}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="text-xl font-semibold"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
