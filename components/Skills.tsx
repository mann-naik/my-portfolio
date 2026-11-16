"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { X } from "lucide-react";

const doorsData = [
  {
    id: "web",
    title: "Web Development",
    color: "bg-[#1e1b4b]", // Deep Indigo
    borderColor: "border-indigo-500/30",
    knob: "bg-amber-400",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    id: "core",
    title: "Core & Logic",
    color: "bg-[#064e3b]", // Deep Emerald
    borderColor: "border-emerald-500/30",
    knob: "bg-amber-400",
    skills: ["Python", "C Programming", "Data Structures", "Algorithms"],
  },
  {
    id: "arch",
    title: "Architecture",
    color: "bg-[#4c1d95]", // Deep Violet
    borderColor: "border-purple-500/30",
    knob: "bg-zinc-300",
    skills: ["Git & GitHub", "Vercel Deployments", "System Design"],
  },
  {
    id: "cloud",
    title: "Cloud & Community",
    color: "bg-[#7c2d12]", // Deep orange
    borderColor: "border-orange-500/30",
    knob: "bg-zinc-300",
    skills: ["Google GeminiStudent Ambassador"],
  }
];

export default function Skills() {
  const [activeDoor, setActiveDoor] = useState<string | null>(null);

  const selectedDoor = doorsData.find(d => d.id === activeDoor);

  return (
    <section id="skills" className="w-full relative min-h-screen pt-12 flex flex-col">
      {!activeDoor && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Magic happens behind the doors</h2>
          <p className="text-muted text-lg">Click a door to unlock the technologies I build with.</p>
        </motion.div>
      )}

    <div className="relative flex-1 w-full min-h-[50vh] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!activeDoor ? (
            <motion.div
              key="door-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full h-full pb-12"
            >
              {doorsData.map((door) => (
               <motion.div
  key={door.id}
  layoutId={`door-${door.id}`}
  onClick={() => setActiveDoor(door.id)}
className={`relative w-full aspect-[2/3] md:aspect-auto md:h-[28rem] cursor-pointer rounded-t-full rounded-b-sm border-x-4 md:border-x-8 border-t-4 md:border-t-8 border-b-0 ${door.borderColor} ${door.color} flex items-center justify-center group overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 duration-300`}
>
  {/* Decorative Door Panels */}
  <div className="absolute inset-4 md:inset-6 border-2 border-black/20 rounded-t-full pointer-events-none" />
  
  {/* Stylized Door Knob */}
  <div className={`absolute right-3 md:right-4 top-1/2 w-3 md:w-4 h-8 md:h-12 rounded-full ${door.knob} shadow-md shadow-black/80 group-hover:scale-110 transition-transform`} />

  {/* Responsive Text Styling */}
  <h3 className="text-xs sm:text-sm md:text-2xl font-bold text-white/90 -rotate-90 tracking-wider md:tracking-widest whitespace-nowrap drop-shadow-lg">
    {door.title.toUpperCase()}
  </h3>
</motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="open-door"
              layoutId={`door-${activeDoor}`}
              className={`absolute inset-0 z-50 ${selectedDoor?.color} ${selectedDoor?.borderColor} border-4 rounded-3xl p-8 md:p-16 flex flex-col shadow-2xl`}
            >
              <button 
                onClick={() => setActiveDoor(null)}
                className="absolute top-8 right-8 text-white/50 hover:text-white bg-black/20 p-3 rounded-full backdrop-blur-md transition-all hover:rotate-90 hover:bg-black/40"
              >
                <X size={28} />
              </button>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-12 mt-8 md:mt-0"
              >
                {selectedDoor?.title}
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                {selectedDoor?.skills.map(skill => (
                  <span key={skill} className="px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-xl font-medium text-white/90 shadow-xl backdrop-blur-md">
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}