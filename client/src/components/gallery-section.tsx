import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import sakuraImage2 from "@assets/sakura road 2_1751907476710.jpg";
import cityscapeImage from "@assets/cityscape day_1751907476709.jpg";
import carImage from "@assets/car_1751907476708.jpg";
import marioImage from "@assets/mario nintendo_1751907476709.png";
import cityFogImage from "@assets/city fog_1751907476709.png";
import sakuraImage1 from "@assets/sakura road 1_1751907476709.jpg";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: sakuraImage2,
    title: "Digital Dreams",
    category: "Web Design",
    description: "Where aesthetics meet functionality",
  },
  {
    id: 2,
    image: cityscapeImage,
    title: "Urban Interface",
    category: "UI/UX",
    description: "Building tomorrow's digital experiences",
  },
  {
    id: 3,
    image: carImage,
    title: "Precision Code",
    category: "Development",
    description: "Engineering excellence in every line",
  },
  {
    id: 4,
    image: marioImage,
    title: "Game Development",
    category: "Interactive",
    description: "Creating immersive digital worlds",
  },
  {
    id: 5,
    image: cityFogImage,
    title: "Cloud Architecture",
    category: "Backend",
    description: "Scalable solutions for modern challenges",
  },
  {
    id: 6,
    image: sakuraImage1,
    title: "Creative Vision",
    category: "Branding",
    description: "Bringing ideas to life",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null as null | typeof galleryItems[0]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="gallery" className="py-20 bg-black relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(120deg, transparent, transparent 80px, rgba(255,0,102,0.10) 80px, rgba(255,0,102,0.10) 160px)",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="gta-hero-title text-5xl md:text-7xl mb-6 select-none">
            <span className="text-white">DIGITAL</span>
            <br />
            <span className="gta-gradient-text">SHOWCASE</span>
          </h2>
          <p className="gta-subtitle text-gray-400">A collection of my finest work</p>
        </motion.div>
        {/* Masonry/Staggered Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative mb-6 break-inside-avoid cursor-pointer group rounded-2xl overflow-hidden shadow-xl border border-pink-600/10 bg-black/60 backdrop-blur-md"
              onClick={() => setLightbox(item)}
              tabIndex={0}
              aria-label={`View details for ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110 group-focus:scale-110"
                draggable={false}
              />
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                whileFocus={{ opacity: 1 }}
              >
                <p className="text-pink-500 text-xs uppercase tracking-wider mb-1">
                  {item.category}
                </p>
                <h3 className="text-2xl font-bold mb-1 gta-gradient-text">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  {item.description}
                </p>
                <span className="inline-block px-3 py-1 bg-pink-600/80 text-white text-xs rounded-full shadow mt-2 animate-bounce">
                  View Details
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            >
              <motion.div
                className="relative bg-black/90 rounded-2xl shadow-2xl p-6 max-w-lg w-full mx-4"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white bg-pink-600/80 rounded-full p-2 hover:bg-pink-700 transition-colors"
                  onClick={() => setLightbox(null)}
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="w-full h-64 object-cover object-center rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold gta-gradient-text mb-2">
                  {lightbox.title}
                </h3>
                <p className="text-pink-500 text-xs uppercase tracking-wider mb-2">
                  {lightbox.category}
                </p>
                <p className="text-gray-300 text-base mb-2">
                  {lightbox.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="gta-button px-8 py-3 text-lg shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 border-0 hover:scale-105 transition-transform">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
