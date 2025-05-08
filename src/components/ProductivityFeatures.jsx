import { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Send, User, FileText, NotebookPen } from "lucide-react";

export default function ProductivityFeatures() {
  const features = [
    {
      id: "01",
      title: "User-Friendly Interface",
      description: "Our platform offers seamless task management to boost your efficiency.",
      icon: <Layout size={36} className="text-[#ef4454]" />,
    },
    {
      id: "02",
      title: "Collaborate & Share Effortlessly",
      description: "Invite team members to work together and achieve your goals faster.",
      icon: <Send size={36} className="text-[#ef4454]" />,
    },
    {
      id: "03",
      title: "Effortless Collaboration",
      description: "Invite team members to work together and achieve your goals faster.",
      icon: <User size={36} className="text-[#ef4454]" />,
    },
    {
      id: "04",
      title: "Seamless Access",
      description: "Stay connected and manage your tasks on the go with ease.",
      icon: <NotebookPen size={36} className="text-[#ef4454]" />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#170d4e] mb-4">
            Transform Your Productivity with Our
            <br />
            Innovative To-Do List Features
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={featureVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-100 p-6 rounded-lg flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="bg-white w-10 h-10 text-center"
                >
                  {feature.icon}
                </motion.div>
                <span className="text-4xl font-bold text-gray-200">{feature.id}</span>
              </div>
              
              <h3 className="text-lg font-bold text-[#170d4e] mb-2">{feature.title}</h3>
              
              <div className="mb-4">
                <div className="flex space-x-1">
                  <div className="h-1 w-12 bg-[#ef4454] rounded-full"></div>
                  <div className="h-1 w-4 bg-[#ef4454]  rounded-full"></div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}