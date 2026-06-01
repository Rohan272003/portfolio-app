"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "DAR Jewellery",
      description:
        "A modern jewellery platform built with Next.js, focused on performance, responsive design, SEO optimization, and a premium shopping experience.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "SEO"],
      image: "/DAR.png",
      link: "https://darjewellery.com/",
    },
    {
      id: "02",
      title: "Click & Collect",
      description:
        "A customer pickup and reservation workflow allowing users to browse products and reserve them seamlessly through a responsive interface.",
      tech: ["Next.js", "Tailwind CSS", "Axios", "REST API"],
      image: "/ClickandCollect.png",
      link:
        "https://www.darjewellery.com/clickAndCollect/clickAndCollect",
    },
    {
      id: "03",
      title: "Book My Gold",
      description:
        "A digital gold booking platform that enables users to reserve and manage gold plans through an intuitive and user-friendly experience.",
      tech: ["React.js", "Next.js", "Tailwind CSS"],
      image: "/BookMyGold.png",
      link:
        "https://www.darjewellery.com/GoldPlan/BookMyGolds",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-20 right-20 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28 text-center"
        >
          <span className="mb-6 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-mono text-cyan-400">
            SELECTED WORK
          </span>

          <h2 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
            Featured
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            A collection of projects focused on performance,
            scalability, and delivering exceptional user
            experiences.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* Browser Mockup */}

              <motion.div
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                {/* Browser Bar */}

                <div className="flex h-12 items-center gap-2 border-b border-white/10 px-5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                {/* Screenshot */}

                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Content */}

              <div>
                <span className="font-mono text-cyan-400">
                  {project.id}
                </span>

                <h3 className="mt-4 mb-6 text-4xl font-black md:text-5xl">
                  {project.title}
                </h3>

                <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mb-10 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-3 text-lg font-medium text-cyan-400 transition"
                >
                  View Live Project

                  <ArrowUpRight size={22} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}