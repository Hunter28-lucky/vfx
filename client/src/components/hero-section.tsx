import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import sakuraImage1 from "@assets/sakura road 1_1751907476709.jpg";
import sakuraImage2 from "@assets/sakura road 2_1751907476710.jpg";

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-pink-500 rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
        />
      ))}
    </div>
  );
};

export default function HeroSection() {
  const [currentDate, setCurrentDate] = useState("");
  const [isVideoMode, setIsVideoMode] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
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
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Background Image with Enhanced Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.img 
          src={isVideoMode ? sakuraImage2 : sakuraImage1}
          alt="Background" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
        
        {/* Dynamic gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255, 0, 102, 0.1) 0%, transparent 70%)"
          }}
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(255, 0, 102, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 70% 60%, rgba(255, 102, 0, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 40% 70%, rgba(255, 0, 102, 0.1) 0%, transparent 70%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-4"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-5xl"
        >
          {/* Enhanced Title with Glitch Effect */}
          <div className="relative mb-8">
            <motion.h1 
              className="gta-hero-title text-white mb-4 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 100, skewY: 10 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="block"
              >
                MY DIGITAL
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 100, skewY: -10 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="block gta-gradient-text relative"
              >
                JOURNEY
                <motion.div
                  className="absolute inset-0 bg-pink-500 mix-blend-multiply opacity-0"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.span>
            </motion.h1>
            
            {/* Glowing accent */}
            <motion.div
              className="absolute inset-0 gta-gradient-text opacity-30 blur-lg"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="block">MY DIGITAL</span>
              <span className="block">JOURNEY</span>
            </motion.div>
          </div>
          
          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="w-16 h-px bg-gradient-to-r from-transparent to-pink-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              />
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-6 h-6 text-pink-500" />
              </motion.div>
              <motion.div
                className="w-16 h-px bg-gradient-to-l from-transparent to-orange-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              />
            </div>
            
            <p className="gta-subtitle text-gray-300 mb-4">
              Coming {currentDate}
            </p>
            <motion.p 
              className="text-sm uppercase tracking-widest text-gray-400"
              initial={{ letterSpacing: "0.1em" }}
              animate={{ letterSpacing: "0.3em" }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              Portfolio • Projects • Experience
            </motion.p>
          </motion.div>
          
          {/* Enhanced Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              onClick={() => scrollToSection("about")}
              className="gta-button group relative overflow-hidden flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Watch Trailer</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-orange-500/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            <motion.button 
              onClick={() => scrollToSection("journey")}
              className="gta-button group relative overflow-hidden flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Journey</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-600/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        style={{ opacity }}
      >
        <motion.div
          className="cursor-pointer group"
          onClick={() => scrollToSection("about")}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex flex-col items-center space-y-4">
            <p className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-pink-400 transition-colors">
              Scroll for more content
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-pink-400 transition-colors" />
              <motion.div
                className="absolute inset-0 bg-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Corner Accent */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[128px] border-t-pink-600/20 border-l-[128px] border-l-transparent"></div>
      </motion.div>
    </section>
  );
}
