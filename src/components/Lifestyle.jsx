
import { motion } from "framer-motion";
import mobile from '../assets/mobile.jpg'
const Lifestyle = () => {
  return (
    <div className="max-w-6xl mx-auto">
    <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-10 gap-4 bg-white ">
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ x: -200, scale: 0.8, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <img
          src={mobile}
          alt="Phone App"
          className="rounded-sm shadow-lg w-full h-80 max-w-full mx-auto"
        />
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        >
          Start Organizing Your Life Today
        </motion.h1>
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          Join us now and transform your productivity with our intuitive to-do list platform!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
             <button className="bg-[#ef4454] text-white px-4 py-2 rounded-sm hover:bg-red-600 transition-colors">
          Sign Up
        </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
           <button className="border border-[#ef4454] text-[#ef4454] px-4 py-2 rounded-sm hover:bg-red-50 transition-colors">
          Learn More
        </button>
          </motion.div>
        </div>
      </motion.div>
    </div></div>
  );
};

export default Lifestyle;
