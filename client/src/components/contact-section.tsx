import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import cityscapeImage from "@assets/cityscape day_1751907476709.jpg";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    { icon: <Github size={24} />, href: "#", name: "GitHub" },
    { icon: <Linkedin size={24} />, href: "#", name: "LinkedIn" },
    { icon: <Twitter size={24} />, href: "#", name: "Twitter" },
    { icon: <Instagram size={24} />, href: "#", name: "Instagram" }
  ];

  return (
    <section id="contact" className="relative py-32 bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${cityscapeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="gta-hero-title text-6xl md:text-8xl mb-6">
            <span className="text-white">Contact the Cinematic VFX Editor</span>
          </h2>
          <p className="gta-subtitle text-gray-400">
            Ready to create something extraordinary?
          </p>
          <a href="#journey" className="gta-button mt-4 inline-block">See My Journey</a>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Form Style Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="gta-card p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Side - Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-8 gta-gradient-text">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-pink-600 mr-4 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-lg">hello@myjourney.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-pink-600 mr-4 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-lg">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-pink-600 mr-4 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-lg">Digital Metropolis</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Social Links */}
              <div>
                <h3 className="text-2xl font-bold mb-8 gta-gradient-text">Connect Online</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="gta-card p-4 flex items-center justify-center gap-3 hover:border-pink-600 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-pink-600 group-hover:text-white transition-colors">
                        {social.icon}
                      </span>
                      <span className="text-sm uppercase tracking-wider">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <button className="gta-button px-12 py-4 text-lg">
                Start a Project
              </button>
            </motion.div>
          </motion.div>
          
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-xl italic text-gray-400">
              "In this digital world, connections are everything."
            </p>
            <div className="gta-divider max-w-xs mx-auto mt-8"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
