"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Terminal, Lock } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          form.reset(); // Reset form
          window.location.reload(); // Reload
        }, 1500);
      } else {
        setStatus("idle");
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center py-24 z-10 px-6 sm:px-12">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold font-sans tracking-tight mb-4 text-slate-900 dark:text-white">
            Open a <span className="text-gradient">Channel</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white/70 dark:bg-[#141419]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-sm dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-slate-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
              Whether you have a project in mind, want to discuss cutting-edge architectures, or just want to say hi. I am always open to new connections.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-700 dark:text-gray-300">
                <div className="p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="font-mono text-sm sm:text-base">amazingrohan003@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700 dark:text-gray-300">
                <div className="p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="font-mono text-sm sm:text-base break-words">Kalingarayan palayam , Erode , Tamil Nadu , India - 638316</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700 dark:text-gray-300">
                <div className="p-3 bg-slate-100 dark:bg-white/5 border border-cyan-400 dark:border-cyan-500/30 rounded-lg shadow-sm dark:shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                  <Terminal className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="font-mono text-sm sm:text-base">Status: Online</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form action="https://formspree.io/f/mvzvbarg" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-6">
               <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest">Identifier</label>
                  <input required type="text" id="name" name="name" className="bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Good Name" />
               </div>
               
               <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest">Return Address</label>
                  <input required type="email" id="email" name="email" className="bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="email@domain.com" />
               </div>

               <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest">Payload</label>
                  <textarea required id="message" name="message" rows={5} className="bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Enter your message sequence here..."></textarea>
               </div>

               <motion.button 
                  type="submit"
                  disabled={status !== "idle"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  className={`mt-4 w-full py-4 rounded-xl flex items-center justify-center gap-3 font-mono text-sm tracking-widest text-white uppercase transition-all duration-300 border ${
                    status === "idle" ? "bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-[rgba(0,240,255,0.2)] dark:to-[rgba(176,38,255,0.2)] border-[rgba(0,240,255,0.4)] hover:border-[rgba(0,240,255,0.8)] shadow-md dark:shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]" :
                    status === "submitting" ? "bg-purple-600/50 dark:bg-purple-500/20 border-purple-500/50 text-purple-100 dark:text-purple-300 cursor-not-allowed" :
                    "bg-green-600/50 dark:bg-green-500/20 border-green-500/50 text-green-100 dark:text-green-300 cursor-not-allowed"
                  }`}
               >
                  {status === "idle" && <><Send className="w-5 h-5 text-white dark:text-cyan-300" /> Transmit Signal</>}
                  {status === "submitting" && <><Lock className="w-5 h-5 animate-pulse" /> Encrypting...</>}
                  {status === "success" && "Transmission Successful!"}
               </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
