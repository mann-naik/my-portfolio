"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    // Function to check the URL (e.g., #skills) and update the visible section
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveTab(hash);
      } else {
        setActiveTab("about"); // Opens About by default if no button is clicked
      }
      // Instantly scroll to the top of the new section
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    // Check the URL when the page first loads
    handleHashChange();

    // Listen for clicks on your Navbar
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-24 pt-32 pb-20 min-h-screen">
      {/* We render Hero and About together by default so your main intro isn't lost */}
      {activeTab === "about" && (
        <div className="flex flex-col gap-20">
          <Hero />
          <About />
        </div>
      )}
      
      {/* The rest of the components only exist on the screen when their tab is clicked */}
      {activeTab === "skills" && <Skills />}
      {activeTab === "projects" && <Projects />}
      {activeTab === "experience" && <Experience />}
      {activeTab === "contact" && <Contact />}
    </div>
  );
}