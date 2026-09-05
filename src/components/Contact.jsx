"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Terminal, Lock, Phone } from "lucide-react";

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
          form.reset();
          window.location.reload();
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
    <section
      id="contact"
      className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 py-24 sm:px-12"
    >
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-xs font-mono uppercase tracking-[0.32em] text-cyan-500">
            Contact
          </span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Open a <span className="text-gradient">Channel</span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
        </motion.div>

        <div className="grid grid-cols-1 gap-10 rounded-[2rem] border border-slate-200/80 bg-white/70 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.07)] backdrop-blur-xl dark:border-white/10 dark:bg-[#141419]/70 dark:shadow-[0_0_70px_rgba(0,0,0,0.55)] lg:grid-cols-5 lg:p-8 xl:p-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center lg:col-span-2"
          >
            <h3 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Let&apos;s Connect
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Whether you have a project in mind, want to discuss cutting-edge
              architectures, or just want to say hi — I&apos;m always open to
              new connections.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  text: "amazingrohan003@gmail.com",
                  tone: "cyan",
                },
                {
                  icon: Phone,
                  text: "6379934504",
                  tone: "cyan",
                },
                {
                  icon: MapPin,
                  text: "Kalingarayan palayam, Erode, Tamil Nadu, India - 638316",
                  tone: "violet",
                },
                {
                  icon: Terminal,
                  text: "Status: Online",
                  tone: "cyan",
                },
              ].map(({ icon: Icon, text, tone }) => (
                <div
                  key={text}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:shadow-[0_15px_35px_rgba(34,211,238,0.08)] dark:border-white/10 dark:bg-black/20 dark:hover:border-cyan-500/40"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                      tone === "cyan"
                        ? "border-cyan-500/20 bg-cyan-500/5 text-cyan-600 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400"
                        : "border-violet-500/20 bg-violet-500/5 text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-mono text-slate-700 dark:text-slate-200 sm:text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              action="https://formspree.io/f/mvzvbarg"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-5 shadow-inner shadow-slate-200/40 dark:border-white/10 dark:bg-black/15 dark:shadow-black/20 sm:p-6"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400"
                >
                  Identifier
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Good Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400"
                >
                  Return Address
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="email@domain.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400"
                >
                  Payload
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  className="resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Enter your message sequence here..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                className={`mt-2 w-full rounded-xl border px-6 py-4 text-sm font-mono uppercase tracking-[0.25em] text-white transition-all duration-300 ${
                  status === "idle"
                    ? "border-cyan-400/40 bg-gradient-to-r from-cyan-600 to-violet-600 shadow-[0_12px_35px_rgba(34,211,238,0.32)] hover:shadow-[0_18px_40px_rgba(168,85,247,0.28)]"
                    : status === "submitting"
                      ? "cursor-not-allowed border-purple-500/50 bg-purple-600/60 text-purple-100"
                      : "cursor-not-allowed border-emerald-500/50 bg-emerald-600/60 text-emerald-100"
                }`}
              >
                {status === "idle" && (
                  <span className="flex items-center justify-center gap-3">
                    <Send className="h-4 w-4" />
                    Transmit Signal
                  </span>
                )}
                {status === "submitting" && (
                  <span className="flex items-center justify-center gap-3">
                    <Lock className="h-4 w-4 animate-pulse" />
                    Encrypting...
                  </span>
                )}
                {status === "success" && "Transmission Successful!"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
