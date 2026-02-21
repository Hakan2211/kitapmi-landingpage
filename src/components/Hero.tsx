"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function PlatformIcon({ platform }: { platform: "mac" | "windows" | "linux" }) {
  if (platform === "mac") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    );
  }
  if (platform === "windows") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm7 .25l10 .15V21l-10-1.91V13.25z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.86 0 3.56.64 4.9 1.71L12 9.17 7.1 5.71A7.96 7.96 0 0 1 12 4zm-6 8c0-1.44.39-2.79 1.07-3.95L12 12l-4.93 3.95A7.95 7.95 0 0 1 6 12zm6 8a7.96 7.96 0 0 1-4.9-1.71L12 14.83l4.9 3.46A7.96 7.96 0 0 1 12 20zm5.93-4.05L13 12l4.93-3.95A7.95 7.95 0 0 1 20 12c0 1.44-.39 2.79-1.07 3.95z" />
    </svg>
  );
}

function DetectOS(): "mac" | "windows" | "linux" {
  if (typeof window === "undefined") return "mac";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux")) return "linux";
  return "mac";
}

export default function Hero() {
  const [os, setOS] = useState<"mac" | "windows" | "linux">("mac");

  useEffect(() => {
    setOS(DetectOS());
  }, []);

  const platforms = [
    { key: "mac" as const, label: "macOS", ext: ".dmg" },
    { key: "windows" as const, label: "Windows", ext: ".exe" },
    { key: "linux" as const, label: "Linux", ext: ".AppImage" },
  ];

  // Sort to show detected OS first
  const sorted = [...platforms].sort((a, b) =>
    a.key === os ? -1 : b.key === os ? 1 : 0
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-border bg-surface/50 text-sm text-muted mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          AI-Powered Book Writing IDE
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
          Write your next book
          <br />
          <span className="text-gradient">with intelligence</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up animation-delay-200 text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Like Cursor, but for authors. A desktop writing environment with an AI
          agent that understands narrative structure, helps you outline, draft,
          and refine your work.
        </p>

        {/* Download buttons */}
        <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-3">
          {sorted.map((p, i) => (
            <a
              key={p.key}
              href="#download"
              className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                i === 0
                  ? "bg-accent text-background hover:bg-accent-light shadow-lg shadow-accent/20"
                  : "bg-surface border border-surface-border text-foreground hover:border-accent/30 hover:bg-surface-hover"
              }`}
            >
              <PlatformIcon platform={p.key} />
              Download for {p.label}
            </a>
          ))}
        </div>

        <p className="animate-fade-in-up animation-delay-400 text-xs text-muted/60 mt-4">
          Free &amp; Open Source &middot; v0.1.0
        </p>
      </div>

      {/* App window mockup with real screenshot */}
      <div className="animate-fade-in-up animation-delay-500 relative z-10 mt-16 w-full max-w-5xl mx-auto">
        <div className="glow-amber rounded-2xl">
          <div className="window-mockup">
            <div className="window-titlebar">
              <div className="window-dot bg-[#FF5F57]" />
              <div className="window-dot bg-[#FEBC2E]" />
              <div className="window-dot bg-[#28C840]" />
              <span className="ml-3 text-xs text-muted/50 font-mono">
                kitapmi
              </span>
            </div>
            <Image
              src="/screenshot-kitapmi.png"
              alt="Kitapmi — AI-powered book writing IDE showing the three-panel layout with project sidebar, rich text editor, and AI agent assistant"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in-up animation-delay-600 mt-12 flex flex-col items-center gap-2">
        <span className="text-xs text-muted/40">Scroll to explore</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted/30 animate-bounce"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
