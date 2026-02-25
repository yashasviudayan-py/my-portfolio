import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black noise-bg">
      {/* Subtle radial gradient backdrop */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Experience />
          <Projects />
          <About />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
