import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Eye, Filter, Grid, List } from "lucide-react";
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const categories = ["All", "Web Design", "UI/UX", "Development", "Interactive", "Backend", "Branding"];

  const galleryItems = [
    {
      id: 1,
      image: sakuraImage2,
      title: "Digital Dreams",
      category: "Web Design",
      description: "Where aesthetics meet functionality in perfect harmony",
      tags: ["React", "Tailwind", "Framer Motion"],
      year: "2024"
    },
    {
      id: 2,
      image: cityscapeImage,
      title: "Urban Interface",
      category: "UI/UX",
      description: "Building tomorrow's digital experiences with modern design principles",
      tags: ["Figma", "React", "TypeScript"],
      year: "2024"
    },
    {
      id: 3,
      image: carImage,
      title: "Precision Code",
      category: "Development",
      description: "Engineering excellence in every line of code",
      tags: ["Node.js", "Express", "MongoDB"],
      year: "2023"
    },
    {
      id: 4,
      image: marioImage,
      title: "Game Development",
      category: "Interactive",
      description: "Creating immersive digital worlds and interactive experiences",
      tags: ["Unity", "C#", "WebGL"],
      year: "2023"
    },
    {
      id: 5,
      image: cityFogImage,
      title: "Cloud Architecture",
      category: "Backend",
      description: "Scalable solutions for modern challenges in the cloud",
      tags: ["AWS", "Docker", "Kubernetes"],
      year: "2024"
    },
    {
      id: 6,
      image: sakuraImage1,
      title: "Creative Vision",
      category: "Branding",
      description: "Bringing ideas to life through visual storytelling",
      tags: ["Adobe Suite", "Branding", "Motion"],
      year: "2023"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 0, 102, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 102, 0, 0.1) 0%, transparent 50%)`
        }}></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Title Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="w-24 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Eye className="w-8 h-8 text-pink-500" />
              </motion.div>
              <motion.div
                className="w-24 h-px bg-gradient-to-l from-transparent via-orange-500 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>

          <h2 className="gta-hero-title text-6xl md:text-8xl mb-6">
            <motion.span 
              className="text-white block"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              DIGITAL
            </motion.span>
            <motion.span 
              className="gta-gradient-text block"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              SHOWCASE
            </motion.span>
          </h2>
          <motion.p 
            className="gta-subtitle text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A collection of my finest work
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-600 to-orange-500 text-white'
                    : 'glass-effect text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <motion.div
            className="flex items-center space-x-2 glass-effect p-2 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors ${
                viewMode === "grid" ? 'text-pink-500' : 'text-gray-400'
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors ${
                viewMode === "list" ? 'text-pink-500' : 'text-gray-400'
              }`}
            >
              <List size={20} />
            </button>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Gallery Grid */}
        <motion.div 
          className={`max-w-7xl mx-auto ${
            viewMode === "grid" 
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-8"
          }`}
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group cursor-pointer ${
                viewMode === "list" ? "flex gap-8 items-center" : ""
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`relative overflow-hidden ${
                viewMode === "grid" ? "h-80" : "w-64 h-48 flex-shrink-0"
              }`}>
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <motion.div
                  className="absolute top-4 right-4 flex space-x-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredId === item.id ? 1 : 0, 
                    scale: hoveredId === item.id ? 1 : 0.8 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    className="glass-effect p-2 rounded-full hover:bg-pink-500/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} className="text-white" />
                  </motion.button>
                  <motion.button
                    className="glass-effect p-2 rounded-full hover:bg-orange-500/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={16} className="text-white" />
                  </motion.button>
                </motion.div>

                {/* Category Badge */}
                <motion.div
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: hoveredId === item.id ? 1 : 0,
                    y: hoveredId === item.id ? 0 : -10
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-pink-600 to-orange-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </motion.div>
                
                {/* Content overlay for grid view */}
                {viewMode === "grid" && (
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.h3 
                      className="text-2xl font-bold mb-2 text-white transform transition-transform duration-300 group-hover:-translate-y-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-300 text-sm mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredId === item.id ? 1 : 0,
                        y: hoveredId === item.id ? 0 : 10
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredId === item.id ? 1 : 0,
                        y: hoveredId === item.id ? 0 : 10
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* Corner accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[64px] border-b-pink-600/60 border-l-[64px] border-l-transparent"></div>
                </motion.div>
              </div>

              {/* List view content */}
              {viewMode === "list" && (
                <motion.div 
                  className="flex-1 space-y-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-bold gta-gradient-text">{item.title}</h3>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  <p className="text-gray-300 text-lg">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-sm bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full text-pink-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button 
            className="gta-button hover-glow group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-orange-500/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
