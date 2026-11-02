"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  const [activeYear, setActiveYear] = useState("2025");

  return (
    <section id="experience" className="w-full relative min-h-screen pt-12">
      <div className="flex flex-col md:flex-row items-start relative mt-12 gap-8 md:gap-12">
        
        {/* Sticky Left Panel - Now Sticky on Mobile Too! */}
        <div className="w-full md:w-1/2 sticky top-24 md:top-32 h-[35vh] md:h-[60vh] flex flex-col justify-center z-0">
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-2 md:mb-4">
            My Story
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Let&apos;s go back in time.
          </h2>
          <div className="relative mt-8 h-24 md:h-48 overflow-visible flex items-center">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute text-8xl md:text-8xl lg:text-9xl font-black text-white/10 select-none drop-shadow-2xl"
            >
              {activeYear}
            </motion.div>
          </div>
        </div>

        {/* Scrolling Right Timeline */}
        <div className="w-full md:w-1/2 flex flex-col gap-12 md:gap-32 pb-48 z-10 pt-4 md:pt-0">
          {portfolioData.experience.map((exp) => (
            <ExperienceItem key={exp.id} exp={exp} setActiveYear={setActiveYear} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, setActiveYear }: { exp: any, setActiveYear: (year: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Extracts the starting year (e.g., "2025" from "2025 - Present")
          const year = exp.date.split(" - ")[0];
          setActiveYear(year);
        }
      },
      { rootMargin: "-40% 0px -40% 0px" } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [exp, setActiveYear]);

  return (
    <div ref={ref} className="flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all hover:bg-white/10 shadow-xl">
      <span className="text-accent font-mono text-sm mb-4 bg-accent/10 w-fit px-3 py-1 rounded-full">
        {exp.date}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{exp.title}</h3>
      <h4 className="text-lg text-muted mb-6">{exp.company}</h4>
      {exp.description && (
        <p className="text-muted/80 leading-relaxed">{exp.description}</p>
      )}
    </div>
  );
}