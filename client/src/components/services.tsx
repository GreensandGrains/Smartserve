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
      <div className="container mx-auto px-4">
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
              className={`bg-neutral-800 rounded-2xl p-6 transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-2xl ${service.primary ? 'border border-primary' : ''}`}
              variants={cardVariants}
            >
              <div className="service-icon-container bg-neutral-700 h-16 w-16 rounded-2xl flex items-center justify-center mb-6 mx-auto relative overflow-hidden group-hover:after:opacity-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {service.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center">
                    <span className="text-success mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <a 
                  href={service.ctaLink} 
                  className={`inline-block px-6 py-2 ${service.primary ? 'bg-primary text-white' : 'text-white border border-primary'} rounded-full hover:bg-primary hover:text-white transition-all duration-300`}
                >
                  {service.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
