"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { Layout, Code2, Cloud, Award } from "lucide-react";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="w-full">
      <SectionHeading 
        title="Skills & Tech" 
        subtitle="The tools, architectures, and ecosystems I work with." 
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        {/* Frontend & Web Dev Card */}
        <motion.div variants={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Layout className="text-gray-300" size={24} />
            <h3 className="text-lg font-semibold text-foreground">Web Development</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-sm text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Core Languages Card */}
        <motion.div variants={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-gray-300" size={24} />
            <h3 className="text-lg font-semibold text-foreground">Core & Logic</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Python", "C Programming", "Data Structures", "Algorithms"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-sm text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Architecture & Tools Card */}
        <motion.div variants={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="text-gray-300" size={24} />
            <h3 className="text-lg font-semibold text-foreground">Architecture & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Git & GitHub", "Vercel Deployment", "Google AI Studio", "Gemini API"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-sm text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Leadership Card */}
        <motion.div variants={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-gray-300" size={24} />
            <h3 className="text-lg font-semibold text-foreground">Community & Cloud</h3>
          </div>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-0.5">✦</span>
              Microsoft Learn Student Ambassador
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-0.5">✦</span>
              Google Cloud Arcade Facilitator (Cloud & AI Badges)
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}