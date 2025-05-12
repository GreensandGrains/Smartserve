import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    title: "ModeratorBot",
    description: "Advanced moderation bot with customizable auto-moderation and logging features.",
    tags: ["Moderation", "Logging", "Auto-mod"]
  },
  {
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    title: "MelodyMaster",
    description: "High-quality music streaming bot with playlist management and audio effects.",
    tags: ["Music", "Streaming", "Playlists"]
  },
  {
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    title: "GameMaster",
    description: "Gaming-focused bot with stats tracking, tournaments, and matchmaking features.",
    tags: ["Gaming", "Stats", "Tournaments"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hex-grid opacity-20"></div>
        
        {/* Background gradient glow */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-primary/10 to-transparent opacity-30"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 10, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        {/* Animated lines - modern tech feel */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              style={{
                width: '100%',
                left: '0',
                top: `${(index + 1) * 20}%`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                width: ['0%', '100%', '0%'],
                left: ['0%', '0%', '100%']
              }}
              transition={{
                duration: 15 + index * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Our Work" 
          description="Check out some of our custom Discord bots and server setups."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative"
              style={{
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)"
              }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
            >
              {/* Add decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden z-10">
                <div className="absolute transform rotate-45 bg-gradient-to-br from-primary/30 to-primary/10 w-16 h-16 -translate-y-1/2 translate-x-1/2 opacity-70"></div>
              </div>
              
              <div className="h-48 overflow-hidden relative">
                {/* Overlay gradient on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                />
                
                {/* Image with scale effect */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Animated overlay border */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-primary/80"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                />
              </div>
              
              <div className="p-6 relative">
                {/* Title with gradient text */}
                <motion.h3 
                  className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {item.title}
                </motion.h3>
                
                {/* Description with animation */}
                <motion.p 
                  className="text-gray-400 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {item.description}
                </motion.p>
                
                {/* Tags with staggered animation */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {item.tags.map((tag, tidx) => (
                    <motion.span 
                      key={tidx} 
                      className="px-3 py-1 bg-neutral-700/80 text-xs rounded-full hover:bg-primary/20 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.3 + (tidx * 0.1) }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium btn-animated glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Request Custom Project</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
