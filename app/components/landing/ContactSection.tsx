// components/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Copy,
  Check,
  ArrowUpRight
} from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Get environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are set
    if (!serviceId || !templateId || !publicKey) {
      setSubmitError('Email service not properly configured. Please email directly.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        name: formState.name,
        email: formState.email,
        subject: formState.subject || 'No subject',
        message: formState.message,
        to_email: 'nathadegefu@gmail.com',
        reply_to: formState.email,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('Email sent successfully:', result.text);

      // Success!
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitError(
        error instanceof Error
          ? `Failed to send: ${error.message}`
          : 'Failed to send message. Please try emailing directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactOptions = [
    {
      icon: Mail,
      label: 'Email Me',
      value: 'nathadegefu@gmail.com',
      href: 'mailto:nathadegefu@gmail.com',
      description: 'Typically reply within 24hrs'
    },
    {
      icon: Phone,
      label: 'Call Me',
      value: '+251 975 346 726',
      href: 'tel:+251975346726',
      description: 'Mon-Fri, 9am to 6pm'
    },
    {
      icon: MapPin,
      label: 'Visit Me',
      value: 'Addis Ababa, Ethiopia',
      href: 'https://maps.google.com/?q=Addis+Ababa',
      description: 'Available for remote work'
    }
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-[#020617]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left: Content & Links */}
          <div className="space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-widest mb-6"
              >
                <MessageCircle size={14} />
                Get in Touch
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-bold text-white mb-6"
              >
                Let&apos;s build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">extraordinary together.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed max-w-lg"
              >
                Whether you have a specific project in mind or just want to say hello,
                I&apos;m always open to discussing new opportunities and challenges.
              </motion.p>
            </div>

            {/* Contact Grid */}
            <div className="grid gap-6">
              {contactOptions.map((option, i) => (
                <motion.a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center justify-between p-6 rounded-[32px] bg-white/[0.02] border border-white/[0.05] hover:border-sky-500/30 hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform duration-500">
                      <option.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{option.label}</p>
                      <p className="text-lg font-bold text-white">{option.value}</p>
                      <p className="text-xs text-sky-400/60">{option.description}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-sky-400 group-hover:border-sky-400/50 transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              {[
                { icon: Github, href: 'https://github.com/natisolomon26' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/nataa-solomon-b0642b2b3?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                { icon: Instagram, href: 'https://instagram.com/natisolomon4' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-500/30 transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Modern Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 rounded-full blur-[80px] pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-white focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-white focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-white focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your vision..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-white focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>

              {/* Error Message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  {submitError}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-5 bg-sky-600 hover:bg-sky-500 disabled:bg-sky-800 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group relative overflow-hidden shadow-2xl shadow-sky-600/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity" />

                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} className="text-green-400" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Copy Email Helper */}
            <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Direct Email</p>
                <p className="text-sm font-bold text-white">nathadegefu@gmail.com</p>
              </div>
              <button
                onClick={() => copyToClipboard('nathadegefu@gmail.com')}
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-all flex items-center gap-2"
              >
                {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                <span className="text-xs font-medium">{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center"
              >
                Thank you! I'll get back to you soon. Check your inbox for confirmation.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;