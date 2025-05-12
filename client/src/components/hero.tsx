import { motion } from "framer-motion";
import { ChevronDown, Code, Server, Bot, Users } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Hero() {
  // Generate animated particles for the background
  const particles = Array.from({ length: 20 }).map((_, index) => {
    const size = Math.random() * 4 + 2;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 2;
    
    return (
      <motion.div
        key={index}
        className="absolute bg-white rounded-full z-0"
        style={{
          width: size,
          height: size,
          left: `${xPos}%`,
          top: `${yPos}%`,
          opacity: 0.2
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut"
        }}
      />
    );
  });

  // Floating hexagon elements
  const hexagons = [
    { 
      size: "w-24 h-24", 
      position: "top-1/4 left-[10%]", 
      delay: 0, 
      rotation: 15,
      opacity: 0.15,
      duration: 20
    },
    { 
      size: "w-16 h-16", 
      position: "top-[15%] right-[15%]", 
      delay: 2, 
      rotation: -10,
      opacity: 0.1,
      duration: 18
    },
    { 
      size: "w-32 h-32", 
      position: "bottom-[20%] left-[15%]", 
      delay: 1, 
      rotation: 25,
      opacity: 0.12,
      duration: 25
    },
    { 
      size: "w-20 h-20", 
      position: "bottom-[25%] right-[10%]", 
      delay: 0.5, 
      rotation: -20,
      opacity: 0.08,
      duration: 22
    }
  ];

  // Feature icons with labels
  const features = [
    { icon: <Bot size={28} />, text: "Custom Bots" },
    { icon: <Server size={28} />, text: "24/7 Hosting" },
    { icon: <Code size={28} />, text: "Expert Development" },
    { icon: <Users size={28} />, text: "Server Building" }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 hex-grid opacity-70"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-primary/20 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-primary/20 to-transparent opacity-30"></div>
        
        {/* Animated Glow Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-30">
          <motion.div 
            className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Floating particles */}
        {particles}
        
        {/* Floating hexagons */}
        {hexagons.map((hex, index) => (
          <motion.div
            key={index}
            className={`absolute ${hex.position} ${hex.size} opacity-${hex.opacity * 100} z-0`}
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: hex.rotation,
              y: [0, -20, 0]
            }}
            transition={{
              rotate: {
                duration: hex.duration,
                repeat: Infinity,
                ease: "linear"
              },
              y: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: hex.delay
              }
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Main animated logo */}
          <motion.div 
            className="mx-auto mb-8 relative"
            animate={{
              y: [0, -20, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Logo size="large" />
            <motion.div
              className="absolute -inset-10 rounded-full opacity-20 blur-xl"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(79,70,229,0.5) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 70%)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary">Smart</span>Serve
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional Discord Bot Development & Hosting
          </motion.p>
          
          {/* Feature Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-2 text-primary">
                  {feature.icon}
                </div>
                <span className="text-sm font-medium text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="#services" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium btn-animated glow-effect relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Our Services</span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium btn-animated relative overflow-hidden"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Us</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a href="#services" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
}
