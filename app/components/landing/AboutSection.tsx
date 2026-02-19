// components/AboutSection.tsx
'use client';

import { motion, useInView, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Palette,
  Rocket,
  Brain,
  Award,
  Briefcase,
  Heart,
  Star,
  Cpu,
  Shield,
  Zap,
  ChevronRight,
  ExternalLink,
  Terminal,
  CheckCircle,
  MapPin,
  Calendar,
  BookOpen,
  Coffee,
  Globe
} from 'lucide-react';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Stats data - typed
  interface Stat {
    value: string;
    label: string;
    icon: typeof Briefcase;
  }

  const stats: Stat[] = [
    { value: '5+', label: 'Years Experience', icon: Briefcase },
    { value: '50+', label: 'Projects Completed', icon: Rocket },
    { value: '30+', label: 'Happy Clients', icon: Heart },
    { value: '10+', label: 'Technologies', icon: Cpu },
  ];

  // Skills categories - typed
  interface Skill {
    category: string;
    icon: typeof Palette | typeof Globe | typeof Shield | typeof Zap;
    items: string[];
    color: string;
  }

  const skills: Skill[] = [
    {
      category: 'Frontend',
      icon: Palette,
      items: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: Globe,
      items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'DevOps & Tools',
      icon: Shield,
      items: ['Docker', 'AWS', 'CI/CD', 'Git/GitHub'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      category: 'Other',
      icon: Zap,
      items: ['UI/UX Design', 'Agile/Scrum', 'Testing', 'Performance'],
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  // Timeline data - typed
  interface TimelineItem {
    year: string;
    title: string;
    company: string;
    description: string;
    achievements: string[];
  }

  const timeline: TimelineItem[] = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading development of enterprise-scale applications',
      achievements: ['Architected microservices', 'Improved performance by 60%', 'Mentored 5 juniors']
    },
    {
      year: '2022',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple client projects',
      achievements: ['Shipped 15+ features', 'Reduced bugs by 40%', 'Implemented CI/CD']
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      description: 'Built responsive web applications',
      achievements: ['Created design system', 'Won best project award', 'Optimized load times']
    },
    {
      year: '2018',
      title: 'CS Graduate',
      company: 'University of Technology',
      description: 'Bachelor&apos;s in Computer Science',
      achievements: ['Graduated with honors', 'Built capstone project', 'Hackathon winner']
    }
  ];

  // Personal info
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
    { icon: Calendar, label: 'Experience', value: '5+ Years' },
    { icon: BookOpen, label: 'Education', value: 'B.Sc. Computer Science' },
    { icon: Coffee, label: 'Coffees/day', value: '3' },
  ];

  // Fixed variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen py-20 overflow-hidden bg-gray-950"
    >
      {/* Background elements - matching hero section */}
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
          className="absolute top-20 left-[5%] text-blue-400/10"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Code2 size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-[5%] text-purple-400/10"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Terminal size={40} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-[15%] text-cyan-400/10"
          animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <Brain size={30} />
        </motion.div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header - matching hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/80">About Me</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Crafting Code,{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Building Dreams
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            Passionate full-stack developer with a knack for creating elegant solutions
            and delightful user experiences.
          </p>
        </motion.div>

        {/* Personal info cards - new addition matching hero style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {personalInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="p-2 bg-white/5 rounded-lg">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-white/40">{item.label}</div>
                  <div className="text-sm font-medium text-white">{item.value}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats cards - refined */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon className="w-8 h-8 text-blue-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Brain className="w-6 h-6 text-blue-400" />
              My Journey
            </h3>
            
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                I am a Full-Stack Developer with experience building modern, responsive, and scalable web applications. I work with both front-end and back-end technologies, including JavaScript, React, Next.js, Node.js, and databases like MongoDB and PostgreSQL. I enjoy creating user-friendly interfaces, writing clean code, and solving real-world problems through technology.
              </p>
              <p>
                I can take a project from concept to deployment, including UI design, API development, database management, and cloud hosting. I am always learning new tools and improving my skills to deliver fast, reliable, and high-quality solutions.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Tech stack - refined */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-white/40 mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'GraphQL', 'Docker', 'AWS'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Quick highlights */}
            <div className="pt-2">
              <h4 className="text-sm font-medium text-white/40 mb-3">Quick Highlights</h4>
              <div className="space-y-2">
                {[
                  'Full-stack development expertise',
                  '5+ years industry experience',
                  '10+ successful projects delivered',
                  'Passionate about clean code'
                ].map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center gap-2 text-white/60"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Code2 className="w-6 h-6 text-purple-400" />
              Skills & Expertise
            </h3>

            <div className="grid gap-4">
              {skills.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="group relative p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-xl`} />
                    
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 bg-white/5 rounded">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <h4 className="font-medium text-white">{category.category}</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, i) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6 + idx * 0.1 + i * 0.05 }}
                            className="px-2.5 py-1 bg-white/10 rounded-md text-xs text-white/80"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional skills meter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10"
            >
              <h4 className="text-sm font-medium text-white mb-3">Proficiency</h4>
              <div className="space-y-3">
                {[
                  { skill: 'Frontend Development', level: 90 },
                  { skill: 'Backend Development', level: 85 },
                  { skill: 'Database Design', level: 80 },
                  { skill: 'DevOps & Cloud', level: 75 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">{item.skill}</span>
                      <span className="text-white/40">{item.level}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.level}%` } : {}}
                        transition={{ duration: 1, delay: 1 + i * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          i === 0 ? 'from-blue-500 to-cyan-500' :
                          i === 1 ? 'from-purple-500 to-pink-500' :
                          i === 2 ? 'from-amber-500 to-orange-500' :
                          'from-emerald-500 to-teal-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline section - refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mb-8">
            <Award className="w-6 h-6 text-amber-400" />
            Professional Journey
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            {/* Timeline items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                className={`relative flex flex-col sm:flex-row gap-6 mb-8 ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Year bubble */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs z-10 shadow-lg">
                  {item.year}
                </div>

                {/* Content */}
                <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <div className="ml-12 sm:ml-0 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-semibold text-white">{item.title}</h4>
                      <span className="text-xs text-white/40">{item.company}</span>
                    </div>
                    <p className="text-white/60 text-xs mb-3">{item.description}</p>
                    
                    <ul className="space-y-1.5">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-white/70">
                          <ChevronRight className="w-3 h-3 text-blue-400 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action - matching hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium group"
          >
            Let&apos;s Work Together
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;