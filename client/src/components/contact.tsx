import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, MessageSquare, Clock, Twitter, Github, Linkedin, 
  AlertCircle
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/ui/section-heading";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! We'll get back to you shortly.",
        variant: "default"
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get In Touch" 
          description="Ready to enhance your Discord server? Contact us to discuss your project."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="bg-neutral-800 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className={`w-full px-4 py-3 bg-neutral-700 border ${errors.name ? 'border-red-500' : 'border-neutral-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white`} 
                  placeholder="Enter your name" 
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full px-4 py-3 bg-neutral-700 border ${errors.email ? 'border-red-500' : 'border-neutral-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white`} 
                  placeholder="Enter your email" 
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In
                </label>
                <select 
                  id="service" 
                  className={`w-full px-4 py-3 bg-neutral-700 border ${errors.service ? 'border-red-500' : 'border-neutral-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white`} 
                  {...register("service")}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="free-bot">Free Bot</option>
                  <option value="premium-bot">Premium Bot</option>
                  <option value="hosting">24/7 Hosting</option>
                  <option value="server-building">Server Building</option>
                  <option value="other">Other Inquiry</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.service.message}
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className={`w-full px-4 py-3 bg-neutral-700 border ${errors.message ? 'border-red-500' : 'border-neutral-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white`} 
                  placeholder="Tell us about your project" 
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message.message}
                  </p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 font-medium disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="flex flex-col justify-center lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                Reach out to us directly or fill out the form. We'll get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">contact@smartserve.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mr-4">
                    <FaDiscord className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Discord</p>
                    <p className="text-white">discord.gg/smartserve</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Support Hours</p>
                    <p className="text-white">Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <FaDiscord className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
