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
    <section id="testimonials" className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-4">
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
                className="bg-neutral-800 rounded-2xl p-8 shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">{testimonials[currentSlide].name}</h4>
                    <p className="text-gray-400">{testimonials[currentSlide].role}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex text-primary">
                      {[...Array(Math.floor(testimonials[currentSlide].stars))].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      {testimonials[currentSlide].stars % 1 > 0 && (
                        <div className="relative">
                          <Star className="w-4 h-4 text-neutral-600" />
                          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: "50%" }}>
                            <Star className="w-4 h-4 fill-current text-primary" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">{testimonials[currentSlide].content}</p>
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
