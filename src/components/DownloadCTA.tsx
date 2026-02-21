"use client";

import { useEffect, useRef, useState } from "react";

function PlatformIcon({ platform }: { platform: "mac" | "windows" | "linux" }) {
  if (platform === "mac") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    );
  }
  if (platform === "windows") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm7 .25l10 .15V21l-10-1.91V13.25z" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.86 0 3.56.64 4.9 1.71L12 9.17 7.1 5.71A7.96 7.96 0 0 1 12 4zm-6 8c0-1.44.39-2.79 1.07-3.95L12 12l-4.93 3.95A7.95 7.95 0 0 1 6 12zm6 8a7.96 7.96 0 0 1-4.9-1.71L12 14.83l4.9 3.46A7.96 7.96 0 0 1 12 20zm5.93-4.05L13 12l4.93-3.95A7.95 7.95 0 0 1 20 12c0 1.44-.39 2.79-1.07 3.95z" />
    </svg>
  );
}

export default function DownloadCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const platforms = [
    {
      key: "mac" as const,
      label: "macOS",
      detail: "Universal (Apple Silicon + Intel)",
      ext: ".dmg",
    },
    {
      key: "windows" as const,
      label: "Windows",
      detail: "64-bit (x64)",
      ext: ".exe",
    },
    {
      key: "linux" as const,
      label: "Linux",
      detail: "AppImage / .deb (x64)",
      ext: ".AppImage",
    },
  ];

  return (
    <section id="download" className="py-24 sm:py-32 px-6 relative">
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/[0.04] rounded-full blur-[140px]" />
      </div>

      <div
        ref={ref}
        className={`max-w-4xl mx-auto relative z-10 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Start writing your book
          <br />
          <span className="text-gradient">today</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-12">
          Download Kitapmi for free and bring your story to life with the help
          of AI. Available on all major platforms.
        </p>

        {/* Download cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {platforms.map((p) => (
            <a
              key={p.key}
              href="#"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-surface-border bg-surface/30 hover:bg-surface/60 hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent group-hover:bg-accent/15 transition-colors">
                <PlatformIcon platform={p.key} />
              </div>
              <div>
                <div className="text-foreground font-semibold text-sm">
                  {p.label}
                </div>
                <div className="text-muted text-xs mt-0.5">{p.detail}</div>
              </div>
              <div className="inline-flex items-center gap-1.5 text-accent text-xs font-medium mt-1">
                Download {p.ext}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Additional info */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-muted/50">
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Safe &amp; Secure
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" />
            </svg>
            v0.1.0
          </span>
          <a
            href="https://github.com/Hakan2211/bookagent"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Open Source
          </a>
        </div>
      </div>
    </section>
  );
}
