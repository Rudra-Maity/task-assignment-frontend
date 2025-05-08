import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoCarousel from './components/VideoCarousel';
import Partners from './components/Partner';
import Header from './components/Header';
import ProductivityFeatures from './components/ProductivityFeatures';
import Modal from './components/Modal';
import Hero from './components/HeroLayout';
import Footer from './components/Footer';
import Table from './components/Table';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Female',
    language: ['English'],
    email: '',
    agreeToTerms: false
  });
  const [submissions, setSubmissions] = useState([
    { id: 1, name: 'John Doe', gender: 'Male', language: 'English', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', gender: 'Female', language: 'English, Hindi', email: 'jane@example.com' }
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'agreeToTerms') {
        setFormData({ ...formData, [name]: checked });
      } else {
        const updatedLanguages = [...formData.language];
        if (checked) {
          updatedLanguages.push(value);
        } else {
          const index = updatedLanguages.indexOf(value);
          if (index > -1) {
            updatedLanguages.splice(index, 1);
          }
        }
        setFormData({ ...formData, language: updatedLanguages });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsModalOpen(false);
    setIsThankYouModalOpen(true);

    const newSubmission = {
      id: submissions.length + 1,
      name: `${formData.firstName} ${formData.lastName}`,
      gender: formData.gender,
      language: formData.language.join(', '),
      email: formData.email
    };

    setSubmissions([...submissions, newSubmission]);

    setFormData({
      firstName: '',
      lastName: '',
      gender: 'Female',
      language: ['English'],
      email: '',
      agreeToTerms: false
    });

    setTimeout(() => {
      setIsThankYouModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <Header />

      <section className="max-w-6xl mx-auto py-8 px-5 pt-40">
        <div className="text-center mb-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-[#170d4e] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Simplify Your Life with Our Todo App
          </motion.h1>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay organized and boost your productivity with our intuitive todo website.
            Experience a modern approach to task management that fits your lifestyle.
          </motion.p>
          <div className="mt-8 flex justify-center space-x-4">
            <motion.button
              className="bg-[#ef4454] text-white font-bold px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              Get started
            </motion.button>
            <motion.button
              className="border border-red-500 text-[#ef4454] px-6 py-2 rounded-full hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </motion.button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  gap-6 mt-10">
          <motion.div
            className="bg-[#ef4454] text-white p-8 rounded-2xl flex-[60%]  relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-gray-300">Organize.</h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">Achieve.</h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Relax.</h2>

            <p className="mb-10">
              Turn clutter into clarity, chaos into control, and dreams into done: bold
              visions into market success.
            </p>
            <div className="flex space-x-4 flex-wrap gap-4">
              <motion.button
                className="bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
              >
                Get Started Today
              </motion.button>
              <motion.button
                className="backdrop-blur-sm bg-white/30 font-bold  text-white px-4 py-3 rounded-full hover:bg-white/40 transition "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Features
              </motion.button>
            </div>
          </motion.div>

          <VideoCarousel />
        </div>
      </section>

      {/* Partners Section */}
      <Partners />
      {/* productivity features */}
      <ProductivityFeatures />
      {/* Hero Section  */}
      <Hero />

      {/* Submissions Table */}
      {submissions.length > 0 && (
       <Table submissions={submissions} />
      )}

      {/* modal  */}
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isThankYouModalOpen={isThankYouModalOpen}
        setIsThankYouModalOpen={setIsThankYouModalOpen}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
 <Footer />
    </div>
  );
}
