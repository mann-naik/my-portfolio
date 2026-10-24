"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-24 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-foreground hover:text-accent transition-colors">
          MN<span className="text-accent">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-all">
            Get in touch
          </Link>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-border flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium bg-foreground text-background px-6 py-2 rounded-full"
            >
              Get in touch
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}