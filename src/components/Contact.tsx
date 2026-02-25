'use client';

import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdalylbl';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [useFormspree] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText('yashasviudayan@gmail.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (useFormspree) {
      setFormState('sending');
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          setFormState('success');
          form.reset();
        } else {
          setFormState('error');
        }
      } catch {
        setFormState('error');
      }
    } else {
      // Fallback: open mailto
      const name = data.get('name') as string;
      const message = data.get('message') as string;
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(message);
      window.location.href = `mailto:yashasviudayan@gmail.com?subject=${subject}&body=${body}`;
    }
  }

  return (
    <section id="contact" className="py-24 px-6" aria-label="Contact section">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-[#A1A1A1]">
            Open to AI engineering roles, freelance projects, and interesting collaborations.
            I respond within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#A1A1A1] mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/7 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#A1A1A1] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/7 transition-colors duration-200"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#A1A1A1] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or what you're looking to build..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/7 transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === 'sending'}
              className="w-full py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {formState === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status messages */}
            {formState === 'success' && (
              <p className="text-center text-emerald-400 text-sm" role="status">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {formState === 'error' && (
              <p className="text-center text-red-400 text-sm" role="alert">
                Something went wrong. Try emailing directly.
              </p>
            )}
          </form>
        </motion.div>

        {/* Alternative contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <a
            href="https://github.com/yashasviudayan-py"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#A1A1A1] hover:text-white transition-colors duration-200"
            aria-label="GitHub profile"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <span className="text-white/10">·</span>
          <a
            href="https://www.linkedin.com/in/yashasvi-udayan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#A1A1A1] hover:text-white transition-colors duration-200"
            aria-label="LinkedIn profile"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span className="text-white/10">·</span>
          <button
            onClick={copyEmail}
            className="relative flex items-center gap-2 text-sm text-[#A1A1A1] hover:text-white transition-colors duration-200 focus:outline-none"
            aria-label="Copy email address"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {emailCopied ? 'Copied!' : 'Email'}
            {emailCopied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black font-medium px-2 py-1 rounded-md whitespace-nowrap pointer-events-none">
                yashasviudayan@gmail.com
              </span>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
