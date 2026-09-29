import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Code, Film, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-white/10 py-12 text-neutral-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-heading font-extrabold text-lg text-white tracking-wider">
            {portfolioData.personalInfo.name.toUpperCase()}
          </span>
          <span className="font-mono-tech text-[11px] text-cyan-400 flex items-center gap-1.5">
            <Code className="w-3 h-3" /> CODE × MOTION × CREATIVITY <Film className="w-3 h-3" />
          </span>
          <span className="text-neutral-500 text-[11px] mt-1">
            {portfolioData.personalInfo.college}
          </span>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-1 text-neutral-500 text-xs">
          <span>© {new Date().getFullYear()} {portfolioData.personalInfo.name}. Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10 hover:border-cyan-400 text-neutral-300 hover:text-white transition-all shadow-lg"
        >
          <span className="font-mono-tech text-xs font-semibold">BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
        </button>
      </div>
    </footer>
  );
};
