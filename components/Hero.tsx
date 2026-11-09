"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 pb-32 md:pt-56 md:pb-32 flex flex-col min-h-[90vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border w-max mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        <span className="text-xs font-medium text-muted uppercase tracking-wider">Hello, I&apos;M {portfolioData.personal.name}</span>
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 max-w-4xl"
      >
        Building digital <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
          experiences.
        </span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10"
      >
        {portfolioData.personal.shortBio}
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
      >
        <Link href="#projects" className="bg-foreground text-background px-8 py-3.5 rounded-full font-medium hover:bg-zinc-200 transition-colors">
          View My Work
        </Link>
        <Link href="#contact" className="px-8 py-3.5 rounded-full font-medium border border-border hover:bg-surface transition-colors text-foreground">
          Get In Touch
        </Link>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 flex items-center gap-2 text-sm text-muted"
      >
        <MapPin size={16} />
        <span>Based in {portfolioData.personal.location}</span>
      </motion.div>
    </section>
  );
}