'use client';

import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const bullets = [
  'Designed and shipped five production AI systems: The Orchestrator (multi-agent natural language CLI), PR Agent (automated code review via local LLMs), Context Core (persistent vector memory layer), The Autonomous Researcher (self-directed web research pipeline), and Sentinel-Shield (enterprise AI security gateway) — all built on local compute or open-weight models.',
  'Built Sentinel-Shield to solve the enterprise Trust Gap: a security gateway with real-time data leak interception, gateway-level prompt injection defense, per-user budget enforcement, and permanent compliance audit trails targeting Finance and Healthcare.',
  'Mastered Apple Silicon (Metal) GPU acceleration to run 8B parameter LLMs locally at $0 cloud cost; established CI/CD via GitHub Actions with multi-platform Docker image publishing and security-first credential redaction across all vector ingestion workflows.',
];

const skillGroups = [
  {
    category: 'AI & Machine Learning',
    items: ['LangGraph', 'RAG', 'Vector Databases (ChromaDB)', 'Agentic Orchestration', 'Local LLMs (Ollama, Llama-3-8B, Nomic)', 'Prompt Engineering', 'Multi-Agent Systems'],
  },
  {
    category: 'Security & Governance',
    items: ['AI Security Gateways', 'Prompt Injection Defense', 'Data Leak Prevention', 'Compliance Audit Systems', 'Budget Governance'],
  },
  {
    category: 'Backend & Infrastructure',
    items: ['Python', 'FastAPI', 'Redis', 'Docker (Multi-platform)', 'GitHub Actions (CI/CD)', 'Pydantic v2'],
  },
  {
    category: 'Hardware & Tools',
    items: ['Apple Silicon (Metal) acceleration', 'Local inference optimization', 'Git', 'GitHub CLI', 'SQLite', 'Pytest'],
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6" aria-label="Experience section">
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
            Experience
          </h2>
        </motion.div>

        {/* Experience card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="glass-card rounded-2xl p-6 sm:p-8 mb-12"
        >
          {/* Role header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
            <h3 className="text-white font-semibold text-lg leading-snug">
              Independent AI Systems Developer
            </h3>
            <span className="text-[#A1A1A1] text-sm font-mono whitespace-nowrap">
              Jan 2026 – Present
            </span>
          </div>
          <p className="text-[#A1A1A1] text-sm mb-6">Self-Directed · Lucknow, India</p>

          {/* Bullet points */}
          <ul className="space-y-4">
            {bullets.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" aria-hidden="true" />
                <p className="text-[#A1A1A1] text-sm leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-8">Technical Skills</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-lg border border-white/8 bg-white/3 text-white/70 font-mono hover:border-white/20 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
