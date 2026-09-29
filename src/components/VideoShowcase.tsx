import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import type { VideoReel } from '../data/portfolioData';
import { Play, Film, X, Volume2, Clock, Radio, Sliders } from 'lucide-react';

export const VideoShowcase: React.FC = () => {
  const [activeReel, setActiveReel] = useState<VideoReel | null>(null);

  return (
    <section id="video" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Cinematic Studio Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono-tech uppercase tracking-widest mb-3"
          >
            <Film className="w-3.5 h-3.5" /> CINEMATIC REEL & EDITING STUDIO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
          >
            EDIT. CREATE. <span className="text-gradient-purple">TELL STORIES.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-neutral-400 font-sans text-base mt-4"
          >
            “From raw footage to polished visual experiences.”
          </motion.p>
        </div>

        {/* Featured Video Studio Reel Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-purple-500/30 mb-16 shadow-2xl shadow-purple-950/40 relative overflow-hidden group"
        >
          {/* Top Timeline Decoration Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs font-mono-tech text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-purple-400 font-bold">
                <Radio className="w-3.5 h-3.5 animate-pulse text-rose-500" /> REC 00:45:12
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="hidden sm:inline text-neutral-300">4K DCI • 60 FPS</span>
            </div>
            <div className="flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-purple-400" />
              <span>PREMIERE PRO / AFTER EFFECTS</span>
            </div>
          </div>

          {/* Large Video Preview Canvas Area */}
          <div
            onClick={() => setActiveReel(portfolioData.videoReels[0])}
            className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden cursor-pointer group/preview bg-neutral-900 border border-white/10"
          >
            <img
              src={portfolioData.videoReels[0].thumbnail}
              alt={portfolioData.videoReels[0].title}
              className="w-full h-full object-cover group-hover/preview:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 rounded-full bg-purple-500/30 animate-ping" />
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover/preview:scale-110 transition-transform duration-300 border border-white/30">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
              </div>
            </div>

            {/* Bottom Details Banner */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-[10px] font-mono-tech font-bold text-purple-300 uppercase mb-2">
                  {portfolioData.videoReels[0].category}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
                  {portfolioData.videoReels[0].title}
                </h3>
                <p className="text-sm font-sans text-neutral-300 max-w-xl mt-1">
                  {portfolioData.videoReels[0].tagline}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-white/10 text-xs font-mono-tech text-neutral-300">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  {portfolioData.videoReels[0].duration}
                </span>
              </div>
            </div>
          </div>

          {/* Sound Waveform Decoration */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-mono-tech text-neutral-400">
              <Volume2 className="w-4 h-4 text-purple-400" />
              <span>Audio Stem Sync Active</span>
            </div>
            <div className="flex items-center gap-1">
              {[40, 75, 55, 90, 30, 85, 60, 95, 45, 70, 35, 80].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-purple-500/50 rounded-full animate-pulse"
                  style={{
                    height: `${h * 0.25}px`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.videoReels.slice(1).map((reel) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveReel(reel)}
              className="group cursor-pointer glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-neutral-950/80 backdrop-blur-md text-[10px] font-mono-tech font-bold text-purple-300 border border-white/10">
                    {reel.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors mb-1">
                  {reel.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                  {reel.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player Dialog */}
      <AnimatePresence>
        {activeReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReel(null)}
              className="fixed inset-0 bg-neutral-950/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/20 overflow-hidden shadow-2xl z-10"
            >
              <button
                onClick={() => setActiveReel(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-900/90 border border-white/20 text-neutral-300 hover:text-white hover:border-purple-400 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Display Container */}
              <div className="relative w-full aspect-video bg-neutral-950 flex items-center justify-center">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title={activeReel.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-6 bg-neutral-950 border-t border-white/10">
                <h3 className="font-heading font-bold text-2xl text-white mb-1">
                  {activeReel.title}
                </h3>
                <p className="text-sm font-mono-tech text-purple-400 mb-2">
                  {activeReel.tagline}
                </p>
                <p className="text-xs text-neutral-400">
                  {activeReel.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
