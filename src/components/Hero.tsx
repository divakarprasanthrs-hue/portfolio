import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero3D } from './Hero3D';
import { portfolioData } from '../data/portfolioData';
import { Code2, Film, Sparkles, Terminal, Play, Layers, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const codeSnippets = [
    { text: '<HeroArchitecture />', pos: 'top-20 left-6 sm:left-14', delay: 0.2 },
    { text: 'ffmpeg -i impact.mp4 -c:v libx264', pos: 'top-28 right-6 sm:right-16', delay: 0.4 },
    { text: 'async function renderAura()', pos: 'bottom-28 left-8 sm:left-20', delay: 0.6 },
    { text: 'LUT: Anime_Neon_Glow.cube', pos: 'bottom-36 right-8 sm:right-24', delay: 0.8 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-neutral-950 anime-speedlines"
    >
      {/* Superhero Energy Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-pink-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-pink-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* 3D WebGL Canvas */}
      <Hero3D mousePos={mousePos} />

      {/* Floating Holographic HUD Chips */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        {codeSnippets.map((snippet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: snippet.delay }}
            className={`absolute ${snippet.pos} glass-panel px-4 py-2 rounded-xl border border-cyan-500/30 text-xs font-mono-tech text-cyan-300 shadow-2xl backdrop-blur-md animate-float-slow aura-cyan`}
            style={{ animationDelay: `${idx * 1.8}s` }}
          >
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{snippet.text}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hero Content Box */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Institution & Superhero Anime Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-neutral-900/90 border border-cyan-500/40 backdrop-blur-xl mb-6 shadow-2xl shadow-cyan-950/50 aura-cyan"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono-tech font-bold tracking-widest text-cyan-300 uppercase">
            {portfolioData.personalInfo.badge}
          </span>
        </motion.div>

        {/* Dominant Name Typography: DIVAKARPRASANTH S.R */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[9vw] xl:text-[9.5vw] font-black tracking-tight text-white leading-none mb-3 drop-shadow-[0_0_35px_rgba(6,182,212,0.4)] select-none uppercase"
        >
          DIVAKARPRASANTH{' '}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 opacity-90">
            S.R
          </span>
        </motion.h1>

        {/* Role Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex items-center justify-center gap-3 text-lg sm:text-2xl md:text-3xl font-display font-extrabold text-neutral-200 tracking-wider mb-3 uppercase"
        >
          <span className="flex items-center gap-2 text-cyan-400">
            <Code2 className="w-6 h-6" /> DEVELOPER
          </span>
          <span className="text-pink-500 font-bold">•</span>
          <span className="flex items-center gap-2 text-purple-400">
            <Film className="w-6 h-6" /> VIDEO EDITOR
          </span>
        </motion.div>

        {/* Institution Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-xs sm:text-base font-mono-tech font-bold text-neutral-400 tracking-widest uppercase mb-6"
        >
          {portfolioData.personalInfo.college}
        </motion.div>

        {/* Superhero Anime Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="max-w-3xl text-xl sm:text-3xl font-heading font-extrabold text-gradient-anime tracking-wide mb-10 text-balance"
        >
          “CODE THE FUTURE. EDIT THE MOMENT.”
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary CTA: View Work */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-black text-sm text-neutral-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 hover:from-cyan-300 hover:to-cyan-200 shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 uppercase"
          >
            <span>VIEW MY WORK</span>
            <Layers className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          </a>

          {/* Secondary CTA: Video Reel */}
          <a
            href="#video"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-display font-black text-sm text-neutral-100 bg-neutral-900/90 hover:bg-neutral-800 border border-purple-500/50 hover:border-purple-400 shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 uppercase"
          >
            <Play className="w-4 h-4 text-purple-400 fill-purple-400/20 group-hover:scale-110 transition-transform" />
            <span>VIDEO REEL</span>
          </a>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-display font-bold text-sm text-neutral-300 bg-neutral-900/60 hover:bg-neutral-900 border border-white/15 hover:border-white/30 transition-all duration-300"
          >
            <span>CONTACT ME</span>
            <Terminal className="w-4 h-4 text-neutral-400 group-hover:text-cyan-400 transition-colors" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-[10px] font-mono-tech tracking-widest text-cyan-400/80 uppercase">
          SCROLL TO UNLOCK
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-cyan-500/40 flex items-start justify-center p-1 backdrop-blur-sm aura-cyan">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]"
          />
        </div>
      </motion.div>
    </section>
  );
};
