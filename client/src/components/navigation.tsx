import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";

const NAV_ITEMS = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Journey", id: "journey" },
  { name: "Portfolio", id: "gallery" },
  { name: "Contact", id: "contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Highlight active section
      let found = "hero";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = item.id;
            break;
          }
        }
      }
      setActive(found);
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/70 shadow-lg py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-extrabold cursor-pointer tracking-widest text-white"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("hero")}
        >
          <span className="gta-gradient-text uppercase">My Journey</span>
        </motion.div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    asChild
                    className={`px-4 py-2 rounded-md transition-colors duration-200 font-medium text-base cursor-pointer ${
                      active === item.id
                        ? "gta-gradient-text bg-white/10 shadow-md"
                        : "text-gray-200 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span>{item.name}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            className="ml-6 px-6 py-2 text-sm font-semibold shadow-md"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
        {/* Mobile Nav */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/90 backdrop-blur-md shadow-lg mt-2 mx-4 rounded-lg p-6"
        >
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
                  active === item.id
                    ? "gta-gradient-text bg-white/10 shadow"
                    : "text-gray-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              className="mt-4 w-full"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
