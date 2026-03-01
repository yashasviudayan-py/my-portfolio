'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const courses = [
  {
    id: 'cs229',
    code: 'CS229',
    title: 'Machine Learning',
    status: 'In Progress',
    modules: [
      {
        group: 'Supervised Learning',
        topics: [
          'Linear Regression & Weighted Least Squares',
          'Logistic Regression & Newton\'s Method',
          'Perceptron & Exponential Family',
          'Generalized Linear Models (GLMs)',
          'Gaussian Discriminant Analysis & Naive Bayes',
          'Support Vector Machines & Kernel Methods',
        ],
      },
      {
        group: 'Neural Networks',
        topics: [
          'Neural Network Basics & Architecture',
          'Backpropagation & Gradient Flow',
          'Regularization — L1, L2, Dropout, Early Stopping',
          'Optimization — SGD, Momentum, Adam',
          'Deep Learning Fundamentals',
        ],
      },
      {
        group: 'Model Evaluation & Selection',
        topics: [
          'Bias-Variance Tradeoff',
          'Learning Theory & VC Dimension',
          'Regularization Approaches',
          'Cross-Validation & Model Selection',
          'Advice on Applying Machine Learning',
        ],
      },
      {
        group: 'Ensemble & Tree Methods',
        topics: [
          'Decision Trees',
          'Random Forests',
          'Boosting Algorithms (AdaBoost, Gradient Boosting)',
          'Bagging & Tree Ensembles',
        ],
      },
      {
        group: 'Unsupervised Learning',
        topics: [
          'K-Means Clustering',
          'Mixture of Gaussians',
          'Expectation-Maximization (EM) Algorithm',
          'Factor Analysis',
          'Principal Component Analysis (PCA)',
          'Independent Component Analysis (ICA)',
        ],
      },
      {
        group: 'Reinforcement Learning',
        topics: [
          'Markov Decision Processes (MDPs) & Bellman Equations',
          'Value Iteration & Policy Iteration',
          'Linear Quadratic Regulation (LQR) & LQG',
          'Q-Learning',
          'Policy Search & POMDPs',
        ],
      },
    ],
  },
];

export default function Curriculum() {
  const [open, setOpen] = useState(false);

  return (
    <section id="curriculum" className="py-24 px-6" aria-label="Curriculum directory section">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-xs uppercase tracking-widest text-muted mb-3">Learning</p>

          {/* Dropdown title trigger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 group focus:outline-none mb-3"
            aria-expanded={open}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground group-hover:text-violet-300 transition-colors duration-200">
              Curriculum Directory
            </h2>
            <svg
              viewBox="0 0 16 16"
              className={`w-6 h-6 text-violet-400 transition-transform duration-300 mt-1 ${open ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
            </svg>
          </button>

          <p className="text-muted max-w-xl">
            Courses and programs actively shaping my technical foundation.
          </p>
        </motion.div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="curriculum-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-10 flex flex-col gap-4">
                {courses.map((course) => (
                  <div key={course.id} className="glass-card rounded-2xl p-6">

                    {/* Course header */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-violet-400 tracking-widest">
                          {course.code}
                        </span>
                        <h3 className="text-foreground font-semibold text-base sm:text-lg">
                          {course.title}
                        </h3>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                        <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {course.status}
                      </span>
                    </div>

                    {/* Modules grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {course.modules.map((mod) => (
                        <div key={mod.group}>
                          <p className="text-xs uppercase tracking-widest text-violet-400/70 mb-2.5 font-medium">
                            {mod.group}
                          </p>
                          <ul className="flex flex-col gap-1.5">
                            {mod.topics.map((topic) => (
                              <li key={topic} className="flex items-start gap-2 text-xs">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400/50 flex-shrink-0" aria-hidden="true" />
                                <span className="text-muted">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
