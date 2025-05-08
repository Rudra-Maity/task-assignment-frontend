import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import projectImg from '../assets/project.jpg'
import ctoImg from '../assets/cto.jpg'
import marketingImg from '../assets/marketing.jpg'

const testimonials = [
    {
        id: 1,
        quote: "Using this website has made my tasks so much easier! I can't imagine my day without it.",
        name: "Sherri Cronin",
        title: "Project Manager, TechCorp",
        image: projectImg
    },
    {
        id: 2,
        quote: "This tool has transformed my productivity and organization!",
        name: "Alex Johnson",
        title: "Marketing Director, Innovate Inc",
        image: marketingImg
    },
    {
        id: 3,
        quote: "The interface is intuitive and the features are exactly what our team needed.",
        name: "Maria Rodriguez",
        title: "CTO, StartUp Labs",
        image: ctoImg
    }
];

const CarouselButton = ({ onClick, children, direction, className }) => (
    <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md",
            "hover:bg-gray-100 transition-all duration-300 ease-in-out",
            className
        )}
        aria-label={`Navigate ${direction}`}
    >
        {children}
    </motion.button>
);

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 overflow-hidden">
            <h1 className="text-5xl font-bold text-navy-900 mb-6 text-[#170d4e]">Customer Testimonials</h1>
            <p className="text-lg  text-[#170d4e]  mb-16">This tool has transformed my productivity and organization!</p>
        
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <div className=" p-6 md:p-10 rounded-lg bg-white relative">
                    <div className="absolute top-0 left-0 hidden lg:flex">
                        <div className="h-96 w-4 bg-red-500"></div>
                        <div className="w-96 h-4 bg-red-500"></div>
                        <div className="w-4 h-14 bg-red-500"></div>
                    </div>

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={currentTestimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex  md:flex-row items-center gap-8 flex-col-reverse "
                        >
                            <div className="flex-1 space-y-4 pt-20 p-6 ">
                                <blockquote className="text-xl md:text-4xl font-medium">
                                    "{currentTestimonial.quote}"
                                </blockquote>

                                <div className="flex items-center space-x-3">
                                    <div className="relative flex-shrink-0">
                                        <div className="h-5 w-5 bg-red-500"></div>
                                        <div className="absolute top-1/2 left-full w-12 h-px bg-black mr-4 transform -translate-y-2/2"></div>
                                    </div>
                                    <div className='ml-3' style={{ marginLeft: '4rem' }}>
                                        <p className="font-semibold text-gray-900">{currentTestimonial.name}</p>
                                        <p className="text-gray-600 text-sm">{currentTestimonial.title}</p>
                                    </div>
                                </div>


                                <div className="flex space-x-2 pt-4 pb-12">
                                    <CarouselButton onClick={goToPrevious} direction="previous" className="border-red-500 border-4">
                                        <ChevronLeft size={18} />
                                    </CarouselButton>
                                    <CarouselButton onClick={goToNext} direction="next" className="border-red-500 bg-red-500 text-white hover:bg-red-600">
                                        <ChevronRight size={18} />
                                    </CarouselButton>
                                </div>
                            </div>

                            <motion.div
                                className="relative  border-[#ef4454] border-[20px]  overflow-hidden w-full md:w-64 h-64 md:h-80 border-l-0 "
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    className="w-full h-full object-cover p-2 pl-0"
                                />
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute bottom-0 left-0 hidden lg:flex items-end">
                        <div className="h-56 w-4 bg-red-500"></div>
                        <div className="w-96 h-4 bg-red-500"></div>
                        <div className="w-4 h-14 bg-red-500"></div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
