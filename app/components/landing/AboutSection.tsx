// components/AboutSection.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  MapPin,
  Globe,
  Coffee,
  Heart,
  Sparkles,
  Mail,
  Download,
  Terminal,
  Cpu,
  Shield
} from 'lucide-react';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia' },
    { icon: Globe, label: 'Languages', value: 'English, Amharic' },
    { icon: Coffee, label: 'Work Style', value: 'Remote-first' },
    { icon: Heart, label: 'Interests', value: 'Clean Code, UX Design' },
  ];

  const highlights = [
    { icon: Terminal, title: 'Systems Focused', text: 'Architecting robust backend systems that scale.' },
    { icon: Cpu, title: 'Modern Stack', text: 'Proficient in the latest React and Node.js ecosystems.' },
    { icon: Shield, title: 'Secure by Design', text: 'Prioritizing safety and performance in every line.' },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 bg-[#030712] overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Branding/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative blobs */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/30 rounded-full blur-[80px]" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/30 rounded-full blur-[80px]" />

              <div className="relative h-full w-full rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center mb-6 mx-auto text-4xl font-bold text-white shadow-2xl"
                  >
                    NS
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Nati Solomon</h3>
                  <p className="text-indigo-400 font-medium">Software Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-6"
              >
                <Sparkles size={14} />
                Professional Background
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-bold text-white mb-6"
              >
                Passionate about <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">solving complex problems.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed"
              >
                With over 4 years of experience, I&apos;ve dedicated my career to building
                meaningful digital products. I combine technical depth with a keen eye for
                product design to deliver experiences that are both robust and beautiful.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {personalInfo.map((info, i) => (
                <div key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{info.label}</p>
                    <p className="text-sm font-semibold text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 pt-6"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>
          </div>
        </div>

        {/* Highlight features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 border-t border-white/[0.05] pt-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <h.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{h.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;