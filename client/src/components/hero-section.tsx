import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import sakuraImage1 from "@assets/sakura road 1_1751907476709.jpg";
import { Button } from "./ui/button";

const HEADLINE = [
  "Welcome to",
  "My Digital Journey",
];

export default function HeroSection() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    if (headlineIndex < HEADLINE.length - 1) {
      const timer = setTimeout(() => {
        setShowNext(true);
        setTimeout(() => {
          setHeadlineIndex(headlineIndex + 1);
          setShowNext(false);
        }, 900);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [headlineIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={sakuraImage1}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-pink-900/40 to-purple-900/80 mix-blend-multiply"></div>
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2 }}
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(255,0,102,0.18) 0, transparent 60%), radial-gradient(circle at 30% 70%, rgba(102,0,255,0.18) 0, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <h1 className="gta-hero-title text-white mb-4 select-none">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block text-2xl md:text-4xl font-bold tracking-widest text-gray-200"
            >
              {HEADLINE[0]}
            </motion.span>
            <motion.span
              key={headlineIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="block gta-gradient-text text-5xl md:text-7xl font-extrabold drop-shadow-lg"
            >
              {HEADLINE[headlineIndex]}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-8"
          >
            <p className="gta-subtitle text-gray-300 mb-4 text-lg max-w-xl mx-auto">
              Discover the story, skills, and projects behind my passion for technology and creativity.
            </p>
            <p className="text-xs md:text-sm uppercase tracking-widest text-gray-400">
              Portfolio | Projects | Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("about")}
              className="px-8 py-3 text-base font-semibold shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 border-0 hover:scale-105 transition-transform"
            >
              Learn More
            </Button>
            <Button
              onClick={() => scrollToSection("gallery")}
              variant="secondary"
              className="px-8 py-3 text-base font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer flex flex-col items-center"
          onClick={() => scrollToSection("about")}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-2 animate-pulse shadow-lg">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Scroll for more
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
