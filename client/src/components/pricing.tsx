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
    <section id="pricing" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
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
                bg-neutral-800 rounded-2xl p-8 transition-all duration-500 
                hover:transform hover:-translate-y-2 hover:shadow-2xl shadow-xl
                ${plan.popular ? 'border-2 border-primary transform -translate-y-4 relative z-10' : 'border border-gray-700'}
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex justify-center items-end">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400 ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-success mt-1 mr-3" />
                    ) : (
                      <X className="w-5 h-5 text-error mt-1 mr-3" />
                    )}
                    <span className={feature.included ? 'text-gray-300' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <a 
                  href="#contact" 
                  className={`
                    inline-block w-full px-6 py-3 rounded-full transition-all duration-300 font-medium
                    ${plan.popular 
                      ? 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/20' 
                      : 'border border-primary text-white hover:bg-primary hover:text-white'}
                  `}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
