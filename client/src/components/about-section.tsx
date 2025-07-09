import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import carImage from "@assets/car_1751907476708.jpg";
import cityFogImage from "@assets/city fog_1751907476709.png";
import { Button } from "./ui/button";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative min-h-screen bg-black py-20 flex items-center justify-center">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${cityFogImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="gta-hero-title text-5xl md:text-7xl mb-6 select-none">
            <span className="text-white">MEET THE</span>
            <br />
            <span className="gta-gradient-text">DEVELOPER</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-black/60 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-pink-600/20">
              <h3 className="text-3xl font-bold mb-4 gta-gradient-text">John Doe</h3>
              <p className="gta-subtitle text-gray-400 mb-6">
                Full-Stack Developer & Digital Creator
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Like navigating the neon-lit streets of a digital metropolis, I craft experiences that blur the line between reality and imagination. Every project is a new adventure, every challenge a boss battle to conquer.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Armed with cutting-edge technologies and a passion for innovation, I transform ideas into immersive digital realities that captivate and inspire.
              </p>
            </div>
            {/* Quote */}
            <motion.div
              className="border-l-4 border-pink-600 pl-6 py-2 bg-black/50 rounded-lg shadow"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xl italic text-gray-200">
                "In this digital world, the only limit is your imagination."
              </p>
              <p className="text-sm text-gray-500 mt-2">- My Development Philosophy</p>
            </motion.div>
            <Button
              className="mt-4 px-8 py-3 text-base font-semibold shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 border-0 hover:scale-105 transition-transform"
              onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Journey
            </Button>
          </motion.div>

          {/* Image Section with Parallax Tilt */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            whileTap={{ scale: 0.98, rotate: -1 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-pink-600/20 bg-black/40 backdrop-blur-lg"
          >
            <img
              src={carImage}
              alt="Developer's Vision"
              className="w-full h-[350px] md:h-[500px] object-cover object-center select-none"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            {/* Overlay Stats */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="gta-card p-6 bg-black/60 rounded-xl shadow-lg border border-pink-600/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold gta-gradient-text">5+</p>
                    <p className="text-xs md:text-sm text-gray-400 uppercase">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold gta-gradient-text">50+</p>
                    <p className="text-xs md:text-sm text-gray-400 uppercase">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold gta-gradient-text">100%</p>
                    <p className="text-xs md:text-sm text-gray-400 uppercase">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
