import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  { name: "Admin", id: "admin", isAdmin: true },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

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
      // Scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
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
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 z-[100] bg-gradient-to-r from-pink-500 via-orange-400 to-purple-600 shadow-lg"
        style={{ width: `${scrollProgress * 100}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress * 100}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-black/60 shadow-2xl border-b border-pink-600/20 py-2"
            : "bg-transparent py-6"
        }`}
        style={{
          boxShadow:
            "0 4px 32px 0 rgba(255,0,102,0.08), 0 1.5px 0 0 rgba(255,0,102,0.12)",
          borderBottom:
            isScrolled ? "1.5px solid rgba(255,0,102,0.12)" : undefined,
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-extrabold cursor-pointer tracking-widest text-white select-none"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
          >
            <span className="gta-gradient-text uppercase drop-shadow-lg">My Journey</span>
          </motion.div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    {item.isAdmin ? (
                      <NavigationMenuLink
                        asChild
                        className="px-4 py-2 rounded-md transition-all duration-200 font-medium text-base cursor-pointer relative overflow-hidden text-pink-400 hover:text-white hover:bg-pink-600/20 border border-pink-600/20"
                        href="/admin"
                      >
                        <span>{item.name}</span>
                      </NavigationMenuLink>
                    ) : (
                      <NavigationMenuLink
                        asChild
                        className={`px-4 py-2 rounded-md transition-all duration-200 font-medium text-base cursor-pointer relative overflow-hidden ${
                          active === item.id
                            ? "gta-gradient-text bg-white/10 shadow-md after:absolute after:inset-0 after:bg-gradient-to-r after:from-pink-500/20 after:to-purple-600/20 after:rounded-md after:blur-sm"
                            : "text-gray-200 hover:bg-white/10 hover:text-white"
                        }`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        <span>{item.name}</span>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              className="ml-6 px-6 py-2 text-sm font-semibold shadow-md bg-gradient-to-r from-pink-500 to-purple-600 border-0 hover:scale-105 transition-transform"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
          {/* Mobile Nav */}
          <button
            className="md:hidden text-white p-2 rounded-full bg-black/30 hover:bg-pink-600/80 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            >
              <button
                className="absolute top-6 right-6 text-white p-2 rounded-full bg-black/30 hover:bg-pink-600/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={36} />
              </button>
              <div className="flex flex-col items-center gap-6 mt-12">
                {NAV_ITEMS.map((item) =>
                  item.isAdmin ? (
                    <motion.a
                      key={item.id}
                      href="/admin"
                      className="text-3xl font-bold px-6 py-3 rounded-lg transition-all duration-200 w-full text-center text-pink-400 hover:text-white hover:bg-pink-600/20 border border-pink-600/20"
                      whileTap={{ scale: 0.97 }}
                    >
                      {item.name}
                    </motion.a>
                  ) : (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-3xl font-bold px-6 py-3 rounded-lg transition-all duration-200 w-full text-center ${
                        active === item.id
                          ? "gta-gradient-text bg-white/10 shadow-lg"
                          : "text-gray-200 hover:bg-white/10 hover:text-white"
                      }`}
                      whileTap={{ scale: 0.97 }}
                    >
                      {item.name}
                    </motion.button>
                  )
                )}
                <Button
                  className="mt-8 w-full px-8 py-4 text-lg font-bold shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 border-0 hover:scale-105 transition-transform"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
