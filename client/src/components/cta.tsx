import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 hex-grid opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Discord Server?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the hundreds of communities already using SmartServe's custom Discord bots.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#contact" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium btn-animated glow-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2
              }}
            >
              <span className="relative z-10">Get Started Today</span>
            </motion.a>
            <motion.a 
              href="#services" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium btn-animated"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.4
              }}
            >
              <span className="relative z-10">Explore Services</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
