import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const faqItems = [
  {
    question: "What types of Discord bots can you create?",
    answer: "We can develop various types of Discord bots including moderation bots, music bots, gaming bots, welcome bots, ticket systems, leveling systems, economy bots, and custom utility bots. Our team can build almost any functionality you need for your server."
  },
  {
    question: "How does your 24/7 hosting work?",
    answer: "Our 24/7 hosting service ensures your bot remains online at all times. We use reliable cloud infrastructure with monitoring systems to detect and address any issues immediately. Regular backups and updates are included to keep your bot running smoothly."
  },
  {
    question: "What's included in the server building service?",
    answer: "Our server building service includes setting up optimal channel structures, role hierarchies with permissions, security configurations, custom welcome messages, verification systems, and aesthetic elements like channel icons and server banners. We'll work with you to create a professional server environment tailored to your community needs."
  },
  {
    question: "How long does it take to develop a custom bot?",
    answer: "Development time varies based on complexity. Simple bots can be ready in 1-3 days, while more complex projects may take 1-2 weeks. During our initial consultation, we'll provide a timeline estimate for your specific requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hex-grid opacity-20"></div>
        
        {/* Animated gradient blobs */}
        <motion.div 
          className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] opacity-40"
          animate={{ 
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] opacity-30"
          animate={{ 
            y: [0, -50, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        
        {/* Animated question mark decoration */}
        <motion.div
          className="absolute top-1/4 left-[5%] text-6xl text-primary/10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ?
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-[5%] text-6xl text-primary/10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 0, 5, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          ?
        </motion.div>
        
        {/* Decorative connecting lines */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                width: '80%',
                left: '10%',
                top: `${30 + (index * 20)}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 10 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 2
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Frequently Asked Questions" 
          description="Find answers to common questions about our Discord bot services."
        />

        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl overflow-hidden border border-neutral-700/50 shadow-lg relative"
              style={{
                boxShadow: openIndex === index 
                  ? "0 8px 25px -5px rgba(79, 70, 229, 0.15)" 
                  : "0 5px 15px -5px rgba(0, 0, 0, 0.2)"
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
            >
              {/* Decorative corner elements for active item */}
              {openIndex === index && (
                <>
                  <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden">
                    <div className="absolute bg-gradient-to-br from-primary/20 to-transparent w-14 h-14 -translate-y-1/2 -translate-x-1/2 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 overflow-hidden">
                    <div className="absolute bg-gradient-to-tl from-primary/20 to-transparent w-14 h-14 translate-y-1/2 translate-x-1/2 rounded-full"></div>
                  </div>
                </>
              )}
              
              <motion.button 
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                whileHover={{ 
                  backgroundColor: "rgba(79, 70, 229, 0.05)"
                }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className={`font-bold text-left ${openIndex === index ? 'text-primary' : 'text-white'} transition-colors duration-300`}
                  animate={openIndex === index ? { scale: 1.02 } : { scale: 1 }}
                >
                  {item.question}
                </motion.span>
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0,
                    backgroundColor: openIndex === index ? "rgba(79, 70, 229, 0.1)" : "rgba(0, 0, 0, 0)"
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                >
                  <ChevronDown className="text-primary w-5 h-5" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <motion.div
                        className="relative overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {/* Left border accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"></div>
                        
                        {/* Content with subtle gradient background */}
                        <div className="pl-5 py-2 rounded-r-lg bg-gradient-to-r from-neutral-700/20 to-transparent">
                          <motion.p 
                            className="text-gray-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {item.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
