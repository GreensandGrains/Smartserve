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
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 font-medium"
            >
              Get Started Today
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
