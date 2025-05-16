
import { motion } from "framer-motion";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/footer";

export default function FairUse() {
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
            <h1>Fair Use Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Service Usage</h2>
            <p>To ensure quality service for all users:</p>
            <ul>
              <li>Reasonable API call limits apply</li>
              <li>Resource usage restrictions may be implemented</li>
              <li>Automated abuse prevention measures are in place</li>
            </ul>
            
            <h2>2. Bot Commands</h2>
            <p>Users should:</p>
            <ul>
              <li>Use commands appropriately</li>
              <li>Avoid spam or excessive usage</li>
              <li>Respect rate limits</li>
            </ul>
            
            <h2>3. Hosting Limitations</h2>
            <p>Fair use limits apply to hosted bots to maintain service quality.</p>
            
            <h2>4. Compliance</h2>
            <p>Violation of fair use policies may result in service restrictions.</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
