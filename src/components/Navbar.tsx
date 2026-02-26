'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#stack', label: 'Stack', id: 'stack' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl border-b border-border-theme bg-overlay' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-foreground font-bold text-lg tracking-tight hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/30 rounded"
          aria-label="Yashasvi Udayan — Home"
        >
          YU<span className="text-foreground">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map((link) => {
            const isActive = isHome && activeSection === link.id;
            const href = isHome ? link.href : `/${link.href}`;
            return (
              <li key={link.href}>
                <a
                  href={href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/30 ${
                    isActive
                      ? 'text-foreground'
                      : 'text-muted hover:text-foreground hover:bg-surface'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/hobbies"
              className={`relative px-3.5 py-2 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/30 ${
                pathname === '/hobbies'
                  ? 'text-foreground'
                  : 'text-muted hover:text-foreground hover:bg-surface'
              }`}
              aria-current={pathname === '/hobbies' ? 'page' : undefined}
            >
              Hobbies
              {pathname === '/hobbies' && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  aria-hidden="true"
                />
              )}
            </a>
          </li>
        </ul>

        {/* Right side: theme toggle + resume + mobile toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-border-theme-hover text-sm text-foreground hover:bg-surface transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/30"
            aria-label="Download resume PDF"
          >
            Resume
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v7m0 0l-3-3m3 3l3-3M3 13h10" />
            </svg>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/30"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden border-t border-border-theme bg-overlay backdrop-blur-xl overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="px-6 py-4 space-y-1" role="list">
              {links.map((link) => {
                const href = isHome ? link.href : `/${link.href}`;
                const isActive = isHome && activeSection === link.id;
                return (
                  <li key={link.href}>
                    <a
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2.5 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/30 ${
                        isActive
                          ? 'text-foreground bg-surface'
                          : 'text-muted hover:text-foreground hover:bg-surface'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="/hobbies"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    pathname === '/hobbies'
                      ? 'text-foreground bg-surface'
                      : 'text-muted hover:text-foreground hover:bg-surface'
                  }`}
                >
                  Hobbies
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-surface transition-all duration-200"
                  aria-label="Download resume PDF"
                >
                  Resume ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
