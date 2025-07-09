import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import sakuraImage1 from "@assets/sakura road 1_1751907476709.jpg";

// Add a placeholder cinematic video asset (replace with your own for production)
const HERO_VIDEO = "https://www.w3schools.com/howto/rain.mp4"; // Replace with your own cinematic video

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
      {/* Cinematic Video Background with Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          poster={sakuraImage1}
          style={{ filter: 'brightness(0.7) contrast(1.1) saturate(1.2)' }}
        />
        {/* Fallback image for browsers that don't support video */}
        <img
          src={sakuraImage1}
          alt="Background"
          className="w-full h-full object-cover absolute inset-0 z-[-1] pointer-events-none"
          style={{ display: 'none' }}
        />
        {/* Cinematic overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
        {/* Film grain overlay */}
        <div className="absolute inset-0 pointer-events-none z-10" style={{backgroundImage:'url(https://www.transparenttextures.com/patterns/asfalt-light.png)',opacity:0.18,mixBlendMode:'overlay'}} />
      </div>

      {/* Logo and Title */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.h1
            className="gta-hero-title text-white mb-4 drop-shadow-[0_4px_32px_rgba(255,0,102,0.4)]"
            initial={{ opacity: 0, y: 60, scale: 1.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="block"
            >
              MY DIGITAL
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="block gta-gradient-text"
            >
              JOURNEY
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
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

      {/* Cinematic Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer flex flex-col items-center"
          onClick={() => scrollToSection("about")}
        >
          <div className="w-10 h-10 rounded-full border-2 border-pink-500 flex items-center justify-center mb-2 bg-black/40 shadow-lg shadow-pink-500/20">
            <ChevronDown className="w-6 h-6 text-pink-400 animate-pulse" />
          </div>
          <p className="text-xs uppercase tracking-widest text-pink-400 drop-shadow-[0_2px_8px_rgba(255,0,102,0.4)]">
            Scroll for more content
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
