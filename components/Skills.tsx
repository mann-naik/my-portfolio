"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="scroll-mt-32">
      <SectionHeading title="Skills & Tech" subtitle="The tools and technologies I work with." />
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {portfolioData.skills.map((skill, index) => (
          <motion.div
  key={index}
  variants={item}
  className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-200 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
>
  {skill.name}
</motion.div>
        ))}
      </motion.div>
    </section>
  );
}