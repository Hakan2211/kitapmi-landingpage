"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-surface-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              <path d="M8 7h6" />
              <path d="M8 11h8" />
            </svg>
          </div>
          <span className="text-foreground font-semibold text-lg tracking-tight">
            kitapmi
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            Features
          </a>
          <a
            href="#preview"
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            Preview
          </a>
          <a
            href="#how-it-works"
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            How It Works
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent-light transition-colors"
          >
            Download
            <svg
              width="14"
              height="14"
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
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-muted hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-surface-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href="#features"
              className="text-muted hover:text-foreground transition-colors text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <a
              href="#preview"
              className="text-muted hover:text-foreground transition-colors text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Preview
            </a>
            <a
              href="#how-it-works"
              className="text-muted hover:text-foreground transition-colors text-sm"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent-light transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
