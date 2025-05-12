import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    title: "ModeratorBot",
    description: "Advanced moderation bot with customizable auto-moderation and logging features.",
    tags: ["Moderation", "Logging", "Auto-mod"]
  },
  {
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    title: "MelodyMaster",
    description: "High-quality music streaming bot with playlist management and audio effects.",
    tags: ["Music", "Streaming", "Playlists"]
  },
  {
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    title: "GameMaster",
    description: "Gaming-focused bot with stats tracking, tournaments, and matchmaking features.",
    tags: ["Gaming", "Stats", "Tournaments"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Work" 
          description="Check out some of our custom Discord bots and server setups."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-neutral-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl group"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tidx) => (
                    <span key={tidx} className="px-3 py-1 bg-neutral-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium btn-animated glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Request Custom Project</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
