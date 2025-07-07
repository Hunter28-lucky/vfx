import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-20 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-4xl font-bold mb-4">
              <span className="gta-gradient-text">MY DIGITAL JOURNEY</span>
            </h3>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              "In this digital metropolis, every connection is a new opportunity, every project a new adventure."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="gta-divider max-w-xs mx-auto mb-8"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-gray-500"
          >
            <p className="mb-2">
              © {currentYear} My Digital Journey. All rights reserved.
            </p>
            <p className="text-xs">
              Inspired by the neon-lit streets of digital innovation.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,0,102,0.1) 50px, rgba(255,0,102,0.1) 51px)`,
        }}></div>
      </div>
    </footer>
  );
}
