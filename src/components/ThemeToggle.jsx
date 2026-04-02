"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed top-6 right-6 w-12 h-12 z-50 rounded-full" />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-black/50 border border-slate-200 dark:border-white/20 text-slate-800 dark:text-cyan-400 shadow-md dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 backdrop-blur-md"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5 sm:w-6 sm:h-6" /> : <Moon className="w-5 h-5 sm:w-6 sm:h-6" />}
    </motion.button>
  );
}
