import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import sakuraImage2 from "@assets/sakura road 2_1751907476710.jpg";
import cityscapeImage from "@assets/cityscape day_1751907476709.jpg";
import carImage from "@assets/car_1751907476708.jpg";
import marioImage from "@assets/mario nintendo_1751907476709.png";
import cityFogImage from "@assets/city fog_1751907476709.png";
import sakuraImage1 from "@assets/sakura road 1_1751907476709.jpg";

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: sakuraImage2,
      title: "Digital Dreams",
      category: "Web Design",
      description: "Where aesthetics meet functionality"
    },
    {
      id: 2,
      image: cityscapeImage,
      title: "Urban Interface",
      category: "UI/UX",
      description: "Building tomorrow's digital experiences"
    },
    {
      id: 3,
      image: carImage,
      title: "Precision Code",
      category: "Development",
      description: "Engineering excellence in every line"
    },
    {
      id: 4,
      image: marioImage,
      title: "Game Development",
      category: "Interactive",
      description: "Creating immersive digital worlds"
    },
    {
      id: 5,
      image: cityFogImage,
      title: "Cloud Architecture",
      category: "Backend",
      description: "Scalable solutions for modern challenges"
    },
    {
      id: 6,
      image: sakuraImage1,
      title: "Creative Vision",
      category: "Branding",
      description: "Bringing ideas to life"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="gta-hero-title text-6xl md:text-8xl mb-6">
            <span className="text-white">DIGITAL</span>
            <br />
            <span className="gta-gradient-text">SHOWCASE</span>
          </h2>
          <p className="gta-subtitle text-gray-400">
            A collection of my finest work
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredId === item.id ? 0 : 20, 
                      opacity: hoveredId === item.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-pink-500 text-sm uppercase tracking-wider mb-2">
                      {item.category}
                    </p>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                    {item.title}
                  </h3>
                  
                  <motion.p
                    className="text-gray-300 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredId === item.id ? 1 : 0,
                      y: hoveredId === item.id ? 0 : 10
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-t-pink-600 border-l-[80px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="gta-button">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
