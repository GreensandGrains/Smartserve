import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, User, Star } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const testimonials = [
  {
    name: "Alex Mitchell",
    role: "Gaming Community Owner",
    stars: 5,
    content: "SmartServe created a custom bot for our gaming community that tracks player stats and organizes tournaments. It's been a game-changer for our server engagement. Their 24/7 hosting ensures we never have downtime."
  },
  {
    name: "Sarah Johnson",
    role: "Educational Server Admin",
    stars: 4.5,
    content: "We needed a bot that could help manage our educational Discord server, and SmartServe delivered exactly what we needed. The study reminder features and quiz functionality have made our server so much more useful."
  },
  {
    name: "Michael Zhang",
    role: "Tech Community Founder",
    stars: 5,
    content: "The team at SmartServe not only built us an amazing bot, but they also helped optimize our entire server structure. Their attention to detail and ongoing support have been invaluable for our growing tech community."
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hex-grid opacity-20"></div>
        
        {/* Gradient overlays */}
        <motion.div 
          className="absolute -left-[20%] top-[20%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px]"
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -right-[20%] bottom-[20%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px]"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating quote marks */}
        <motion.div
          className="absolute top-[15%] left-[10%] text-primary/10 text-[120px] font-serif"
          animate={{
            y: [0, -15, 0],
            rotate: [-5, 5, -5],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          "
        </motion.div>
        
        <motion.div
          className="absolute bottom-[15%] right-[10%] text-primary/10 text-[120px] font-serif"
          animate={{
            y: [0, -15, 0],
            rotate: [5, -5, 5],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          "
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="What Our Clients Say" 
          description="Hear from Discord server owners who have used our services."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Slides */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-700 relative overflow-hidden"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.5)"
                }}
              >
                {/* Testimonial decorative quotes */}
                <div className="absolute -top-2 -left-2 text-5xl text-primary/20 font-serif">"</div>
                <div className="absolute -bottom-10 -right-2 text-5xl text-primary/20 font-serif">"</div>
                
                {/* Content overlay with animated gradient */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 70%)",
                  }}
                  animate={{
                    opacity: [0.05, 0.1, 0.05]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* User info with animation */}
                <motion.div 
                  className="flex items-center mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <User className="w-8 h-8 text-primary" />
                  </motion.div>
                  <div className="ml-4">
                    <motion.h4 
                      className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {testimonials[currentSlide].name}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {testimonials[currentSlide].role}
                    </motion.p>
                  </div>
                  <motion.div 
                    className="ml-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex text-primary">
                      {[...Array(Math.floor(testimonials[currentSlide].stars))].map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.3 + (i * 0.1) }}
                        >
                          <Star className="w-4 h-4 fill-current" />
                        </motion.div>
                      ))}
                      {testimonials[currentSlide].stars % 1 > 0 && (
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.3 + (Math.floor(testimonials[currentSlide].stars) * 0.1) }}
                        >
                          <Star className="w-4 h-4 text-neutral-600" />
                          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: "50%" }}>
                            <Star className="w-4 h-4 fill-current text-primary" />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Testimonial text with animation */}
                <motion.p 
                  className="text-gray-300 italic relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {testimonials[currentSlide].content}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <motion.div 
              className="flex justify-center mt-8 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-neutral-600'} transition-all`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
