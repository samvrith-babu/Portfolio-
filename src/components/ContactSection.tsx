import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Send, Check, Copy, Terminal, Shield, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Identification is required.';
    if (!formData.email.trim()) {
      errs.email = 'Return packet address (email) is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Invalid packet destination format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Payload content cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Payload must contain at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate encryption and sending transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090D14] border border-[#00FF9C]/30 text-xs font-mono text-[#00FF9C] mb-3">
            <span>[05 // SECURE TRANSMISSION]</span>
            <span className="text-slate-600">•</span>
            <span>DIRECT_CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            Initiate <span className="text-[#00FF9C]">Contact</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Whether for CTF collaborations, security projects, or networking, send an encrypted message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with 1-Click Copy */}
            <div className="p-5 rounded-xl bg-[#090D14]/90 border border-slate-800 hover:border-[#00FF9C]/50 transition-all backdrop-blur-md group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#05070A] border border-slate-800 group-hover:border-[#00FF9C]/40 transition-colors">
                    <Mail className="w-5 h-5 text-[#00FF9C]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Electronic Mail</div>
                    <div className="text-sm font-mono font-semibold text-white group-hover:text-[#00FF9C] transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-[#05070A] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors shrink-0 ml-2"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#00FF9C]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[#00FF9C] hover:underline flex items-center gap-1"
                >
                  &gt; Launch Mail Client
                </a>
                {copiedEmail && (
                  <span className="text-[11px] text-[#00FF9C]">Copied to buffer!</span>
                )}
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-xl bg-[#090D14]/90 border border-slate-800 hover:border-[#00E5FF]/50 transition-all backdrop-blur-md group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#05070A] border border-slate-800 group-hover:border-[#00E5FF]/40 transition-colors">
                  <Linkedin className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Professional Network</div>
                  <div className="text-sm font-mono font-semibold text-white group-hover:text-[#00E5FF] transition-colors">
                    Samvrith Babu P
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-mono text-[#00E5FF] flex items-center justify-between">
                <span>&gt; Open LinkedIn Profile</span>
                <span className="text-slate-400">External Node</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-xl bg-[#090D14]/90 border border-slate-800 hover:border-[#A855F7]/50 transition-all backdrop-blur-md group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#05070A] border border-slate-800 group-hover:border-[#A855F7]/40 transition-colors">
                  <Github className="w-5 h-5 text-[#A855F7]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Code Repositories</div>
                  <div className="text-sm font-mono font-semibold text-white group-hover:text-[#A855F7] transition-colors">
                    github.com/samvrith-babu
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-mono text-[#A855F7] flex items-center justify-between">
                <span>&gt; Browse Public Repositories</span>
                <span className="text-slate-400">Git Vault</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-[#090D14]/90 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#05070A] border border-slate-800">
                  <MapPin className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Operational Base</div>
                  <div className="text-sm font-mono font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-400 font-sans">
                Timezone: IST (UTC +5:30) • Available for remote and local academic hackathons.
              </div>
            </div>
          </div>

          {/* Right Column: Encrypted Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#090D14]/90 border border-slate-800 hover:border-[#00FF9C]/40 transition-colors overflow-hidden backdrop-blur-md shadow-2xl">
              {/* Form Terminal Header */}
              <div className="bg-[#0C121E] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9C]" />
                  <span className="text-xs font-mono text-slate-400 ml-1.5 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#00FF9C]" />
                    msg_dispatch_daemon
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#00FF9C] flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  AES_PAYLOAD_PROTECTED
                </div>
              </div>

              {/* Form Body or Success View */}
              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-10 text-center space-y-4 font-mono"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C] text-[#00FF9C] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,255,156,0.3)]">
                        <Check className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white">TRANSMISSION DELIVERED</h3>
                      <p className="text-xs text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
                        Your message packet has been securely dispatched to Samvrith Babu ({PERSONAL_INFO.email}). A response will be returned to your inbox shortly.
                      </p>
                      <div className="pt-4">
                        <button
                          onClick={resetForm}
                          className="px-5 py-2.5 rounded-lg bg-[#05070A] border border-slate-700 text-xs font-mono text-[#00FF9C] hover:border-[#00FF9C] transition-colors"
                        >
                          &gt; Send Another Transmission
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} className="space-y-4 font-mono">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-xs text-slate-400 mb-1.5">
                            Sender Identity <span className="text-[#00FF9C]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Alex Vance"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#05070A] border text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                              errors.name
                                ? 'border-red-500/80 focus:border-red-500'
                                : 'border-slate-800 focus:border-[#00FF9C]'
                            }`}
                          />
                          {errors.name && (
                            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-sans">
                              <AlertCircle className="w-3 h-3 shrink-0" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs text-slate-400 mb-1.5">
                            Return Destination (Email) <span className="text-[#00FF9C]">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. alex@securitylab.org"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#05070A] border text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                              errors.email
                                ? 'border-red-500/80 focus:border-red-500'
                                : 'border-slate-800 focus:border-[#00FF9C]'
                            }`}
                          />
                          {errors.email && (
                            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-sans">
                              <AlertCircle className="w-3 h-3 shrink-0" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-xs text-slate-400 mb-1.5">
                          Packet Subject
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. CTF Collaboration / Project Inquiry / Networking"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#05070A] border border-slate-800 focus:border-[#00E5FF] text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs text-slate-400 mb-1.5">
                          Encrypted Payload (Message) <span className="text-[#00FF9C]">*</span>
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Type your message, collaboration proposal, or query here..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-lg bg-[#05070A] border text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors font-sans leading-relaxed ${
                            errors.message
                              ? 'border-red-500/80 focus:border-red-500'
                              : 'border-slate-800 focus:border-[#00FF9C]'
                          }`}
                        />
                        {errors.message && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-sans">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 rounded-lg bg-[#00FF9C] text-[#05070A] font-mono font-bold text-xs hover:bg-[#00FF9C]/90 shadow-[0_0_15px_rgba(0,255,156,0.3)] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[#05070A] border-t-transparent rounded-full animate-spin" />
                            <span>DISPATCHING SECURE PACKET...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>TRANSMIT ENCRYPTED MESSAGE</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
