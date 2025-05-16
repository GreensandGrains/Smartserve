
import { motion } from "framer-motion";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/footer";

export default function Terms() {
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
            <h1>Terms of Service</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using our Discord bot services, you agree to be bound by these Terms of Service.</p>
            
            <h2>2. Service Description</h2>
            <p>We provide Discord bot development, hosting, and server management services. Our services include but are not limited to custom bot development, 24/7 hosting, and server configuration.</p>
            
            <h2>3. User Obligations</h2>
            <p>Users must:</p>
            <ul>
              <li>Comply with Discord's Terms of Service</li>
              <li>Maintain account security</li>
              <li>Use services responsibly</li>
              <li>Not engage in any malicious activities</li>
            </ul>
            
            <h2>4. Service Modifications</h2>
            <p>We reserve the right to modify or discontinue services with reasonable notice.</p>
            
            <h2>5. Payment Terms</h2>
            <p>Payment terms vary by service tier and are specified in service agreements.</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
