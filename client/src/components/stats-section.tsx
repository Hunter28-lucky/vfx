import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [animated, setAnimated] = useState(false);

  const stats = [
    { value: 50, label: "Projects Completed", suffix: "+" },
    { value: 5, label: "Years Experience", suffix: "" },
    { value: 100, label: "Happy Clients", suffix: "%" },
    { value: 24, label: "Awards Won", suffix: "" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
      stats.forEach((stat, index) => {
        const increment = stat.value / 50;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = stat.value;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }
        }, 40);
      });
    }
  }, [isInView, animated, stats]);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,0,102,0.5) 35px, rgba(255,0,102,0.5) 70px)`,
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="text-7xl font-bold gta-gradient-text mb-2">
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="gta-subtitle text-gray-400 uppercase">
                    {stat.label}
                  </div>
                  
                  {/* Decorative line */}
                  <motion.div
                    className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-pink-600 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
