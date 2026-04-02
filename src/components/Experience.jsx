"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "eCommerce & SaaS Platforms",
      duration: "1+ Years",
      description: "Developed scalable, production-ready web applications using React.js and Next.js. Engineered reusable UI components that accelerated development time by 30%."
    },
    {
      role: "API Integration Specialist",
      company: "Modern JavaScript",
      duration: "Continuous",
      description: "Successfully integrated complex REST APIs and endpoints utilizing Axios. Handled state management and data fetching asynchronously to ensure a highly responsive user experience."
    },
    {
      role: "Performance Engineer",
      company: "Agile Environments",
      duration: "Continuous",
      description: "Implemented aggressive frontend optimization techniques including lazy loading, code splitting, and image optimization to consistently achieve top-tier Lighthouse scores."
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 z-10 px-6 sm:px-12">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold font-sans tracking-tight mb-4 text-slate-900 dark:text-white">
            Development <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-slate-300 dark:border-white/20 ml-4 sm:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-8 sm:ml-12 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[39px] sm:-left-[55px] top-1 w-4 h-4 bg-cyan-500 rounded-full shadow-md dark:shadow-[0_0_15px_rgba(0,240,255,0.8)] border-2 border-white dark:border-black group-hover:bg-purple-500 dark:group-hover:shadow-[0_0_15px_rgba(176,38,255,0.8)] transition-all" />
              
              <div className="glass-card p-6 border border-slate-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-500/50 transition-colors bg-white/70 dark:bg-[#141419]/60">
                <span className="text-sm font-mono text-purple-600 dark:text-purple-400 mb-2 block">{exp.duration}</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                <h4 className="text-lg text-cyan-600 dark:text-cyan-500 font-mono mb-4">{exp.company}</h4>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
