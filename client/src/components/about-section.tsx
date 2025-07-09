import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Palette, Zap, Users, Award, Heart } from "lucide-react";
import carImage from "@assets/car_1751907476708.jpg";
import cityFogImage from "@assets/city fog_1751907476709.png";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const skills = [
    { icon: Code, name: "Development", level: 95, color: "from-pink-500 to-orange-500" },
    { icon: Palette, name: "Design", level: 88, color: "from-orange-500 to-pink-500" },
    { icon: Zap, name: "Performance", level: 92, color: "from-pink-500 to-blue-500" },
    { icon: Users, name: "Collaboration", level: 90, color: "from-blue-500 to-pink-500" }
  ];

  const achievements = [
    { icon: Award, value: "5+", label: "Years Experience", color: "text-pink-500" },
    { icon: Code, value: "50+", label: "Projects Completed", color: "text-orange-500" },
    { icon: Users, value: "30+", label: "Happy Clients", color: "text-blue-500" },
    { icon: Heart, value: "100%", label: "Passion Level", color: "text-pink-500" }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Enhanced Background with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${cityFogImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 0, 102, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 0, 102, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Enhanced Title Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="w-20 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="w-8 h-8 text-pink-500" />
              </motion.div>
              <motion.div
                className="w-20 h-px bg-gradient-to-l from-transparent via-orange-500 to-transparent"
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
              MEET THE
            </motion.span>
            <motion.span 
              className="gta-gradient-text block"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              DEVELOPER
            </motion.span>
          </h2>
        </motion.div>
        
        {/* Enhanced Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.h3 
                className="text-4xl font-bold mb-4 gta-gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                John Doe
              </motion.h3>
              <p className="gta-subtitle text-gray-400 mb-6">
                Full-Stack Developer & Digital Creator
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-6"
              >
                <p className="text-lg leading-relaxed text-gray-300">
                  Like navigating the neon-lit streets of a digital metropolis, I craft experiences 
                  that blur the line between reality and imagination. Every project is a new adventure, 
                  every challenge a boss battle to conquer.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Armed with cutting-edge technologies and a passion for innovation, I transform 
                  ideas into immersive digital realities that captivate and inspire.
                </p>
              </motion.div>
            </div>
            
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-pink-500 mb-4">Core Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-pink-500" />
                          <span className="font-medium text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            {/* Enhanced Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="glass-effect p-6 rounded-lg border-l-4 border-pink-600"
            >
              <p className="text-xl italic text-gray-200 mb-3">
                "In this digital world, the only limit is your imagination."
              </p>
              <p className="text-sm text-gray-500">- My Development Philosophy</p>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gta-button hover-glow"
              onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Explore My Journey
            </motion.button>
          </motion.div>
          
          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="gta-image-container h-[700px] relative group">
              <img 
                src={carImage} 
                alt="Developer's Vision" 
                className="w-full h-full object-cover"
              />
              
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Dynamic corner accents */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20"
                initial={{ scale: 0, rotate: -90 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-t-pink-600/60 border-l-[80px] border-l-transparent"></div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-0 left-0 w-20 h-20"
                initial={{ scale: 0, rotate: 90 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 90 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[80px] border-b-orange-500/60 border-r-[80px] border-r-transparent"></div>
              </motion.div>
              
              {/* Enhanced Achievement Stats */}
              <motion.div
                className="absolute bottom-8 left-8 right-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="glass-effect p-8 rounded-xl">
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <motion.div
                          key={achievement.label}
                          className="text-center group"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                        >
                          <Icon className={`w-8 h-8 mx-auto mb-2 ${achievement.color} group-hover:scale-110 transition-transform`} />
                          <p className="text-3xl font-bold gta-gradient-text">{achievement.value}</p>
                          <p className="text-sm text-gray-400 uppercase tracking-wider">{achievement.label}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
