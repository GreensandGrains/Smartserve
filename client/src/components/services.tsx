import { motion } from "framer-motion";
import { Bot, Crown, Server, Cog } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const services = [
  {
    icon: <Bot className="text-primary text-2xl" />,
    title: "Free Bots",
    description: "Get started with our free Discord bots with essential features for your server.",
    features: [
      "Basic moderation",
      "Welcome messages",
      "Custom commands"
    ],
    cta: "Get Started",
    ctaLink: "#contact"
  },
  {
    icon: <Crown className="text-primary text-2xl" />,
    title: "Premium Bots",
    description: "Custom-designed bots with advanced features tailored to your specific needs.",
    features: [
      "Advanced functionality",
      "Custom integrations",
      "Priority support"
    ],
    cta: "Learn More",
    ctaLink: "#contact",
    primary: true
  },
  {
    icon: <Server className="text-primary text-2xl" />,
    title: "24/7 Hosting",
    description: "Reliable hosting to keep your bots running smoothly around the clock.",
    features: [
      "99.9% uptime",
      "Performance monitoring",
      "Automatic updates"
    ],
    cta: "View Plans",
    ctaLink: "#contact"
  },
  {
    icon: <Cog className="text-primary text-2xl" />,
    title: "Server Building",
    description: "Professional Discord server setup with optimal channel structure and permissions.",
    features: [
      "Custom roles & channels",
      "Security configuration",
      "Community optimization"
    ],
    cta: "Get Quote",
    ctaLink: "#contact"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hex-grid opacity-30"></div>
        
        {/* Decorative gradient glow */}
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[100px] opacity-40"></div>
        
        {/* Animated diagonal lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                width: '200%',
                left: '-50%',
                top: `${(index + 1) * 12}%`,
                transform: 'rotate(-35deg)',
              }}
              animate={{
                left: '-150%',
              }}
              transition={{
                duration: 15 + index * 2,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Our Services" 
          description="We provide comprehensive Discord bot development and hosting services to enhance your server experience."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={`bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-2xl p-8 transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden ${service.primary ? 'border border-primary' : ''}`}
              style={{
                boxShadow: service.primary 
                  ? "0 10px 30px -5px rgba(79, 70, 229, 0.25)"
                  : "0 10px 30px -5px rgba(0, 0, 0, 0.3)"
              }}
              variants={cardVariants}
            >
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className={`absolute transform rotate-45 bg-gradient-to-br ${service.primary ? 'from-primary to-primary/60' : 'from-neutral-700 to-neutral-800'} w-16 h-16 -translate-y-1/2 translate-x-1/2 opacity-50`}></div>
              </div>
              
              {/* Animated particle elements */}
              {service.primary && Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary/40"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
              <motion.div 
                className="h-20 w-20 rounded-2xl flex items-center justify-center mb-6 mx-auto relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                style={{
                  background: "linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, rgba(79, 70, 229, 0.1) 100%)",
                  boxShadow: "0 4px 20px rgba(79, 70, 229, 0.15)"
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      "linear-gradient(0deg, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0.3) 100%)",
                      "linear-gradient(120deg, rgba(79, 70, 229, 0.3) 0%, rgba(79, 70, 229, 0.1) 100%)",
                      "linear-gradient(240deg, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0.3) 100%)",
                      "linear-gradient(360deg, rgba(79, 70, 229, 0.3) 0%, rgba(79, 70, 229, 0.1) 100%)"
                    ]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="text-primary text-3xl z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {service.icon}
                </motion.div>
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {service.features.map((feature, fidx) => (
                  <motion.li 
                    key={fidx} 
                    className="flex items-center bg-neutral-800/50 p-2 px-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (fidx * 0.1) }}
                  >
                    <div className="flex items-center justify-center w-5 h-5 bg-success/20 rounded-full mr-3">
                      <motion.span 
                        className="text-success text-xs"
                        animate={{ scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✓
                      </motion.span>
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <motion.a 
                  href={service.ctaLink} 
                  className={`inline-block px-6 py-2 ${service.primary ? 'bg-primary text-white' : 'text-white border border-primary'} rounded-full btn-animated relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{service.cta}</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
