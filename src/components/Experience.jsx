"use client";

import { motion } from "framer-motion";
import { Code2, Database, Zap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "eCommerce & SaaS Platforms",
      duration: "1+ Years",
      description:
        "Developed scalable, production-ready web applications using React.js and Next.js. Engineered reusable UI components that accelerated development time by 30%.",
      icon: Code2,
    },
    {
      role: "API Integration Specialist",
      company: "Modern JavaScript",
      duration: "Continuous",
      description:
        "Successfully integrated complex REST APIs and endpoints utilizing Axios. Handled state management and data fetching asynchronously to ensure a highly responsive user experience.",
      icon: Database,
    },
    {
      role: "Performance Engineer",
      company: "Agile Environments",
      duration: "Continuous",
      description:
        "Implemented aggressive frontend optimization techniques including lazy loading, code splitting, and image optimization to consistently achieve top-tier Lighthouse scores.",
      icon: Zap,
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 z-10 px-6 sm:px-12">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="mb-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-xs font-mono uppercase tracking-[0.32em] text-cyan-500">
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-sans tracking-tight mb-4 text-slate-900 dark:text-white">
            Development <span className="text-gradient">Timeline</span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
        </motion.div>

        <div className="relative ml-4 border-l border-slate-300/80 dark:border-white/15 sm:ml-0">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative mb-12 ml-8 sm:ml-10"
              >
                <div className="absolute -left-[39px] top-7 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-cyan-500 shadow-[0_0_18px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500 dark:border-slate-950 sm:-left-[48px]" />

                <div className="glass-card overflow-hidden p-6 sm:p-8">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/8 text-cyan-500 dark:border-cyan-400/30 dark:bg-cyan-500/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <h4 className="mt-1 text-sm font-mono uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
                          {exp.company}
                        </h4>
                      </div>
                    </div>

                    <span className="rounded-full border border-violet-400/20 bg-violet-500/8 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
