import { useState } from "react";
import { motion } from "framer-motion";

export default function SocialMediaBar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const platforms = [
    {
      id: "google",
      name: "Google",
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
          />
        </svg>
      ),
    },
    {
      id: "facebook",
      name: "Facebook",
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M9.101,23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085,1.848-5.978,5.858-5.978c0.401,0,0.955,0.042,1.569,0.103 v3.149h-1.106c-1.8,0-2.169,0.869-2.169,2.169v2.137h3.313l-0.795,3.667h-2.518v7.98H9.101z"
          />
        </svg>
      ),
    },
    {
      id: "youtube",
      name: "YouTube",
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504 C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136 C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12 S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z"
          />
        </svg>
      ),
    },
    {
      id: "pinterest",
      name: "Pinterest",
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M12,2C6.477,2,2,6.477,2,12c0,4.237,2.636,7.855,6.356,9.312c-0.087-0.791-0.167-2.005,0.035-2.868 c0.182-0.78,1.172-4.971,1.172-4.971s-0.299-0.599-0.299-1.484c0-1.391,0.807-2.428,1.81-2.428c0.853,0,1.265,0.641,1.265,1.408 c0,0.858-0.546,2.141-0.828,3.329c-0.236,0.996,0.499,1.807,1.481,1.807c1.777,0,3.143-1.874,3.143-4.579 c0-2.394-1.72-4.068-4.177-4.068c-2.845,0-4.515,2.134-4.515,4.34c0,0.859,0.331,1.781,0.744,2.282 c0.082,0.099,0.093,0.186,0.069,0.287c-0.076,0.316-0.244,0.995-0.277,1.134c-0.043,0.183-0.145,0.222-0.334,0.133 c-1.249-0.582-2.03-2.408-2.03-3.874c0-3.154,2.292-6.052,6.608-6.052c3.469,0,6.165,2.472,6.165,5.776 c0,3.447-2.173,6.22-5.189,6.22c-1.013,0-1.965-0.526-2.291-1.149c0,0-0.501,1.909-0.623,2.374 c-0.225,0.868-0.834,1.956-1.241,2.62C10.301,21.77,11.141,22,12,22c5.522,0,10-4.478,10-10C22,6.477,17.523,2,12,2z"
          />
        </svg>
      ),
    },
    {
      id: "twitch",
      name: "Twitch",
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M2.149,0L0.496,4.301v16.343h5.271v3.012h2.984L11.798,20.644h4.425l5.942-5.942V0H2.149z M19.172,13.681l-3.422,3.422h-5.444l-3.046,3.046v-3.046H2.495V2.247h16.677V13.681z M8.112,12.024l2.247-0.007V5.271H8.112V12.024z M14.396,12.024l2.247-0.007V5.271h-2.247V12.024z"
          />
        </svg>
      ),
    },
  ];

  const iconVariants = {
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    initial: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    
    <div className="max-w-6xl mx-auto bg-gray-100 py-8 flex justify-center items-center">
      <div className="max-w-6xl w-full flex justify-center lg:justify-between items-center gap-5 mx-auto md:px-8 flex-wrap">
        {platforms.map((platform) => (
       <motion.div
       key={platform.id}
       className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-300 flex items-center space-x-2"
       onMouseEnter={() => setHoveredIcon(platform.id)}
       onMouseLeave={() => setHoveredIcon(null)}
       variants={iconVariants}
       initial="initial"
       animate={hoveredIcon === platform.id ? "hover" : "initial"}
     >
       <div className="flex items-center space-x-1">
        
           <>
             <div className="w-6 h-6 sm:w-8 sm:h-8 text-xl sm:text-2xl">
               {platform.logo}
             </div>
             <span className="text-sm sm:text-base font-medium capitalize">
               {platform.id}
             </span>
           </>
         
       </div>
     </motion.div>
     
        ))}
      </div>
    </div>
  );
}