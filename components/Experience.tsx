"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <SectionHeading title="Experience & Education" subtitle="My academic and professional journey." />
      <div className="space-y-12 border-l border-border ml-3 pl-8 md:ml-4 md:pl-10 relative">
        {portfolioData.experience.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent"></div>
            <span className="text-sm font-medium text-accent mb-2 block">{exp.date}</span>
            <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
            <span className="text-muted block mb-4">{exp.company}</span>
            <p className="text-muted text-sm leading-relaxed max-w-2xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}