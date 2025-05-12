import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Showcase from "@/components/showcase";
import Pricing from "@/components/pricing";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content Sections */}
      <Hero />
      <Services />
      <Showcase />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.a
            href="#hero"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg z-40"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
