import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const plans = [
  {
    name: "Free",
    price: "0",
    features: [
      { text: "Basic bot functionality", included: true },
      { text: "Up to 5 custom commands", included: true },
      { text: "Basic moderation tools", included: true },
      { text: "Community support only", included: false },
      { text: "Self-hosting required", included: false }
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Standard",
    price: "19.99",
    features: [
      { text: "Advanced bot functionality", included: true },
      { text: "Unlimited custom commands", included: true },
      { text: "24/7 Reliable hosting", included: true },
      { text: "Priority email support", included: true },
      { text: "Monthly updates", included: true }
    ],
    cta: "Select Plan",
    popular: true
  },
  {
    name: "Premium",
    price: "49.99",
    features: [
      { text: "Custom-built bot", included: true },
      { text: "Advanced API integrations", included: true },
      { text: "High-performance hosting", included: true },
      { text: "24/7 priority support", included: true },
      { text: "White-label solution", included: true }
    ],
    cta: "Get Quote",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hex-grid opacity-30"></div>
        
        {/* Animated glowing circles */}
        <motion.div 
          className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-primary rounded-full opacity-30"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Transparent Pricing" 
          description="Choose the plan that works best for your Discord community."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`
                bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-2xl p-8 transition-all duration-500 
                hover:transform hover:-translate-y-2 hover:shadow-2xl shadow-xl
                relative overflow-hidden
                ${plan.popular ? 'border-2 border-primary transform -translate-y-4 relative z-10' : 'border border-gray-700'}
              `}
              style={{
                boxShadow: plan.popular 
                  ? '0 10px 40px -10px rgba(79, 70, 229, 0.5)'
                  : '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Decorative background elements */}
              <div className="absolute inset-0 overflow-hidden">
                {plan.popular && (
                  <>
                    <motion.div 
                      className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </>
                )}
              </div>

              {/* Popular badge */}
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  MOST POPULAR
                </motion.div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8 relative z-10">
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{plan.name}</h3>
                <div className="flex justify-center items-end">
                  <motion.span 
                    className="text-5xl font-bold text-white"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    ${plan.price}
                  </motion.span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                
                {/* Decorative divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-primary/80 to-primary/20 rounded-full mx-auto mt-6"></div>
              </div>
              <ul className="space-y-3 mb-8 relative z-10">
                {plan.features.map((feature, fidx) => (
                  <motion.li 
                    key={fidx} 
                    className={`flex items-start p-2 rounded-lg transition-all ${feature.included ? 'bg-neutral-800/50' : 'bg-neutral-800/20'}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (fidx * 0.1) }}
                    whileHover={feature.included ? { x: 5 } : {}}
                  >
                    {feature.included ? (
                      <motion.div
                        className="flex items-center justify-center w-5 h-5 bg-success/20 rounded-full mt-0.5 mr-3"
                        animate={feature.included ? { scale: [0.9, 1.1, 0.9] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Check className="w-3 h-3 text-success" />
                      </motion.div>
                    ) : (
                      <div className="flex items-center justify-center w-5 h-5 bg-error/10 rounded-full mt-0.5 mr-3">
                        <X className="w-3 h-3 text-error/70" />
                      </div>
                    )}
                    <span className={feature.included ? 'text-gray-200' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <div className="text-center">
                <motion.a 
                  href="#contact" 
                  className={`
                    inline-block w-full px-6 py-3 rounded-full font-medium btn-animated relative overflow-hidden
                    ${plan.popular 
                      ? 'bg-primary text-white glow-effect' 
                      : 'border border-primary text-white'}
                  `}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0px 8px 30px rgba(79, 70, 229, 0.4)"
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">{plan.cta}</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
