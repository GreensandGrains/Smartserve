import { motion } from "framer-motion";
import { Code, Bot, Star, MessageCircle } from "lucide-react";

export default function Showcase() {
  // Tech floating elements
  const techElements = [
    { icon: <Code className="w-8 h-8" />, position: "top-1/4 left-[15%]", delay: 0, scale: 1 },
    { icon: <Bot className="w-10 h-10" />, position: "top-1/3 right-[20%]", delay: 0.2, scale: 1.2 },
    { icon: <MessageCircle className="w-7 h-7" />, position: "bottom-1/4 left-[25%]", delay: 0.4, scale: 0.9 },
    { icon: <Star className="w-6 h-6" />, position: "bottom-1/3 right-[15%]", delay: 0.6, scale: 0.8 }
  ];

  return (
    <section className="relative py-32 flex items-center justify-center" style={{ minHeight: "600px" }}>
      {/* Digital technology background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-primary/30 z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundAttachment: "fixed"
          }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Animated particle overlay */}
        <div className="absolute inset-0 z-20 opacity-30">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        {/* Floating tech icons */}
        {techElements.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position} text-white opacity-40 z-10`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.4, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: item.delay }}
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0, -5, 0],
                scale: [item.scale, item.scale * 1.1, item.scale]
              }}
              transition={{ 
                duration: 6 + index, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {item.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-30 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block mb-6 p-2 rounded-full bg-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1 text-sm font-medium text-white bg-primary/80 rounded-full">
              Next Generation
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building the Future of Discord
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our custom bots are designed to enhance your Discord community with cutting-edge features and seamless integration.
          </motion.p>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
            
            <motion.a
              href="#portfolio"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium btn-animated glow-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Our Work</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
