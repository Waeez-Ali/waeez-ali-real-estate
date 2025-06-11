import React, { useState } from 'react';
import { motion } from 'framer-motion';
import houseBg from "../assets/house.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert('Form has been submitted');
      setSubmitted(false);
    }, 300);
  };

  return (
    <motion.section
      id="contactus"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full pt-24 px-6 py-12 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${houseBg})` }}
    >
      <div className="max-w-xl mx-auto bg-black/60 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in touch!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col font-light gap-4">
          <input
            type="text"
            placeholder="Waeez Ali"
            className="p-3 rounded text-black"
            required
          />
          <input
            type="email"
            placeholder="xyz12@gmail.com"
            className="p-3 rounded text-black"
            required
          />
          <input
            type="tel"
            placeholder="+92-312-1234-5678"
            className="p-3 rounded text-black"
            required
          />
          <textarea
            placeholder="Your text here"
            rows="4"
            className="p-3 rounded text-black"
            required
          ></textarea>
          <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-14 text-center"
                  >
                    <button className="z-10 relative bg-[#E9BA6C] text-black px-8 py-3 rounded-full text-sm font-light inline-flex items-center gap-2 hover:bg-white/90 transition">
                      Submit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M13 5H19V11" />
                        <path d="M19 5L5 19" />
                      </svg>
                    </button>
                  </motion.div>
        </form>
      </div>
    </motion.section>
  );
}
