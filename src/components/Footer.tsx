export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-10 px-6 border-t border-white/6"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#A1A1A1]">
          &copy; {year} Yashasvi Udayan. Built with Next.js &amp; Tailwind CSS.
        </p>
        <p className="text-xs text-white/20 font-mono">
          Running on M4 Pro · Local-first AI
        </p>
      </div>
    </footer>
  );
}
