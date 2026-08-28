"use client";

import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "R Rohan",
    jobTitle: "Frontend Developer",
    url: "https://rohan-codes-portfolio.vercel.app",
    sameAs: [
      "https://github.com/Rohan272003",
      "https://www.linkedin.com/in/r-rohan-bbb1232b2",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Frontend Development",
      "Performance Optimization",
    ],
    description:
      "Frontend developer specializing in modern, responsive, and high-performance web applications using React.js and Next.js.",
  };

  // Global Spotlight Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <main
      className="relative min-h-screen overflow-x-hidden selection:bg-purple-500/30 transition-colors duration-500"
      onMouseMove={handleMouseMove}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <ThemeToggle />

      {/* Grid Background Layer */}
      <div className="fixed inset-0 pointer-events-none bg-grid-cyber z-0" />

      {/* Background radial gradient mask that fades the grid at the edges */}
      <div className="fixed inset-0 pointer-events-none bg-slate-50 dark:bg-black transition-colors duration-500 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] z-0" />

      {/* Dynamic Cursor Spotlight that follows mouse globally */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-50"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(176, 38, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <AnimatedBackground />

      {/* Page Content Layers */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <About />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <Projects />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <Experience />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
