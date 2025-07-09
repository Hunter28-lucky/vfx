import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import marioImage from "@assets/mario nintendo_1751907476709.png";
import sakuraImage from "@assets/sakura road 1_1751907476709.jpg";
import cityFogImage from "@assets/city fog_1751907476709.png";

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const journeyChapters = [
    {
      id: 1,
      year: "2019",
      title: "The Genesis",
      subtitle: "Where it all began",
      description:
        "Like a character spawning into a vast open world, my journey into development started with pure curiosity and determination. The first lines of code were written, setting the foundation for everything that would follow.",
      image: marioImage,
      color: "from-purple-600 to-pink-600",
    },
    {
      id: 2,
      year: "2021",
      title: "Level Up",
      subtitle: "Skills unlocked",
      description:
        "The path became clearer as I navigated through complex challenges and emerged stronger. Each project was a new mission completed, each technology mastered a new skill unlocked.",
      image: sakuraImage,
      color: "from-pink-600 to-orange-600",
    },
    {
      id: 3,
      year: "2024",
      title: "The Present",
      subtitle: "Writing the future",
      description:
        "Now operating at peak performance, creating digital experiences that push boundaries. The fog of uncertainty has lifted, revealing endless possibilities ahead.",
      image: cityFogImage,
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section id="journey" className="relative py-20 bg-black overflow-x-hidden">
      {/* Parallax/Animated Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(255,0,102,0.12) 60px, rgba(255,0,102,0.12) 120px)",
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
            <span className="text-white">THE</span>
            <br />
            <span className="gta-gradient-text">JOURNEY</span>
          </h2>
          <p className="gta-subtitle text-gray-400">
            Every legend has a beginning
          </p>
        </motion.div>
        {/* Timeline/Stepper */}
        <div className="relative flex flex-col md:flex-row md:items-stretch gap-16 md:gap-0 max-w-5xl mx-auto">
          {/* Timeline Line (vertical on mobile, horizontal on desktop) */}
          <div className="absolute md:static left-1/2 md:left-0 top-0 md:top-1/2 transform md:-translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-1 md:w-full h-full md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-pink-600 via-orange-600 to-red-600 opacity-60 md:opacity-80 z-0"></div>
          <div className="flex flex-col md:flex-row w-full relative z-10">
            {journeyChapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex-1 flex flex-col items-center md:items-stretch md:flex-col px-2 md:px-8`}
              >
                {/* Glowing Node */}
                <motion.div
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${chapter.color} shadow-2xl border-4 border-black z-20 animate-pulse mb-4 md:mb-0 md:mt-0`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                ></motion.div>
                {/* Floating Year Label */}
                <motion.div
                  className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 bg-black/80 px-4 py-1 rounded-full shadow-lg border border-pink-600/30 gta-gradient-text text-lg font-bold select-none"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                >
                  {chapter.year}
                </motion.div>
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(255,0,102,0.18)" }}
                  className="gta-card p-8 bg-black/70 rounded-2xl shadow-xl border border-pink-600/20 backdrop-blur-md relative z-10 mt-8 md:mt-0"
                >
                  <span className={`text-3xl font-bold bg-gradient-to-r ${chapter.color} bg-clip-text text-transparent`}>{chapter.title}</span>
                  <h3 className="text-xl font-bold mt-2 mb-1 text-pink-400">{chapter.subtitle}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">{chapter.description}</p>
                  <div className="w-full h-40 md:h-56 rounded-xl overflow-hidden relative mt-2 shadow-lg border border-pink-600/10">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="w-full h-full object-cover object-center select-none"
                      draggable={false}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-20`}></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
