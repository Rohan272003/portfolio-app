"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, BookOpen, Flame } from "lucide-react";

export default function About() {
  const skills = [
    { name: "React.js & Next.js", icon: Flame, level: 95 },
    { name: "Tailwind CSS", icon: Sparkles, level: 90 },
    { name: "REST APIs & Axios", icon: Terminal, level: 85 },
    { name: "Optimization", icon: BookOpen, level: 80 }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 z-10 px-6 sm:px-12">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold font-sans tracking-tight mb-4 text-slate-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 sm:p-10"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-600 dark:text-cyan-400 font-mono">{"<Profile>"}</h3>
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
              I’m a Frontend Developer with 1+ year of hands-on experience building scalable, high-performance web applications using React.js and Next.js. I specialize in crafting responsive UIs and robust component architectures.
            </p>
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
              I focus on writing clean, modern ES6+ JavaScript, integrating REST APIs seamlessly using Axios, and running aggressive optimization workflows like code splitting and lazy loading for top-tier performance scores.
            </p>
            <h3 className="text-2xl font-bold mb-2 text-cyan-600 dark:text-cyan-400 font-mono mt-8">{"</Profile>"}</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 flex items-center gap-6 group"
              >
                <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 group-hover:border-cyan-400 dark:group-hover:border-cyan-500/50 shadow-sm dark:group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
                  <skill.icon className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-slate-800 dark:text-gray-200">{skill.name}</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
