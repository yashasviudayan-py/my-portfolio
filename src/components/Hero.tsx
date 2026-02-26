'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  }),
};

export default function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText('yashasviudayan@gmail.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-16 sm:pt-24 pb-16"
      aria-label="Hero section"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center gap-8">

        {/* Profile photo with breathing glow */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="relative"
        >
          <div
            className="profile-glow rounded-full p-[3px]"
            style={{
              background: 'linear-gradient(135deg, #ffffff, #d4d4d4, #ffffff)',
              borderRadius: '50%',
            }}
          >
            <div className="rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40 bg-zinc-900">
              <Image
                src="/profile.jpg"
                alt="Yashasvi Udayan — AI Engineer"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
                onError={(e) => {
                  // Fallback to initials if no photo
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Initials fallback */}
              <div
                className="w-full h-full flex items-center justify-center text-4xl font-bold text-white select-none"
                aria-hidden="true"
                style={{ background: 'linear-gradient(135deg, #1e1b4b, #2e1065)' }}
              >
                YU
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name + title */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="space-y-2"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-none"
          >
            Yashasvi Udayan
          </h1>
          <p className="text-lg sm:text-xl text-muted font-light tracking-wide">
            AI Systems Architect
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="max-w-2xl text-muted text-base sm:text-lg leading-relaxed"
        >
          I design and ship production-grade AI systems — multi-agent intelligence
          architectures, LLM orchestration engines, and autonomous DevOps pipelines.
          Built on OpenAI, Anthropic, and open-weight models. Zero to deployed, at velocity.
        </motion.p>

        {/* Social links */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="flex items-center gap-5"
        >
          <a href="https://www.linkedin.com/in/yashasvi-udayan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-foreground transition-colors duration-200">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/yashasviudayan-py" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-foreground transition-colors duration-200">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          <button
            onClick={copyEmail}
            aria-label="Copy email address"
            className="relative text-muted hover:text-foreground transition-colors duration-200 focus:outline-none"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            {emailCopied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-cta-bg text-cta-fg font-medium px-2 py-1 rounded-md whitespace-nowrap pointer-events-none">
                Copied!
              </span>
            )}
          </button>
          <a href="https://x.com/iamyashholiic" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-muted hover:text-foreground transition-colors duration-200">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.45}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cta-bg text-cta-fg font-semibold text-sm hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border-theme-hover text-foreground font-semibold text-sm hover:bg-surface transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/30"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-1 text-foreground/20">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
