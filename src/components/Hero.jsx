"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Globe, Mail, Terminal } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer...";
  
  // Typewriter Effect
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-12 z-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Cyber Avatar with 3D Float */}
        <motion.div 
          className="flex justify-center lg:justify-end order-1 lg:order-none"
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
          style={{ perspective: 1000 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border border-slate-300 dark:border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.15)] ring-4 ring-cyan-500/20">
            <Image
              src="/Image.png"
              alt="Profile Avatar"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Subtle glow overlay */}
            <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Right Side: Glowing Glass Card */}
        <motion.div 
          className="glass-card p-8 sm:p-12 relative group"
          initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Subtle neon pulse behind card */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[rgba(0,240,255,0.3)] to-[rgba(176,38,255,0.3)] rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <Terminal className="text-cyan-500 dark:text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase shadow-cyan-500/50 drop-shadow-md">R Rohan</span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 font-sans tracking-tight leading-tight text-slate-900 dark:text-white">
              Initialize <br />
              <span className="text-gradient">Portfolio.</span>
            </h1>
            
            <div className="h-10 mb-8 flex items-center">
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-gray-300 font-mono">
                {text}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 sm:w-3 h-5 sm:h-6 bg-cyan-500 dark:bg-cyan-400 ml-[2px] translate-y-1"
                />
              </p>
            </div>

            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Frontend Developer specializing in React.js & Next.js, building fast, scalable, and user-friendly web applications.
            </p>

            <div className="flex gap-4 sm:gap-6 mb-10">
              {[
                { icon: Code, link: "https://github.com/Rohan272003", color: "hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]" },
                { icon: Globe, link: "https://www.linkedin.com/in/r-rohan-bbb1232b2", color: "hover:text-purple-500 dark:hover:text-purple-400 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(176,38,255,0.3)]" },
                { icon: Mail, link: "mailto:amazingrohan003@gmail.com", color: "hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.link} 
                  target="_blank" 
                  className={`p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-500 dark:text-gray-400 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="pt-8 border-t border-slate-200 dark:border-white/10"
            >
               <motion.a 
                href="/Rohan_Reactjs_Developer.pdf" 
                download="Rohan_Reactjs_Developer.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center w-full py-4 rounded-xl bg-gradient-to-r from-[rgba(0,240,255,0.05)] to-[rgba(176,38,255,0.05)] dark:from-[rgba(0,240,255,0.1)] dark:to-[rgba(176,38,255,0.1)] border border-[rgba(0,240,255,0.2)] hover:border-[rgba(0,240,255,0.6)] font-mono text-sm tracking-widest text-slate-900 dark:text-white uppercase overflow-hidden transition-all duration-300 shadow-sm dark:shadow-[0_0_15px_rgba(0,240,255,0.05)] hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
               >
                 <span className="relative z-10 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-300">Download CV // Execute</span>
                 {/* Shine effect on hover */}
                 <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-black/5 dark:via-white/10 to-transparent z-0" />
               </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
