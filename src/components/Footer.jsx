import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    BookMinus,
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
} from 'lucide-react';
import Logo from './Logo';

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState('idle'); 

  const handleSubmit = () => {
    if (!email) return;
    
    setFormState('loading');
    
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1000);
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      className="bg-white pt-12 pb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-2 ">
      <div className="grid grid-cols-1 lg:grid-cols-[44%,repeat(3,1fr)] gap-4 justify-center">

          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1 ">
          <Logo />
            
            <p className="mb-4 text-gray-600 p-4">
              Subscribe to our newsletter for the latest features and updates delivered to you.
            </p>
            
            <div className="space-y-3 flex flex-wrap gap-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email here"
                  className="w-full mt-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent py-4 bg-white px-6"
                  disabled={formState === 'loading' || formState === 'success'}
                />
              </div>
              
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-32 h-14   rounded-md font-medium text-white",
                  formState === 'loading' ? "bg-red-400" : 
                  formState === 'success' ? "bg-green-500" : "bg-red-500"
                )}
                disabled={formState === 'loading' || formState === 'success'}
              >
                {formState === 'loading' ? 'Submitting...' : 
                 formState === 'success' ? 'Joined!' : 'Join'}
              </motion.button>
              
              <p className="text-xs text-gray-500">
                By subscribing, you consent to our Privacy Policy and agree to receive updates.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="col-span-1 text-start">
            <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['Home Page', 'About Us', 'Contact Us', 'Blog Posts', 'FAQs'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants} className="col-span-1 text-start">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Help Center', 'User Guide', 'Community Forum', 'Feedback', 'Support'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants} className="col-span-1 text-start">
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <ul className="space-y-4">
              {[
                { name: 'Facebook', icon: <Facebook size={18} /> },
                { name: 'Instagram', icon: <Instagram size={18} /> },
                { name: 'X', icon: 'X' },
                { name: 'LinkedIn', icon: <Linkedin size={18} /> },
                { name: 'YouTube', icon: <Youtube size={18} /> },
              ].map((item) => (
                <motion.li key={item.name} whileHover={{ scale: 1.05 }}>
                  <a 
                    href="#" 
                    className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <span className="inline-flex items-center justify-center h-6 w-6 mr-2 text-red-500">
                      {typeof item.icon === 'string' ? item.icon : item.icon}
                    </span>
                    <span>{item.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-200 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 Osumare. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Cookie Settings</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}