import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-black">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        {/* @ts-ignore */}
        <spline-viewer 
          url="https://prod.spline.design/XVb4L3YwyNlw6ppz/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
      </div>

      {/* Logo and Title */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1
            className="gta-hero-title text-white mb-4 drop-shadow-[0_4px_32px_rgba(255,0,102,0.4)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="block"
            >
              MY DIGITAL
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block gta-gradient-text"
            >
              JOURNEY
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-8"
          >
            <p className="gta-subtitle text-gray-300 mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Coming {currentDate}
            </p>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Portfolio | Projects | Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex gap-6 justify-center"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="gta-button shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40"
            >
              Watch Trailer
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="gta-button shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40"
            >
              Explore Journey
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer flex flex-col items-center"
          onClick={() => scrollToSection("about")}
        >
          <div className="w-10 h-10 rounded-full border-2 border-pink-500 flex items-center justify-center mb-2 bg-black/40 shadow-lg shadow-pink-500/20">
            <ChevronDown className="w-6 h-6 text-pink-400" />
          </div>
          <p className="text-xs uppercase tracking-widest text-pink-400 drop-shadow-[0_2px_8px_rgba(255,0,102,0.4)]">
            Scroll for more content
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
