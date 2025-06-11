import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero-section';
import About from './components/About';
import Contact from './components/Contact'; // assuming this is your contact section
import { motion } from 'framer-motion';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <About />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contactus"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.section>
      <motion.section
        id="footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.section>
    </div>
  );
};

export default App;
