import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-muted text-sm">
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={portfolioData.links.instagram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}