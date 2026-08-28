"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Mail,
  Terminal,
  Download,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer • React.js • Next.js";

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        i = 0;
        setText("");
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const socials = [
    {
      icon: Code2,
      link: "https://github.com/Rohan272003",
    },
    {
      icon: Globe,
      link: "https://www.linkedin.com/in/r-rohan-bbb1232b2",
    },
    {
      icon: Mail,
      link: "mailto:amazingrohan003@gmail.com",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-[45%_55%] items-center gap-12">
          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Floating Tech Badges */}

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute -left-10 top-10 z-20 rounded-full border border-cyan-500/20 bg-white/10 px-4 py-2 backdrop-blur-xl"
              >
                <span className="text-sm font-mono text-cyan-400">
                  React.js
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute -right-10 top-20 z-20 rounded-full border border-purple-500/20 bg-white/10 px-4 py-2 backdrop-blur-xl"
              >
                <span className="text-sm font-mono text-purple-400">
                  Next.js
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute -left-6 bottom-14 z-20 rounded-full border border-cyan-500/20 bg-white/10 px-4 py-2 backdrop-blur-xl"
              >
                <span className="text-sm font-mono text-cyan-400">
                  Javascript
                </span>
              </motion.div>

              {/* Avatar */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotateY: 10,
                  rotateX: -5,
                }}
                className="relative h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px]"
                style={{ perspective: 1000 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 p-1">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
                    <Image
                      src="/Image2.png"
                      alt="R Rohan - Frontend Developer portrait"
                      fill
                      priority
                      className="object-cover object-top"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/20" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Available Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="font-mono text-sm text-cyan-400">
                Available For Work
              </span>
            </div>

            {/* Name */}

            <div className="mb-5 flex items-center gap-3">
              <Terminal className="h-5 w-5 text-cyan-400" />

              <span className="font-mono uppercase tracking-[0.3em] text-cyan-400">
                R Rohan
              </span>
            </div>

            {/* Heading */}

            <h1 className="mb-6 text-6xl font-black leading-none tracking-tight md:text-7xl xl:text-8xl">
              <span className="block text-slate-900 dark:text-white">
                Frontend
              </span>

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            {/* Typewriter */}

            <div className="mb-8 h-10">
              <p className="font-mono text-xl text-slate-600 dark:text-slate-300 sm:text-2xl">
                {text}

                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className="ml-1 inline-block h-6 w-[3px] bg-cyan-400"
                />
              </p>
            </div>

            {/* Description */}

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I craft modern, responsive, and high-performance web applications
              using React.js, Next.js, TypeScript, and Tailwind CSS. I design
              clean digital experiences that help brands grow, convert, and
              stand out online.
            </p>

            {/* Socials */}

            <div className="mb-10 flex gap-5">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  whileHover={{
                    scale: 1.1,
                    y: -6,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-slate-600 backdrop-blur-xl transition-all dark:text-slate-300"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/Rohan_rajasekar_reactjs_developer.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.35)]"
              >
                <Download size={18} />
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl"
              >
                Contact Me
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
