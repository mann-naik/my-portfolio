"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <SectionHeading title="About Me" subtitle="A brief introduction to who I am." />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-muted text-lg leading-relaxed"
        >
          <p>
            I am a passionate 2nd Year Computer Science Engineering student located in {portfolioData.personal.location}. My journey in tech started with a deep curiosity for how things work under the hood, which naturally led me to programming.
          </p>
          <p>
            Currently, I focus on strengthening my foundational knowledge in Data Structures and Algorithms while actively exploring modern web development and Python programming. I love the process of cracking complex problems and bringing ideas to life through code.
          </p>
          <p>
            When I'm not studying or coding, you'll likely find me exploring new technologies and planning my upcoming projects.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-violet-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"/>
          <Image
  src="/profile.jpg"
  alt="Mann Naik"
  fill
  className="object-cover z-10"
  priority
/>
        </motion.div>
      </div>
    </section>
  );
}