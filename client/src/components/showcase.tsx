import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section className="relative py-24 flex items-center justify-center" style={{ height: "500px" }}>
      {/* Digital technology background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/70 z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundAttachment: "fixed"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Building the Future of Discord
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our custom bots are designed to enhance your Discord community with cutting-edge features and seamless integration.
        </motion.p>
        
        <motion.a
          href="#portfolio"
          className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium btn-animated glow-effect"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">View Our Work</span>
        </motion.a>
      </div>
    </section>
  );
}
