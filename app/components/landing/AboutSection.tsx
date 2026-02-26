// components/AboutSection.tsx
'use client';

import { motion, useInView, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Code2,
  Brain,
  Award,
  Briefcase,
  Heart,
  Star,
  MapPin,
  Calendar,
  BookOpen,
  Coffee,
  Globe,
  Sparkles,
  Clock,
  Users,
  Target,
  Mail,
  Download,
  Wrench,
  Rocket,
  ChevronRight,
  TrendingUp,
  Palette,
  Server,
  Cloud,
  GitBranch
} from 'lucide-react';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Personal information
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Ethiopia, Addis Ababa', subtext: 'Available for remote' },
    { icon: Globe, label: 'Languages', value: 'English, Amharic, Oromo', subtext: 'Professional working' },
    { icon: Coffee, label: 'Work Style', value: 'Remote-first', subtext: 'Open to hybrid' },
    { icon: Heart, label: 'Passionate about', value: 'Clean code, UX', subtext: 'Continuous learning' },
  ];

  // Quick facts
  const quickFacts = [
    { icon: Clock, text: '4+ years coding', color: 'text-blue-400' },
    { icon: Coffee, text: '1000+ cups of coffee', color: 'text-amber-400' },
    { icon: Globe, text: 'Worked with 10+ countries', color: 'text-green-400' },
    { icon: BookOpen, text: '50+ tech books read', color: 'text-purple-400' },
  ];


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen py-20 sm:py-24 lg:py-32 overflow-hidden bg-gray-950"
    >
      {/* Animated background with colored blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/80">About Me</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Crafting{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Digital Excellence
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            Full-stack developer passionate about building beautiful, functional, 
            and scalable web applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Hero card - introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-6 mb-16"
        >
          {/* Main intro card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-blue-400" />
                  Hi, I&apos;m Nataa Solomon
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  I am a Full-Stack Developer with experience building modern, responsive, and scalable web applications. I
                  work with both front-end and back-end technologies, including JavaScript, React, Next.js, Node.js, and
                  databases like MongoDB and PostgreSQL. I enjoy creating user-friendly interfaces, writing clean code, and
                  solving real-world problems through technology
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.map((info, i) => {
                    const Icon = info.icon;
                    return (
                      <div key={i} className="flex items-start gap-2">
                        <div className="p-1.5 bg-white/5 rounded-lg">
                          <Icon className="w-3 h-3 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-xs text-white/40">{info.label}</div>
                          <div className="text-sm font-medium text-white">{info.value}</div>
                          <div className="text-xs text-white/40">{info.subtext}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Profile image placeholder */}
              <div className="lg:w-40 lg:h-40 w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto lg:mx-0">
                <span className="text-4xl font-bold text-white">NS</span>
              </div>
            </div>
          </motion.div>

          {/* Quick facts card */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
          >
            <h4 className="text-sm font-medium text-white/40 mb-4">Quick Facts</h4>
            <div className="space-y-4">
              {quickFacts.map((fact, i) => {
                const Icon = fact.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${fact.color}`} />
                    <span className="text-sm text-white/80">{fact.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 space-y-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium group"
              >
                Let&apos;s Talk
                <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Download CV
                <Download className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;