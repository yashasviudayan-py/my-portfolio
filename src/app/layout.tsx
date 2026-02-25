import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://yashasviudayan.vercel.app"),
  title: {
    default: "Yashasvi Udayan — AI Engineer",
    template: "%s | Yashasvi Udayan",
  },
  description:
    "AI Engineer building autonomous systems, local LLM pipelines, and developer tools. Specializing in multi-agent architectures with Llama-3 on Apple Silicon.",
  keywords: [
    "AI Engineer",
    "LLM",
    "Ollama",
    "Llama-3",
    "Multi-agent AI",
    "Local AI",
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
    url: "https://yashasviudayan.vercel.app",
    siteName: "Yashasvi Udayan",
    title: "Yashasvi Udayan — AI Engineer",
    description:
      "AI Engineer building autonomous systems, local LLM pipelines, and developer tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yashasvi Udayan — AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashasvi Udayan — AI Engineer",
    description:
      "AI Engineer building autonomous systems, local LLM pipelines, and developer tools.",
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
        {children}
      </body>
    </html>
  );
}
