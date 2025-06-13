import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      // Here you would typically send the email to your backend
      console.log("Subscribing email:", email);
      setSubscribed(true);
      setEmail("");
      // Reset subscription status after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-black text-white py-12 px-6 md:px-16 overflow-hidden">
      {/* Background Fade Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Left Column – Goodbye Message */}
        <div className="w-full">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-semibold mb-4"
          >
            Until Next Time 👋
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm text-white/70 leading-relaxed"
          >
            Thank you for exploring dream destinations with us. We hope your next stay is unforgettable. See you again soon!
          </motion.p>
        </div>

        {/* Center Column – Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full flex flex-col items-start md:items-center gap-2"
        >
          <h3 className="text-lg font-medium mb-3 md:text-center">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80 md:text-center">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Destinations</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </motion.div>

        {/* Right Column – Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-full"
        >
          <h3 className="text-lg font-medium mb-3">Stay Updated</h3>
          <p className="text-sm text-white/70 mb-3">
            Subscribe to our newsletter for offers & updates.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full flex-grow px-4 py-2 rounded-full text-black text-sm focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto sm:flex-shrink-0 bg-[#E9BA6C] hover:bg-[#d9aa5c] transition-colors px-4 py-2 rounded-full text-sm font-medium text-black min-w-[90px]"
            >
              {subscribed ? "Sent!" : "Subscribe"}
            </button>
          </form>
          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-xs mt-2"
            >
              Thank you for subscribing!
            </motion.p>
          )}
        </motion.div>
      </motion.div>

      {/* Bottom Footer – Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 mt-12 text-center text-xs text-white/50"
      >
        © All rights reserved by <span className="font-semibold text-white">Waeez Ali</span> 2025
      </motion.div>
    </footer>
  );
}