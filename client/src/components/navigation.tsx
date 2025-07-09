import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`gta-nav ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
          >
            <span className="gta-gradient-text uppercase tracking-wider">My Journey</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-12">
            {[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Journey", id: "journey" },
              { name: "Portfolio", id: "gallery" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="gta-nav-link"
              >
                {item.name}
              </button>
            ))}
            <button className="gta-button px-6 py-2 text-sm">
              Get In Touch
            </button>
          </div>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-6 gta-card p-6"
          >
            <div className="flex flex-col space-y-6">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Journey", id: "journey" },
                { name: "Portfolio", id: "gallery" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left gta-nav-link text-lg"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
