import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "React & Next.js", level: 95, color: "from-blue-400 to-cyan-400" },
    { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
    { name: "Node.js & Express", level: 88, color: "from-green-400 to-emerald-400" },
    { name: "Python & Django", level: 85, color: "from-yellow-400 to-orange-400" },
    { name: "Database Design", level: 87, color: "from-purple-400 to-pink-400" },
    { name: "Cloud Architecture", level: 82, color: "from-gray-400 to-slate-400" }
  ];

  return (
    <section id="about" className="relative py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="gta-hero-title text-6xl md:text-8xl mb-6">
            <span className="text-white">ABOUT</span>
            <br />
            <span className="gta-gradient-text">THE LEGEND</span>
          </h2>
          <p className="gta-subtitle text-gray-400">
            Behind every great digital experience
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-pink-500">
                    Digital Architect & Code Craftsman
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Welcome to my digital realm. I'm a passionate developer who transforms ideas into 
                    powerful, elegant solutions. With years of experience navigating the ever-evolving 
                    landscape of technology, I specialize in creating seamless user experiences and 
                    robust backend systems.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    My journey spans from frontend frameworks to cloud architecture, always driven 
                    by the pursuit of perfection and innovation. Every project is a new mission, 
                    every challenge an opportunity to level up.
                  </p>
                </div>

                {/* Skills Section */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-white">Core Expertise</h4>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="gta-card p-6"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-pink-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-96 flex items-center justify-center">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-orange-900/20 rounded-lg"></div>
                
                {/* Animated geometric shapes */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-32 h-32 border-2 border-pink-500/30 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      rotate: [360, 0],
                      scale: [1.1, 1, 1.1]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-24 h-24 border-2 border-orange-500/30 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      y: [-10, 10, -10],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent"
                  >
                    {"</>"}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
