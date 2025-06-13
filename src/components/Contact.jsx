import React, { useState } from 'react';
import { motion } from 'framer-motion';
import houseBg from "../assets/house.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validation for name field - no numeric values
    if (name === 'name') {
      if (/\d/.test(value)) {
        setErrors({...errors, name: 'Name should not contain numbers'});
      } else {
        const newErrors = {...errors};
        delete newErrors.name;
        setErrors(newErrors);
      }
    }
    
    // Validation for phone field - no alphabetic characters
    if (name === 'phone') {
      if (/[a-zA-Z]/.test(value)) {
        setErrors({...errors, phone: 'Phone number should not contain letters'});
      } else {
        const newErrors = {...errors};
        delete newErrors.phone;
        setErrors(newErrors);
      }
    }
    
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if there are any validation errors
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        alert('Form has been submitted');
        setSubmitted(false);
      }, 300);
    }
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
          <div>
            <input
              type="text"
              name="name"
              placeholder="Waeez Ali"
              className="p-3 rounded text-black w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>
          
          <input
            type="email"
            name="email"
            placeholder="xyz12@gmail.com"
            className="p-3 rounded text-black"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="+92-312-1234-5678"
              className="p-3 rounded text-black w-full"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
          </div>
          
          <textarea
            name="message"
            placeholder="Your text here"
            rows="4"
            className="p-3 rounded text-black"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-14 text-center"
          >
            <button 
              className="z-10 relative bg-[#E9BA6C] text-black px-8 py-3 rounded-full text-sm font-light inline-flex items-center gap-2 hover:bg-white/90 transition"
              disabled={Object.keys(errors).length > 0}
            >
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