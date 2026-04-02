"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, FolderGit2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "DAR jewellery website",
      description: "A futuristic Next.js portfolio marking my grand entrance into web development. Not bad for day one!",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://darjewellery.com/"
     },
    {
      title: "Click & Collect",
      description: "The absolute classic. My very first interaction rendering text onto a screen using modern web technologies.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://www.darjewellery.com/GoldPlan/BookMyGolds"
    },
    {
      title: "Book my Gold",
      description: "A thrilling CSS experiment where I attempted (and succeeded) at perfectly centering a block on the screen.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://www.darjewellery.com/clickAndCollect/clickAndCollect"
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 z-10 px-6 sm:px-12">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold font-sans tracking-tight mb-4 text-slate-900 dark:text-white">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group flex flex-col h-full border border-slate-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all duration-300 shadow-sm dark:shadow-[0_0_0_transparent] hover:shadow-lg dark:hover:shadow-[0_15px_30px_rgba(0,240,255,0.1)]"
            >
              <div className="flex justify-between items-center mb-6">
                <FolderGit2 className="w-10 h-10 text-cyan-600 dark:text-cyan-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                <div className="flex gap-3">
                  {/* <a href={project.github} className="text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"><Code2 className="w-6 h-6" /></a> */}
                  <a href={project.link} className="text-slate-500 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"><ExternalLink className="w-6 h-6" /></a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">{project.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-cyan-700 bg-cyan-100 dark:text-cyan-300 dark:bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
