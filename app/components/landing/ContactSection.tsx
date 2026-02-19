// components/ContactSection.tsx
'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  MessageSquare,
  Sparkles,
  Heart,
  Clock,
  Globe,
  Users,
  Award,
  Coffee,
  Zap,
  Copy,
  Check
} from 'lucide-react';

// Form validation schema
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState<string | null>(null);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  // Message presets for quick selection
  const messagePresets = [
    { id: 'project', label: 'Project Inquiry', icon: Zap, message: "I have an exciting project I'd like to discuss with you..." },
    { id: 'collab', label: 'Collaboration', icon: Users, message: "I'm interested in collaborating on a project together..." },
    { id: 'job', label: 'Job Opportunity', icon: Award, message: "I came across your portfolio and have a potential opportunity..." },
    { id: 'freelance', label: 'Freelance Work', icon: Coffee, message: "I'm looking for a developer for a freelance project..." },
  ];

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@john.dev',
      link: 'mailto:hello@john.dev',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San+Francisco+CA',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      label: 'Timezone',
      value: 'PST (UTC-8)',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  // Social links
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', username: '@johndoe' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', username: 'in/johndoe' },
  ];

  // Availability status
  const availability = {
    status: 'Available for work',
    responseTime: 'Usually responds within 24h',
  };

  // Validate form field
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Handle preset selection
  const handlePresetSelect = (presetId: string, presetMessage: string) => {
    setSelectedPreset(presetId);
    setFormData(prev => ({ ...prev, message: presetMessage }));
  };

  // Handle copy to clipboard
  const handleCopy = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSelectedPreset(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 overflow-hidden bg-gray-950"
    >
      {/* Background elements - matching other sections */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        
        {/* Subtle blue/purple glows */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Floating tech icons - subtle */}
        <motion.div
          className="absolute top-20 left-[10%] text-blue-400/10"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Mail size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-[10%] text-purple-400/10"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <MessageSquare size={48} />
        </motion.div>
        <motion.div
          className="absolute top-60 right-[20%] text-cyan-400/10"
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <Send size={36} />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header - matching other sections */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/80">Get in Touch</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Create Something
            </span>
            <br />
            Amazing Together
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s
            start a conversation.
          </p>
        </motion.div>

        {/* Availability badge - refined */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-white/80">{availability.status}</span>
            <span className="w-px h-3 bg-white/20" />
            <Clock className="w-3 h-3 text-white/40" />
            <span className="text-xs text-white/40">{availability.responseTime}</span>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column - Contact info & social */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Contact info cards - refined */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    target={item.label === 'Location' ? '_blank' : undefined}
                    rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}
                    whileHover={{ y: -3 }}
                    className="group relative p-5 rounded-xl bg-white/5 border border-white/10 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    
                    <div className="relative">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-2">
                        <Icon className="w-4 h-4 text-white/60" />
                      </div>
                      
                      <h3 className="text-xs text-white/40 mb-0.5">{item.label}</h3>
                      <p className="text-sm text-white font-medium mb-2">{item.value}</p>
                      
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleCopy(item.value, item.label);
                        }}
                        className="flex items-center gap-1 text-xs text-white/30 hover:text-white/50 transition-colors"
                      >
                        {copied === item.label ? (
                          <>
                            <Check className="w-3 h-3" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social links - refined */}
            <motion.div
              variants={itemVariants}
              className="p-5 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" />
                Connect
              </h3>
              
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="flex-1 flex items-center justify-center gap-2 p-2.5 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                    >
                      <Icon className="w-4 h-4 text-white/60" />
                      <span className="text-xs text-white/60">{social.username}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick stats - refined */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Globe className="w-5 h-5 text-blue-400 mb-2" />
                <p className="text-xl font-bold text-white">50+</p>
                <p className="text-xs text-white/40">Projects</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Users className="w-5 h-5 text-purple-400 mb-2" />
                <p className="text-xl font-bold text-white">30+</p>
                <p className="text-xs text-white/40">Clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            variants={itemVariants}
          >
            <div className="relative p-6 rounded-xl bg-white/5 border border-white/10">
              {/* Form header */}
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
                  Send a Message
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </h3>
                <p className="text-xs text-white/40">
                  Fill out the form and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Message presets - refined */}
              <div className="mb-5">
                <p className="text-xs text-white/40 mb-2">Quick templates:</p>
                <div className="flex flex-wrap gap-2">
                  {messagePresets.map((preset) => {
                    const Icon = preset.icon;
                    return (
                      <motion.button
                        key={preset.id}
                        onClick={() => handlePresetSelect(preset.id, preset.message)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all overflow-hidden ${
                          selectedPreset === preset.id
                            ? 'text-white'
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        <span className={`absolute inset-0 ${
                          selectedPreset === preset.id
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                            : 'bg-white/5 group-hover:bg-white/10'
                        } transition-colors`} />
                        <span className="relative z-10 flex items-center gap-1.5">
                          <Icon className="w-3 h-3" />
                          {preset.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Name field */}
                <div>
                  <label className="block text-xs text-white/40 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-sm text-white placeholder-white/20 focus:outline-none transition-all ${
                      errors.name
                        ? 'border-red-500/50'
                        : activeField === 'name'
                        ? 'border-blue-500/50'
                        : 'border-white/10'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-xs text-white/40 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-sm text-white placeholder-white/20 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-500/50'
                        : activeField === 'email'
                        ? 'border-blue-500/50'
                        : 'border-white/10'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs text-white/40 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-sm text-white placeholder-white/20 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-red-500/50'
                        : activeField === 'subject'
                        ? 'border-blue-500/50'
                        : 'border-white/10'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs text-white/40 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    rows={4}
                    className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-sm text-white placeholder-white/20 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-500/50'
                        : activeField === 'message'
                        ? 'border-blue-500/50'
                        : 'border-white/10'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Character count */}
                <div className="text-right text-[10px] text-white/20">
                  {formData.message.length}/500
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium overflow-hidden group disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="w-4 h-4" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Success/Error messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium">Message sent successfully!</p>
                        <p className="text-[10px] text-green-400/70">I'll respond within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium">Something went wrong</p>
                        <p className="text-[10px] text-red-400/70">Please try again or email me directly.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer note - refined */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12 text-white/20 text-xs"
        >
          <p>© 2024 John Doe. Built with Next.js, Tailwind, and Framer Motion</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;