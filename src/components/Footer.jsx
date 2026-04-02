import { Code2, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100/80 dark:bg-black/80 border-t border-slate-200 dark:border-white/10 backdrop-blur-md py-8 relative z-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl font-bold font-sans tracking-tight text-slate-900 dark:text-white mb-2">
            Rohan R<span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm ml-2">v2.0</span>
          </p>
          <p className="text-slate-500 dark:text-gray-500 font-mono text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} // All nodes connected.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/Rohan272003" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            <span className="sr-only">GitHub</span>
            <Code2 className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/r-rohan-bbb1232b2" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Globe className="w-5 h-5" />
          </a>
          <a href="mailto:amazingrohan003@gmail.com" className="text-slate-500 dark:text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
