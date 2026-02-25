'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { watched2025, watched2026, musicReplay, type WatchedItem } from '@/data/watched';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, delay: i * 0.04 },
  }),
};

type Filter = 'All' | 'Film' | 'TV Show' | 'TV Mini';

function WatchedList({ items, filter }: { items: WatchedItem[]; filter: Filter }) {
  const filtered = filter === 'All' ? items : items.filter((i) => i.type === filter);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {filtered.map((item, idx) => (
        <motion.div
          key={item.title + idx}
          custom={idx}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-start gap-4 px-5 py-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-200 group"
        >
          <span className="text-[#A1A1A1] text-sm tabular-nums mt-0.5 w-6 flex-shrink-0 group-hover:text-white/60 transition-colors">
            {String(idx + 1).padStart(2, '0')}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium leading-snug truncate">
              {item.title}
              {item.rewatch && (
                <span className="ml-2 text-[10px] font-semibold text-amber-400/80 uppercase tracking-wider">Rewatch</span>
              )}
              {item.note && (
                <span className="ml-2 text-[10px] text-white/30 uppercase tracking-wider">{item.note}</span>
              )}
            </p>
            <span className={`text-xs mt-0.5 inline-block ${
              item.type === 'Film'
                ? 'text-blue-400/60'
                : item.type === 'TV Mini'
                ? 'text-purple-400/60'
                : 'text-emerald-400/60'
            }`}>
              {item.type}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function HobbiesPage() {
  const [watchYear, setWatchYear] = useState<'2025' | '2026'>('2026');
  const [filter, setFilter] = useState<Filter>('All');

  const currentList = watchYear === '2025' ? watched2025 : watched2026;
  const filterCounts = {
    All: currentList.length,
    Film: currentList.filter((i) => i.type === 'Film').length,
    'TV Show': currentList.filter((i) => i.type === 'TV Show').length,
    'TV Mini': currentList.filter((i) => i.type === 'TV Mini').length,
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Backdrop */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% -10%, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        {/* Minimal nav */}
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-bold text-lg tracking-tight hover:opacity-70 transition-opacity"
          >
            YU<span className="text-white">.</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-[#A1A1A1] hover:text-white transition-colors duration-200"
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 12L6 8l4-4" />
            </svg>
            Back to Portfolio
          </Link>
        </nav>

        <main className="max-w-5xl mx-auto px-6 pb-24">

          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="pt-8 pb-16"
          >
            <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-3">Beyond the code</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Hobbies
            </h1>
            <p className="text-[#A1A1A1] max-w-xl text-lg">
              Films, music, and the occasional book. The things that keep me human.
            </p>
          </motion.div>

          {/* ── FILMS & TV ── */}
          <section className="mb-24" aria-label="Films and TV shows">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-8"
            >
              {/* All-time favourites — film + TV */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="glass-card rounded-2xl p-5 sm:p-7 border-white/10">
                  <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-4">All-time favourite film</p>
                  <p className="text-white font-bold text-xl leading-snug">Arrival</p>
                  <p className="text-[#A1A1A1] text-sm mt-1">dir. Denis Villeneuve</p>
                  <p className="text-white/25 text-xs mt-4 italic">&ldquo;Language shapes how you experience time.&rdquo;</p>
                </div>
                <div className="glass-card rounded-2xl p-5 sm:p-7 border-white/10">
                  <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-4">All-time favourite TV show</p>
                  <p className="text-white font-bold text-xl leading-snug">DARK</p>
                  <p className="text-[#A1A1A1] text-sm mt-1">Netflix · 2017–2020</p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-xs px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-medium">
                      Watched ×5
                    </span>
                  </div>
                </div>
              </div>

              {/* Films & TV header + year tabs */}
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-2">Watched</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Films &amp; TV
                  </h2>
                </div>
                <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/8">
                  {(['2026', '2025'] as const).map((y) => (
                    <button
                      key={y}
                      onClick={() => { setWatchYear(y); setFilter('All'); }}
                      className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        watchYear === y
                          ? 'bg-white text-black'
                          : 'text-[#A1A1A1] hover:text-white'
                      }`}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(['All', 'Film', 'TV Show', 'TV Mini'] as Filter[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                      filter === f
                        ? 'bg-white text-black border-white'
                        : 'border-white/10 text-[#A1A1A1] hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {f}
                    <span className={`ml-1.5 tabular-nums ${filter === f ? 'text-black/50' : 'text-white/20'}`}>
                      {filterCounts[f]}
                    </span>
                  </button>
                ))}
              </div>

              <WatchedList items={currentList} filter={filter} />

              <p className="mt-4 text-xs text-white/20 text-right">
                {filterCounts.All} titles in {watchYear}
              </p>
            </motion.div>
          </section>

          {/* ── MUSIC ── */}
          <section className="mb-24" aria-label="Music">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-8"
            >
              <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-2">Listening</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Music
              </h2>
              <p className="text-[#A1A1A1] text-sm mb-8">
                Apple Music Replay — my top artists by year.
              </p>

              {/* All-time favourite song */}
              <div className="glass-card rounded-2xl p-5 sm:p-7 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor" aria-hidden="true">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-0.5">All-time favourite song</p>
                  <p className="text-white font-bold text-base">Dheere Dheere</p>
                  <p className="text-[#A1A1A1] text-sm">Yo Yo Honey Singh</p>
                </div>
                <span className="text-white/20 text-2xl" aria-hidden="true">♪</span>
              </div>

              {/* Currently loving + occasional */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="glass-card rounded-2xl p-5 sm:p-7">
                  <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-3">Currently Loving</p>
                  <p className="text-white font-semibold text-lg">Navaan Sandhu</p>
                  <p className="text-[#A1A1A1] text-sm mt-2">All-time favs: Yo Yo Honey Singh · Eminem · The Weeknd</p>
                </div>
                <div className="glass-card rounded-2xl p-5 sm:p-7">
                  <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-3">Occasionally</p>
                  <p className="text-white font-semibold text-lg">Lana Del Rey</p>
                  <p className="text-[#A1A1A1] text-sm mt-2">For the slow, cinematic moments.</p>
                </div>
              </div>

              {/* Replay cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {musicReplay.map((replay, i) => (
                  <motion.div
                    key={replay.year}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                    className="glass-card rounded-2xl p-5 sm:p-7"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-lg font-bold text-white">{replay.year}</span>
                      {replay.totalArtists && (
                        <span className="text-xs text-[#A1A1A1] font-mono">{replay.totalArtists.toLocaleString()} artists</span>
                      )}
                      {replay.note && (
                        <span className="text-xs text-[#A1A1A1] font-mono">{replay.note}</span>
                      )}
                    </div>
                    <ol className="space-y-4">
                      {replay.topArtists.map((artist, idx) => (
                        <li key={artist.name} className="flex items-center gap-3">
                          <span className="text-xs font-bold text-white/20 tabular-nums w-4">{idx + 1}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-white font-medium truncate">{artist.name}</p>
                            {artist.minutes && (
                              <p className="text-xs text-[#A1A1A1] font-mono">
                                {artist.minutes.toLocaleString()} min
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* ── BOOKS ── */}
          <section aria-label="Books">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-2">Reading</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
                Books
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Currently reading */}
                <div className="glass-card rounded-2xl p-5 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-12 h-16 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white/40" fill="currentColor" aria-hidden="true">
                        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-1">Currently Reading</p>
                      <p className="text-white font-semibold text-lg leading-snug">Anna Karenina</p>
                      <p className="text-[#A1A1A1] text-sm mt-0.5">Leo Tolstoy</p>
                      <p className="text-white/30 text-xs mt-3 italic">
                        &ldquo;Not consistent, but getting there.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* On the radar */}
                <div className="glass-card rounded-2xl p-5 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-12 h-16 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white/40" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-1">On the Radar</p>
                      <p className="text-white font-semibold text-lg leading-snug">A Song of Ice and Fire</p>
                      <p className="text-[#A1A1A1] text-sm mt-0.5">George R.R. Martin · 7 books</p>
                      <p className="text-white/30 text-xs mt-3 italic leading-relaxed">
                        Sitting on my desk as we speak. The industry moves fast and life gets busy — but these books aren&apos;t going anywhere. I&apos;ve watched the show twice. I know how it ends. I&apos;m still reading every single one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

        </main>

        {/* Footer */}
        <footer className="py-10 px-6 border-t border-white/6">
          <div className="max-w-5xl mx-auto flex justify-center">
            <p className="text-sm text-[#A1A1A1]">&copy; 2026 Yashasvi Udayan</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
