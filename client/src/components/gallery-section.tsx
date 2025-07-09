import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const galleryItems = [
    {
      id: 1,
      title: "Cherry Blossoms",
      description: "Serene spring vibes",
      gradient: "from-pink-400 via-red-400 to-pink-600",
      symbol: "🌸"
    },
    {
      id: 2,  
      title: "City Dawn",
      description: "Urban awakening",
      gradient: "from-orange-400 via-yellow-400 to-orange-600",
      symbol: "🌅"
    },
    {
      id: 3,
      title: "Speed & Style", 
      description: "Racing through life",
      gradient: "from-red-400 via-orange-400 to-red-600",
      symbol: "🏎️"
    },
    {
      id: 4,
      title: "Gaming World",
      description: "Pixel adventures",
      gradient: "from-green-400 via-blue-400 to-purple-600", 
      symbol: "🎮"
    },
    {
      id: 5,
      title: "Misty Heights",
      description: "Urban mystique",
      gradient: "from-gray-400 via-blue-400 to-gray-600",
      symbol: "🌫️"
    },
    {
      id: 6,
      title: "Spring Path",
      description: "Journey continues",
      gradient: "from-pink-400 via-purple-400 to-pink-600",
      symbol: "🛤️"
    }
  ];

  return (
    <section id="gallery" className="relative py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="gta-hero-title text-6xl md:text-8xl mb-6">
            <span className="text-white">VISUAL</span>
            <br />
            <span className="gta-gradient-text">GALLERY</span>
          </h2>
          <p className="gta-subtitle text-gray-400">
            Moments captured in time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="gta-card overflow-hidden h-80">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`}></div>
                
                {/* Symbol and Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-6xl mb-4"
                  >
                    {item.symbol}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">
                    {item.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
