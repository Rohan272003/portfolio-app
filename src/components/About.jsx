"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Sparkles,
  BookOpen,
  Flame,
  Code2,
  Briefcase,
  Rocket,
  Trophy,
} from "lucide-react";

export default function About() {
  const skills = [
    { name: "React.js & Next.js", icon: Flame, level: 95 },
    { name: "Tailwind CSS", icon: Sparkles, level: 90 },
    { name: "REST APIs & Axios", icon: Terminal, level: 85 },
    { name: "Performance Optimization", icon: BookOpen, level: 80 },
  ];

  const stats = [
    {
      icon: Briefcase,
      value: "1+",
      label: "Years Experience",
    },
    {
      icon: Rocket,
      value: "10+",
      label: "Projects Built",
    },
    {
      icon: Trophy,
      value: "95%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Effects */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[160px]" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-mono text-cyan-400">
            ABOUT ME
          </span>

          <h2 className="mb-6 text-5xl md:text-6xl xl:text-7xl font-black tracking-tight">
            Building Modern
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Passionate Frontend Developer focused on creating fast,
            responsive, and visually stunning web applications using
            modern technologies.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Card */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <Code2 className="text-cyan-400" />
                <span className="font-mono text-cyan-400">
                  PROFILE.tsx
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Frontend Developer
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                I’m a Frontend Developer with experience building
                scalable and high-performance web applications using
                React.js and Next.js.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                My expertise includes responsive UI development,
                reusable component architecture, API integration,
                performance optimization, and delivering exceptional
                user experiences.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                I enjoy transforming ideas into elegant digital
                products while maintaining clean code and modern
                development practices.
              </p>
            </div>

            {/* Stats */}

            <div className="grid sm:grid-cols-3 gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
                >
                  <stat.icon className="mx-auto mb-4 text-cyan-400" />

                  <h4 className="text-3xl font-black mb-2">
                    {stat.value}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                Technical Skills
              </h3>

              <p className="text-slate-500">
                Technologies I use to build modern applications.
              </p>
            </div>

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{
                  scale: 1.02,
                  x: 6,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <skill.icon className="text-cyan-400" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">
                        {skill.name}
                      </span>

                      <span className="font-mono text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.15,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                      />
                    </div>
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