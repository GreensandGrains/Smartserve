import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const faqItems = [
  {
    question: "What types of Discord bots can you create?",
    answer: "We can develop various types of Discord bots including moderation bots, music bots, gaming bots, welcome bots, ticket systems, leveling systems, economy bots, and custom utility bots. Our team can build almost any functionality you need for your server."
  },
  {
    question: "How does your 24/7 hosting work?",
    answer: "Our 24/7 hosting service ensures your bot remains online at all times. We use reliable cloud infrastructure with monitoring systems to detect and address any issues immediately. Regular backups and updates are included to keep your bot running smoothly."
  },
  {
    question: "What's included in the server building service?",
    answer: "Our server building service includes setting up optimal channel structures, role hierarchies with permissions, security configurations, custom welcome messages, verification systems, and aesthetic elements like channel icons and server banners. We'll work with you to create a professional server environment tailored to your community needs."
  },
  {
    question: "How long does it take to develop a custom bot?",
    answer: "Development time varies based on complexity. Simple bots can be ready in 1-3 days, while more complex projects may take 1-2 weeks. During our initial consultation, we'll provide a timeline estimate for your specific requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Frequently Asked Questions" 
          description="Find answers to common questions about our Discord bot services."
        />

        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
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
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-neutral-800 rounded-xl overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
            >
              <button 
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-bold text-left">{item.question}</span>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
