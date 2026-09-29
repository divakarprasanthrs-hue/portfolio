import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import type { SkillCategory } from '../data/portfolioData';
import { Code2, Film, Sparkles, Sliders, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dev' | 'video'>('dev');

  const categoriesToDisplay: SkillCategory[] =
    activeTab === 'dev' ? portfolioData.devSkillCategories : portfolioData.videoSkillCategories;

  return (
    <section id="skills" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> TECHNICAL & CREATIVE STACK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="text-gradient-cyan">Capabilities</span>
          </motion.h2>
          <p className="max-w-xl text-neutral-400 text-sm mt-3">
            Exploration of engineering tools, frameworks, and post-production software suites.
          </p>
        </div>

        {/* Matrix Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-white/10 backdrop-blur-xl shadow-2xl">
            <button
              onClick={() => setActiveTab('dev')}
              className={`relative flex items-center gap-2.5 px-6 py-3 rounded-xl font-display text-xs font-bold tracking-wider transition-all duration-300 ${
                activeTab === 'dev'
                  ? 'text-cyan-300 shadow-lg'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {activeTab === 'dev' && (
                <motion.div
                  layoutId="skillsActiveTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Code2 className="w-4 h-4 text-cyan-400 relative z-10" />
              <span className="relative z-10">DEVELOPER MATRIX</span>
            </button>

            <button
              onClick={() => setActiveTab('video')}
              className={`relative flex items-center gap-2.5 px-6 py-3 rounded-xl font-display text-xs font-bold tracking-wider transition-all duration-300 ${
                activeTab === 'video'
                  ? 'text-purple-300 shadow-lg'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {activeTab === 'video' && (
                <motion.div
                  layoutId="skillsActiveTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/40 rounded-xl shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Film className="w-4 h-4 text-purple-400 relative z-10" />
              <span className="relative z-10">VIDEO EDITING MATRIX</span>
            </button>
          </div>
        </div>

        {/* Skills Categories Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categoriesToDisplay.map((cat, catIdx) => (
              <div
                key={cat.title}
                className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                      <Sliders className={`w-4 h-4 ${activeTab === 'dev' ? 'text-cyan-400' : 'text-purple-400'}`} />
                      <span>{cat.title}</span>
                    </h3>
                    <span className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                      {cat.skills.length} Skills
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, skillIdx) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs font-mono-tech">
                          <span className="text-neutral-200 font-medium flex items-center gap-1.5">
                            <Check className={`w-3 h-3 ${activeTab === 'dev' ? 'text-cyan-400' : 'text-purple-400'}`} />
                            {skill.name}
                          </span>
                          <span className="text-neutral-400">{skill.level}%</span>
                        </div>

                        {/* Animated Level Bar */}
                        <div className="w-full h-1.5 rounded-full bg-neutral-900 overflow-hidden p-0.5 border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIdx * 0.1 }}
                            className={`h-full rounded-full ${
                              activeTab === 'dev'
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-400 shadow-[0_0_8px_#06b6d4]'
                                : 'bg-gradient-to-r from-purple-500 to-pink-400 shadow-[0_0_8px_#9333ea]'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Badge */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech text-neutral-500">
                  <span>Category {catIdx + 1}</span>
                  <span className="text-cyan-400/80">Editable Config</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
