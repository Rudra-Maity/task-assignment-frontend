import { AnimatePresence ,motion} from "framer-motion";
import { Heart, X } from "lucide-react";

export default function Modal({isModalOpen,formData,handleChange,handleSubmit,setIsModalOpen,setIsThankYouModalOpen,isThankYouModalOpen}){
    return (
    <>
       {/* Registration Modal */}
       <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-xl w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Get Started Today!</h2>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-gray-600 mb-6">Fill in your details and take control of your tasks.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className="w-full px-3 py-2 bg-red-50 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="w-full px-3 py-2 bg-red-50 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          checked={formData.gender === 'Male'}
                          onChange={handleChange}
                          className="h-4 w-4 text-red-500 focus:ring-red-500"
                        />
                        <span className="ml-2 text-gray-700">Male</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={formData.gender === 'Female'}
                          onChange={handleChange}
                          className="h-4 w-4 text-red-500 focus:ring-red-500"
                        />
                        <span className="ml-2 text-gray-700">Female</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                    <div className="space-y-2">
                      <label className="flex items-center bg-red-50 px-3 py-2 rounded-md">
                        <input
                          type="checkbox"
                          name="language"
                          value="English"
                          checked={formData.language.includes('English')}
                          onChange={handleChange}
                          className="h-4 w-4 text-red-500 focus:ring-red-500 rounded"
                        />
                        <span className="ml-2 text-gray-700">English</span>
                      </label>
                      <label className="flex items-center bg-red-50 px-3 py-2 rounded-md">
                        <input
                          type="checkbox"
                          name="language"
                          value="Hindi"
                          checked={formData.language.includes('Hindi')}
                          onChange={handleChange}
                          className="h-4 w-4 text-red-500 focus:ring-red-500 rounded"
                        />
                        <span className="ml-2 text-gray-700">Hindi</span>
                      </label>
                      <label className="flex items-center bg-red-50 px-3 py-2 rounded-md">
                        <input
                          type="checkbox"
                          name="language"
                          value="Marathi"
                          checked={formData.language.includes('Marathi')}
                          onChange={handleChange}
                          className="h-4 w-4 text-red-500 focus:ring-red-500 rounded"
                        />
                        <span className="ml-2 text-gray-700">Marathi</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full px-3 py-2 bg-red-50 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="h-4 w-4 text-red-500 focus:ring-red-500 rounded"
                        required
                      />
                      <span className="ml-2 text-gray-700 text-sm">
                        I agree to the <span className="text-red-500">terms and conditions</span>
                      </span>
                    </label>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Done
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You Modal */}
      <AnimatePresence>
        {isThankYouModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }} 
                transition={{ delay: 0.2, type: 'spring' }}
                className="flex justify-center mb-4"
              >
                <Heart size={30} className="text-red-500" fill="currentColor" />
              </motion.div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Thank you for connect with us.</h3>
              <p className="text-gray-600 mb-6">Our team will contacting with you soon.</p>
              <motion.button
                onClick={() => setIsThankYouModalOpen(false)}
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Done
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>)
}