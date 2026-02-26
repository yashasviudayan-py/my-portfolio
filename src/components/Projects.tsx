'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '@/data/projects.json';
import { architectureDiagrams } from '@/data/architecture';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

function ProjectCard({ project, featured }: { project: typeof projects[number]; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  const diagram = architectureDiagrams[project.id];
  const isBuilding = project.status === 'In Progress';

  return (
    <motion.article
      variants={card}
      className={`rounded-2xl p-6 flex flex-col gap-4 group relative overflow-hidden ${
        featured
          ? 'border border-violet-500/20 bg-white/[0.04] backdrop-blur-sm'
          : 'glass-card'
      }`}
      aria-label={project.title}
    >
      {/* Featured top accent */}
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      )}

      {/* Title + status */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">
          {project.title}
        </h3>
        <span
          className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${
            isBuilding
              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
              : 'border-white/10 bg-white/5 text-white/50'
          }`}
        >
          {isBuilding && <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />}
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-[#A1A1A1] text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Highlights chips (Sentinel-Shield) */}
      {'highlights' in project && Array.isArray(project.highlights) && (
        <ul className="flex flex-col gap-1.5">
          {(project.highlights as string[]).map((h) => {
            const [label, detail] = h.split(' — ');
            return (
              <li key={h} className="flex items-start gap-2 text-xs">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400/60 flex-shrink-0" aria-hidden="true" />
                <span>
                  <span className="text-white/80 font-medium">{label}</span>
                  {detail && <span className="text-[#A1A1A1]"> — {detail}</span>}
                </span>
              </li>
            );
          })}
        </ul>
      )}

      {/* Architecture toggle */}
      {diagram && (
        <div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1.5 text-xs text-[#A1A1A1] hover:text-white transition-colors duration-200 focus:outline-none"
            aria-expanded={open}
          >
            <svg
              viewBox="0 0 16 16"
              className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
            </svg>
            Architecture
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="diagram"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <pre className="mt-3 p-4 rounded-xl bg-white/3 border border-white/8 text-[11px] text-white/60 font-mono leading-relaxed overflow-x-auto whitespace-pre">
                  {diagram}
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/60 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.github || project.demo) && (
      <div className="flex items-center gap-3 pt-1 border-t border-white/5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#A1A1A1] hover:text-white transition-colors duration-200"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon />
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#A1A1A1] hover:text-white transition-colors duration-200"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLinkIcon />
            Live Demo
          </a>
        )}
      </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" aria-label="Projects section">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-3">Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            AI Projects
          </h2>
          <p className="mt-3 text-[#A1A1A1] max-w-xl">
            Production-grade systems built with local LLMs, autonomous agents, and real-world constraints.
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <div key={project.id} className={project.id === 5 ? 'md:col-span-2' : ''}>
              <ProjectCard project={project} featured={project.id === 5} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
