'use client';

import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function About() {
  return (
    <section id="about" className="py-24 px-6" aria-label="About section">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-muted mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Building AI systems <span className="gradient-text">that ship.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="max-w-2xl space-y-5 text-muted leading-relaxed"
        >
          <p>
            I&apos;m an AI Systems Architect who designs and builds production-grade intelligent systems —
            from cloud-deployed LLM applications to autonomous agent pipelines and internal developer tooling.
          </p>
          <p>
            My work spans <span className="text-foreground font-medium">OpenAI &amp; Anthropic APIs</span>,{' '}
            <span className="text-foreground font-medium">open-weight models</span>, and{' '}
            <span className="text-foreground font-medium">multi-agent orchestration</span>.
            I care about the full stack: architecture, reliability, and user-facing impact.
          </p>
          <p>
            When I&apos;m not shipping AI products, I&apos;m deep in systems design, evaluating new model capabilities,
            or experimenting with agent reasoning frameworks.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { value: '4+', label: 'AI Projects' },
              { value: 'Full', label: 'Stack AI' },
              { value: 'Prod', label: 'Ready' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
