"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-32 w-full">
      <SectionHeading title="Get In Touch" subtitle="Let's build something together." />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-surface border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
      >
        <div className="max-w-xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Have a project in mind?</h3>
          <p className="text-muted mb-0">
            I am currently open for opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <a 
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </div>
      </motion.div>
    </section>
  );
}