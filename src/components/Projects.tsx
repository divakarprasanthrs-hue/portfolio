import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ExternalLink, Play, Sparkles, X, Code2, Film, Layers, ArrowRight } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'development' | 'video'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5" /> CURATED PORTFOLIO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Selected <span className="text-gradient-cyan">Works</span>
          </motion.h2>
          <p className="max-w-xl text-neutral-400 text-sm mt-3">
            Handcrafted software applications and cinematic motion edits engineered for visual impact.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-white/10 backdrop-blur-xl">
            {(['all', 'development', 'video'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-display font-bold tracking-wider capitalize transition-all duration-300 ${
                  filter === cat
                    ? 'text-cyan-300'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="projectFilterTab"
                    className="absolute inset-0 bg-cyan-500/20 border border-cyan-400/40 rounded-xl shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat === 'all' && <Layers className="w-3.5 h-3.5" />}
                  {cat === 'development' && <Code2 className="w-3.5 h-3.5" />}
                  {cat === 'video' && <Film className="w-3.5 h-3.5" />}
                  <span>{cat === 'all' ? 'All Projects' : cat === 'development' ? 'Development' : 'Video & Motion'}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-500 shadow-2xl flex flex-col justify-between"
              >
                {/* Visual Media Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono-tech font-bold uppercase tracking-wider backdrop-blur-md border ${
                      project.category === 'development'
                        ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30'
                        : 'bg-purple-950/80 text-purple-300 border-purple-500/30'
                    }`}>
                      {project.category === 'development' ? <Code2 className="w-3 h-3" /> : <Film className="w-3 h-3" />}
                      <span>{project.category}</span>
                    </span>
                  </div>

                  {/* Hover Overlay Light Effect */}
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Quick Play Icon for Video Projects */}
                  {project.category === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Info Area */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </div>

                    <p className="text-xs font-mono-tech text-cyan-400/90 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-neutral-400 font-sans leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono-tech text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Action Bar */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono-tech text-cyan-400 group-hover:underline flex items-center gap-1">
                        <span>Explore Project</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>

                      {project.githubUrl && (
                        <span className="text-neutral-400 hover:text-white p-1">
                          <GithubIcon />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-neutral-950/85 backdrop-blur-xl"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl z-10 my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-900/90 border border-white/20 text-neutral-300 hover:text-white hover:border-cyan-400 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-[11px] font-mono-tech font-bold text-cyan-300 uppercase mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-heading font-extrabold text-3xl text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-mono-tech text-cyan-300">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {/* Tech & Tools */}
                <div>
                  <h4 className="font-heading font-bold text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-3">
                    Technologies & Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-tech text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                    {selectedProject.tools?.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono-tech text-neutral-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs text-neutral-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 shadow-lg shadow-cyan-500/20 transition-all"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs text-neutral-200 bg-neutral-900 border border-white/20 hover:border-white/40 transition-all"
                    >
                      <GithubIcon />
                      <span>VIEW REPOSITORY</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
