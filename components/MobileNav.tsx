"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Sparkles, FolderGit2, Briefcase } from "lucide-react";

const navItems = [
  { name: "Home", href: "#about", icon: Home },
  { name: "Skills", href: "#skills", icon: Sparkles },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Experience", href: "#experience", icon: Briefcase },
];

export default function MobileNav() {
  const [active, setActive] = useState("#about");

  // Optional: Update active state based on scroll position could go here

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.href;
          
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`relative p-3 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isActive ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/15 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon size={24} className="relative z-10" strokeWidth={isActive ? 2.5 : 2} />
            </a>
          );
        })}
      </div>
    </div>
  );
}