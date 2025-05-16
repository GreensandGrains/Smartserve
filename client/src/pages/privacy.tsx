
import { motion } from "framer-motion";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/footer";

export default function Privacy() {
  return (
    <div className="font-sans bg-black text-white overflow-x-hidden">
      <Navigation />
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="prose prose-invert max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Information Collection</h2>
            <p>We collect information necessary to provide our Discord bot services, including:</p>
            <ul>
              <li>Discord server information</li>
              <li>User preferences and settings</li>
              <li>Service usage data</li>
            </ul>
            
            <h2>2. Data Usage</h2>
            <p>Collected data is used to:</p>
            <ul>
              <li>Provide and improve services</li>
              <li>Maintain service functionality</li>
              <li>Communicate with users</li>
            </ul>
            
            <h2>3. Data Protection</h2>
            <p>We implement security measures to protect your data and maintain confidentiality.</p>
            
            <h2>4. Third-Party Services</h2>
            <p>We may use third-party services for hosting and analytics.</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
