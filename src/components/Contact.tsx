import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Send, Mail, Sparkles, CheckCircle2, MapPin, QrCode, X } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const socialCards = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: portfolioData.socialLinks.github,
      label: 'divakarprasanthrs-hue',
      color: 'hover:border-cyan-400 hover:text-cyan-300',
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: portfolioData.socialLinks.linkedin,
      label: 'divakarprasanth-sr',
      color: 'hover:border-blue-400 hover:text-blue-300',
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      href: portfolioData.socialLinks.instagram,
      label: portfolioData.socialLinks.instagramHandle,
      color: 'hover:border-pink-400 hover:text-pink-300',
      hasQr: true
    },
    {
      name: 'YouTube',
      icon: YoutubeIcon,
      href: portfolioData.socialLinks.youtube,
      label: 'Video Showcase Channel',
      color: 'hover:border-red-400 hover:text-red-300',
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/10 via-purple-600/10 to-transparent rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> GET IN TOUCH
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
          >
            LET'S BUILD <span className="text-gradient-cyan">SOMETHING GREAT.</span>
          </motion.h2>

          <p className="max-w-xl text-neutral-400 font-sans text-base mt-3">
            Open for internships, freelance projects, video editing inquiries, or tech collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Info & Socials (Left - 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Email Glass Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Direct Email</h3>
                  <p className="text-xs text-neutral-400 font-mono-tech">Fastest response rate</p>
                </div>
              </div>

              <a
                href={portfolioData.socialLinks.email}
                className="font-mono-tech text-sm font-semibold text-cyan-300 hover:underline break-all block"
              >
                {portfolioData.personalInfo.email}
              </a>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10 text-xs text-neutral-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{portfolioData.personalInfo.college} • {portfolioData.personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialCards.map((social) => {
                const IconComponent = social.icon;
                return (
                  <div
                    key={social.name}
                    className={`glass-panel rounded-2xl p-5 border border-white/10 ${social.color} transition-all duration-300 group flex flex-col justify-between relative`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <IconComponent />
                        <span className="text-[10px] font-mono-tech text-neutral-500 group-hover:text-neutral-300">
                          Visit ↗
                        </span>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-white">{social.name}</h4>
                        <p className="text-[11px] font-mono-tech text-neutral-400 truncate">{social.label}</p>
                      </div>
                    </a>

                    {social.hasQr && (
                      <button
                        onClick={() => setShowQrModal(true)}
                        className="mt-3 inline-flex items-center gap-1 text-[10px] font-mono-tech text-pink-400 hover:text-pink-300 pt-2 border-t border-white/5"
                      >
                        <QrCode className="w-3 h-3" />
                        <span>View Instagram QR</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form (Right - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-neutral-400 max-w-md">
                  Thank you for reaching out. Divakarprasanth will review your message and reply back shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-neutral-900 border border-white/20 text-xs font-mono-tech text-cyan-300 hover:border-cyan-400 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-heading font-bold text-2xl text-white mb-6">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-neutral-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-neutral-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-neutral-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, website idea, or video editing requirement..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-sm text-neutral-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 hover:from-cyan-300 hover:to-cyan-200 shadow-xl shadow-cyan-500/25 transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="animate-spin w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Instagram QR Code Modal */}
      <AnimatePresence>
        {showQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQrModal(false)}
              className="fixed inset-0 bg-neutral-950/85 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative glass-panel rounded-3xl p-6 border border-pink-500/30 max-w-sm w-full text-center z-10 bg-neutral-950 shadow-2xl"
            >
              <button
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="font-heading font-bold text-xl text-white mb-1">
                Instagram QR Code
              </h3>
              <p className="text-xs font-mono-tech text-pink-400 mb-4">
                {portfolioData.socialLinks.instagramHandle}
              </p>
              <div className="bg-white p-4 rounded-2xl inline-block shadow-xl mb-4">
                <img
                  src="/instagram-qr.png"
                  alt="Divakarprasanth Instagram QR"
                  className="w-56 h-56 object-contain"
                />
              </div>
              <div>
                <a
                  href={portfolioData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-display font-bold text-xs shadow-lg"
                >
                  Open Instagram Profile
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
