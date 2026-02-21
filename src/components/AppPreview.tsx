"use client";

import { useEffect, useRef, useState } from "react";

export default function AppPreview() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="preview" className="py-24 sm:py-32 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
            A writing environment built for focus
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Three-panel layout with your project structure, distraction-free
            editor, and AI assistant — all in one window.
          </p>
        </div>

        {/* Large preview mockup */}
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-[0.98]"
          }`}
        >
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

              {/* Full editor mockup */}
              <div className="relative bg-[#0D0D0D] min-h-[300px] sm:min-h-[500px] flex items-center justify-center">
                {/* Placeholder content */}
                <div className="absolute inset-0 flex">
                  {/* Left sidebar mock */}
                  <div className="hidden sm:block w-52 border-r border-surface-border/50 p-5">
                    <div className="space-y-2">
                      <div className="h-2.5 w-20 bg-surface-border/40 rounded" />
                      <div className="mt-4 space-y-2.5">
                        {[70, 55, 65, 50, 60, 45, 55].map((w, i) => (
                          <div
                            key={i}
                            className={`h-2 rounded ${
                              i === 3
                                ? "bg-accent/20 w-full"
                                : "bg-surface-border/30"
                            }`}
                            style={{ width: `${w}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center editor mock */}
                  <div className="flex-1 p-6 sm:p-10">
                    <div className="max-w-md mx-auto space-y-4">
                      <div className="h-3 w-48 bg-surface-border/40 rounded" />
                      <div className="mt-6 space-y-2.5">
                        {[100, 95, 80, 100, 70, 90, 100, 85, 60].map(
                          (w, i) => (
                            <div
                              key={i}
                              className="h-2 bg-surface-border/20 rounded"
                              style={{ width: `${w}%` }}
                            />
                          )
                        )}
                      </div>
                      <div className="mt-6 space-y-2.5">
                        {[100, 88, 95, 75, 100, 65].map((w, i) => (
                          <div
                            key={i}
                            className="h-2 bg-surface-border/20 rounded"
                            style={{ width: `${w}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right AI panel mock */}
                  <div className="hidden lg:block w-64 border-l border-surface-border/50 p-5">
                    <div className="h-2.5 w-24 bg-surface-border/40 rounded mb-6" />
                    <div className="space-y-3">
                      <div className="bg-surface/40 rounded-lg p-3 space-y-2">
                        <div className="h-2 w-16 bg-accent/20 rounded" />
                        {[100, 85, 70].map((w, i) => (
                          <div
                            key={i}
                            className="h-1.5 bg-surface-border/30 rounded"
                            style={{ width: `${w}%` }}
                          />
                        ))}
                      </div>
                      <div className="bg-accent/5 border border-accent/10 rounded-lg p-3 space-y-2">
                        <div className="h-2 w-12 bg-surface-border/30 rounded" />
                        {[90, 60].map((w, i) => (
                          <div
                            key={i}
                            className="h-1.5 bg-surface-border/30 rounded"
                            style={{ width: `${w}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center overlay text */}
                <div className="relative z-10 text-center px-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface/80 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-accent/60" />
                    <span className="text-sm text-muted">
                      Drop your screenshot here — or keep this placeholder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights below preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            {
              label: "Project Sidebar",
              desc: "Navigate chapters and sections in a visual tree",
            },
            {
              label: "Rich Text Editor",
              desc: "Markdown-powered with word count and formatting",
            },
            {
              label: "AI Chat Panel",
              desc: "Context-aware assistant that reads your manuscript",
            },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-sm font-medium text-foreground mb-1">
                {item.label}
              </div>
              <div className="text-xs text-muted">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
