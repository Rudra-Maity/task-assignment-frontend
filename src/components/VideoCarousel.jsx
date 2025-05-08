import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Dot } from "lucide-react";
import { cn } from "@/lib/utils";
import thumb1 from "../assets/thumb1.webp"
import thumb2 from "../assets/thumb2.webp"
import thumb3 from "../assets/thumb3.webp"

const videoData = [
  {
    id: 1,
    title: "Your Tasks. Our Tools.",
    name: "Freddie Halvorson",
    role: "Chief Productivity Enthusiast",
    avatar: thumb1,
    videoThumbnail: thumb1,
    logo: "logoipsum"
  },
  {
    id: 2,
    title: "Smart Solutions. Better Results.",
    name: "Amelia Parker",
    role: "Head of Innovation",
    avatar: thumb2,
    videoThumbnail: thumb2,
    logo: "logoipsum"
  },
  {
    id: 3,
    title: "Seamless Integration. Powerful Tools.",
    name: "Marcus Chen",
    role: "Solutions Architect",
    avatar: thumb3,
    videoThumbnail: thumb3,
    logo: "logoipsum"
  }
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef(null);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoData.length - 1 : prevIndex - 1
    );
  };

  // Setup autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0
    })
  };

  return (
    <motion.div  className="flex items-center justify-center bg-white rounded-2xl shadow-md flex-[40%] relative overflow-hidden "
    initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
    >
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Carousel Container */}
        <div className="relative h-96 md:h-[32rem] w-full">
          {/* Slide Content */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full"
            >
              <div 
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${videoData[currentIndex].videoThumbnail})` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                 
                <div className="absolute top-0 left-0 w-full p-4 text-white z-10">
                  <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">{videoData[currentIndex].title}</h1>
                    {/* Three dots moved to right of title */}
                    <div className="flex space-x-1">
                    {videoData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  currentIndex === index ? "bg-white " : "bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
                    </div>
                  </div>
                </div>
                
                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-3 flex items-center">
                  <div className="p-2 flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 rounded-full flex overflow-hidden">
                        <img 
                          src={videoData[currentIndex].avatar} 
                          alt={videoData[currentIndex].name}
                          className="h-full w-full object-cover"
                        />
                         
                      </div>
                      <div>
                        <div className="text-white text-sm opacity-80">{videoData[currentIndex].logo}</div>
                        <h3 className="font-semibold text-white">
                          {videoData[currentIndex].name}
                        </h3>
                        <p className="text-sm text-white/80">
                          {videoData[currentIndex].role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      {/* Logo moved to right side */}
                     
                      <div className="flex-shrink-0">
                        <button 
                          className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-black transition-colors"
                          aria-label="Play video"
                        >
                          <Play size={24} className="fill-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
     </motion.div>
  );
}