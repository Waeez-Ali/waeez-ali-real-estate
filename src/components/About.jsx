import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/house1.jpg'; // adjust path based on your folder

export default function About() {
  return (
    <section
      id='about'
      className="w-full bg-cover bg-center bg-no-repeat relative text-white px-5 md:px-20 py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-semibold mb-2 tracking-tight ">
            Why <span className="text-yellow-500">Choose Us</span>
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto">
            A glimpse into how we redefine luxury holidays by merging comfort, exclusivity, and unforgettable experiences.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch justify-between">
          {[
            {
              title: "Curated Villas",
              desc: "Handpicked properties ensuring elegance, privacy, and scenic beauty.",
              icon: "🏡",
              delay: 0.2
            },
            {
              title: "Seamless Booking",
              desc: "Effortless and transparent booking from start to finish.",
              icon: "🛎️",
              delay: 0.4
            },
            {
              title: "Memorable Experiences",
              desc: "Beyond the stay — private chefs, local adventures, and more.",
              icon: "🌍",
              delay: 0.6
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 w-full md:w-1/3 text-white shadow-md"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 text-center"
        >
          <button className="z-10 relative bg-[#E9BA6C] text-black px-8 py-3 rounded-full text-sm font-light inline-flex items-center gap-2 hover:bg-white/90 transition">
            Learn More
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
      </div>
    </section>
  );
}
