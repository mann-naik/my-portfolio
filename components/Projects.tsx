"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 w-full">
      <SectionHeading title="Featured Projects" subtitle="Some of the things I'm currently working on." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {portfolioData.projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between p-6 rounded-2xl bg-surface border border-border hover:border-border/80 transition-colors w-full"
          >
            <div>
              <div className="w-full h-48 bg-zinc-900 rounded-lg mb-6 overflow-hidden relative flex items-center justify-center">
                <span className="text-muted/50 font-medium">Project Preview</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted mb-6 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-xs px-2.5 py-1 bg-zinc-800/50 text-zinc-300 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors">
                  <Github size={18} />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}