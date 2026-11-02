"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-24 flex items-center justify-between relative z-50">
        <Link href="/" className="text-xl font-bold tracking-tighter text-foreground hover:text-accent transition-colors">
          MN<span className="text-accent">.</span>
        </Link>
        
        {/* The 3-lines icon is hidden on mobile, visible on desktop */}
        <button 
          className="hidden md:block text-foreground hover:text-accent transition-colors" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            
            <motion.nav 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-screen w-64 bg-surface/95 border-l border-border flex flex-col pt-28 px-8 gap-8 shadow-2xl z-40"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-muted hover:text-foreground hover:translate-x-2 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="mt-8 border-t border-border pt-8 flex flex-col">
                <a 
                  href="#contact" 
                  onClick={() => setMenuOpen(false)}
                  className="text-center text-sm font-medium bg-foreground text-background px-6 py-3 rounded-full hover:scale-105 transition-transform"
                >
                  Get in touch
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}