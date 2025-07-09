import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const journeyChapters = [
    {
      id: 1,
      year: "2019",
      title: "The Genesis",
      subtitle: "Where it all began",
      description: "Like a character spawning into a vast open world, my journey into development started with pure curiosity and determination. The first lines of code were written, setting the foundation for everything that would follow.",
      symbol: "</>" ,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      year: "2021",
      title: "Level Up",
      subtitle: "Skills unlocked",
      description: "The path became clearer as I navigated through complex challenges and emerged stronger. Each project was a new mission completed, each technology mastered a new skill unlocked.",
      symbol: "⚡",
      color: "from-pink-600 to-orange-600"
    },
    {
      id: 3,
      year: "2024",
      title: "The Present",
      subtitle: "Writing the future",
      description: "Now operating at peak performance, creating digital experiences that push boundaries. The fog of uncertainty has lifted, revealing endless possibilities ahead.",
      symbol: "🚀",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="journey" className="relative py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="gta-hero-title text-6xl md:text-8xl mb-6">
            <span className="text-white">THE</span>
            <br />
            <span className="gta-gradient-text">JOURNEY</span>
          </h2>
          <p className="gta-subtitle text-gray-400">
            Every legend has a beginning
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-pink-600 via-orange-600 to-red-600 hidden lg:block"></div>
            
            {/* Chapters */}
            <div className="space-y-24">
              {journeyChapters.map((chapter, index) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:text-right' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:block">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${chapter.color} animate-pulse`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2 lg:text-left' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="gta-card p-8"
                    >
                      <span className={`text-5xl font-bold bg-gradient-to-r ${chapter.color} bg-clip-text text-transparent`}>
                        {chapter.year}
                      </span>
                      <h3 className="text-3xl font-bold mt-4 mb-2">{chapter.title}</h3>
                      <p className="text-lg text-pink-500 mb-4">{chapter.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed">
                        {chapter.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Icon Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-center h-80 rounded-lg overflow-hidden relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-10`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent`}></div>
                                             <motion.div
                         animate={{ 
                           y: [0, -10, 0],
                           scale: [1, 1.1, 1]
                         }}
                         transition={{ 
                           duration: 3,
                           repeat: Infinity,
                           ease: "easeInOut"
                         }}
                         className="relative z-10"
                       >
                         <div 
                           className={`text-8xl font-bold bg-gradient-to-r ${chapter.color} bg-clip-text text-transparent`}
                           style={{
                             filter: 'drop-shadow(0 0 20px rgba(255, 0, 102, 0.3))'
                           }}
                         >
                           {chapter.symbol}
                         </div>
                       </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
