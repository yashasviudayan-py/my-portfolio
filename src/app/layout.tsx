import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yashasvi Udayan",
  url: "https://my-portfolio-yashasviudayan-py.vercel.app",
  jobTitle: "AI Systems Architect",
  email: "yashasviudayan@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/yashasvi-udayan/",
    "https://github.com/yashasviudayan-py",
    "https://x.com/iamyashholiic",
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-yashasviudayan-py.vercel.app"),
  title: {
    default: "Yashasvi Udayan — AI Systems Architect",
    template: "%s | Yashasvi Udayan",
  },
  description:
    "AI Systems Architect building production-grade intelligent systems — from cloud LLM pipelines to autonomous agents and developer tooling.",
  keywords: [
    "AI Systems Architect",
    "AI Engineer",
    "LLM",
    "Multi-agent AI",
    "OpenAI",
    "Anthropic",
    "Next.js",
    "TypeScript",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Yashasvi Udayan" }],
  creator: "Yashasvi Udayan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-yashasviudayan-py.vercel.app",
    siteName: "Yashasvi Udayan",
    title: "Yashasvi Udayan — AI Systems Architect",
    description:
      "Building AI systems that ship — cloud LLM pipelines, autonomous agents, and developer tooling.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yashasvi Udayan — AI Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@iamyashholiic",
    title: "Yashasvi Udayan — AI Systems Architect",
    description:
      "Building AI systems that ship — cloud LLM pipelines, autonomous agents, and developer tooling.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
