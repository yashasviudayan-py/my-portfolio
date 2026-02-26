'use client';

import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const specs = [
  {
    label: 'Machine',
    value: 'Apple M4 Pro',
    detail: '14-core CPU · 16-core GPU · 24 GB Unified Memory',
    icon: '⚡',
  },
  {
    label: 'LLM Runtime',
    value: 'Ollama',
    detail: 'Llama-3.1 · Mistral · Phi-4',
    icon: '◉',
  },
  {
    label: 'Primary Model',
    value: 'Llama-3.1 70B',
    detail: 'Quantized Q4_K_M · Local inference',
    icon: '◈',
  },
];

const tools = [
  { name: 'Claude Code', role: 'AI Coding Assistant' },
  { name: 'Cursor', role: 'IDE' },
  { name: 'Warp', role: 'Terminal' },
  { name: 'Docker Desktop', role: 'Containers' },
  { name: 'TablePlus', role: 'Database GUI' },
  { name: 'Proxyman', role: 'Network Inspector' },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6" aria-label="Hardware and stack section">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-muted mb-3">Environment</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Dev Stack
          </h2>
          <p className="mt-3 text-muted max-w-xl">
            Hardware and tooling that power day-to-day AI development and experimentation.
          </p>
        </motion.div>

        {/* Hardware specs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="glass-card rounded-2xl p-5"
            >
              <div className="flex items-start gap-3">
                <span
                  className="text-xl select-none"
                  aria-hidden="true"
                  style={{ fontFamily: 'monospace' }}
                >
                  {spec.icon}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-1">
                    {spec.label}
                  </p>
                  <p className="text-foreground font-semibold font-mono">{spec.value}</p>
                  <p className="text-xs text-muted font-mono mt-0.5">{spec.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Daily tools */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-widest text-muted mb-5">Daily Tools</p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="glass-card rounded-xl px-4 py-2.5 flex items-center gap-2.5"
              >
                <span className="text-foreground font-medium text-sm">{tool.name}</span>
                <span className="text-muted text-xs">{tool.role}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
