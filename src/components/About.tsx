import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Sparkles, CheckCircle2, Terminal, Cpu, Clapperboard } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> ABOUT THE CREATOR
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Bridging Code Syntax & <span className="text-gradient-cyan">Cinematic Visuals</span>
          </motion.h2>
        </div>

        {/* Top Grid: Profile Card & Narrative Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Profile Card (Left - 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-500 shadow-2xl"
          >
            {/* Ambient Card Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-500" />

            <div>
              {/* Profile Image & Avatar Frame */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-cyan-500/40 p-1 bg-neutral-900 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/avatar.jpg"
                  alt={portfolioData.personalInfo.name}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-1.5 px-2 py-1 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>KCE Student</span>
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-white mb-1">
                  {portfolioData.personalInfo.name}
                </h3>
                <p className="text-sm font-mono-tech text-cyan-400 font-medium flex items-center justify-center gap-2">
                  <span>Developer</span> • <span>Video Editor</span>
                </p>
                <p className="text-xs text-neutral-400 flex items-center justify-center gap-1.5 mt-2">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{portfolioData.personalInfo.college}</span>
                </p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/90 border border-white/10 text-xs text-neutral-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{portfolioData.personalInfo.status}</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
              {portfolioData.personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                  <span className="text-[10px] font-mono-tech tracking-wider text-neutral-400 block uppercase">
                    {stat.label}
                  </span>
                  <span className="font-display font-bold text-sm text-cyan-300 block mt-0.5">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Narrative & Philosophy (Right - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {/* Bio Box */}
            <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-xl">
              <h3 className="font-heading font-bold text-2xl text-white mb-4 flex items-center gap-3">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <span>Engineering Digital Experiences</span>
              </h3>
              <p className="text-neutral-300 font-sans leading-relaxed mb-6 text-base">
                {portfolioData.personalInfo.bio}
              </p>
              <p className="text-neutral-400 font-sans leading-relaxed text-sm">
                At <strong className="text-white">{portfolioData.personalInfo.college}</strong>, I combine rigorous software engineering principles with high-end creative post-production. Whether crafting scalable web applications using React & TypeScript or cutting high-energy motion reels in Adobe Premiere Pro and After Effects, my goal is to deliver memorable digital products.
              </p>
            </div>

            {/* Core Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Code Pillar */}
              <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-1">
                  Software Architecture
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Clean modular web applications, interactive WebGL 3D views, component design systems, and efficient API integration.
                </p>
              </div>

              {/* Motion Pillar */}
              <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                  <Clapperboard className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-1">
                  Visual Storytelling
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Cinematic video editing, kinetic typography, precision sound design, color grading, and short-form video optimization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Journey & Timeline Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl text-white">
              Journey & Milestones
            </h3>
            <p className="text-sm font-mono-tech text-neutral-400 mt-1">
              Customizable timeline tracing education and skill growth
            </p>
          </div>

          <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
            {portfolioData.journey.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_10px_#06b6d4]" />

                {/* Timeline Year Pill */}
                <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono-tech font-bold text-cyan-400 mb-2 sm:mb-0">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                    {item.year}
                  </span>
                </div>

                {/* Card Container */}
                <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-heading font-bold text-xl text-white">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs font-mono-tech text-cyan-400/90 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
