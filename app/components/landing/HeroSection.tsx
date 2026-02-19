// components/HeroSection.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Globe,
  Braces,
  Terminal,
  Database,
  Cloud,
  GitBranch,
  Code,
  Server,
  Palette,
  Wrench,
  Container,
  Network,
  HardDrive,
  Atom,
  Bolt,
  CheckCircle,
  Award,
  Users,
  ChevronRight
} from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Curated tech icons - fewer, more meaningful, with better positioning
  const techIcons = [
    // Frontend (left side)
    { Icon: Braces, name: 'JavaScript', color: 'text-yellow-400', size: 36, delay: 0, x: '8%', y: '15%' },
    { Icon: Atom, name: 'React', color: 'text-cyan-400', size: 40, delay: 1, x: '12%', y: '75%' },
    { Icon: Code2, name: 'TypeScript', color: 'text-blue-400', size: 38, delay: 2, x: '5%', y: '45%' },
    { Icon: Palette, name: 'Tailwind', color: 'text-cyan-400', size: 34, delay: 1.5, x: '15%', y: '30%' },
    
    // Backend (right side)
    { Icon: Server, name: 'Node.js', color: 'text-green-400', size: 40, delay: 0.5, x: '88%', y: '20%' },
    { Icon: Database, name: 'PostgreSQL', color: 'text-blue-400', size: 36, delay: 1.8, x: '92%', y: '60%' },
    { Icon: Cloud, name: 'AWS', color: 'text-orange-400', size: 38, delay: 2.2, x: '85%', y: '80%' },
    { Icon: Code, name: 'Python', color: 'text-yellow-500', size: 36, delay: 0.8, x: '95%', y: '40%' },
    
    // DevOps & Tools (corners)
    { Icon: Container, name: 'Docker', color: 'text-blue-500', size: 34, delay: 1.2, x: '18%', y: '88%' },
    { Icon: GitBranch, name: 'Git', color: 'text-orange-400', size: 34, delay: 2.5, x: '82%', y: '12%' },
    { Icon: Terminal, name: 'VS Code', color: 'text-blue-400', size: 32, delay: 1.4, x: '10%', y: '60%' },
    { Icon: Network, name: 'GraphQL', color: 'text-pink-400', size: 34, delay: 2, x: '90%', y: '90%' },
    
    // Additional key technologies (mid positions)
    { Icon: Bolt, name: 'Next.js', color: 'text-white', size: 36, delay: 1.6, x: '20%', y: '50%' },
    { Icon: HardDrive, name: 'MongoDB', color: 'text-green-400', size: 34, delay: 2.4, x: '80%', y: '45%' },
    { Icon: Wrench, name: 'Webpack', color: 'text-blue-400', size: 30, delay: 0.6, x: '25%', y: '70%' },
    { Icon: Globe, name: 'Vercel', color: 'text-white', size: 32, delay: 2.8, x: '75%', y: '30%' },
  ];

  // Floating code snippets - minimal and elegant
  const codeSnippets = [
    { content: '<dev />', color: 'text-purple-400/20', x: '30%', y: '25%' },
    { content: '{}', color: 'text-yellow-400/20', x: '70%', y: '75%' },
    { content: '() =>', color: 'text-green-400/20', x: '40%', y: '80%' },
    { content: 'import', color: 'text-blue-400/20', x: '60%', y: '20%' },
    { content: 'const', color: 'text-orange-400/20', x: '45%', y: '40%' },
    { content: 'export', color: 'text-pink-400/20', x: '55%', y: '60%' },
  ];

  const renderTechIcon = (tech: typeof techIcons[0], index: number) => {
    return (
      <motion.div
        key={`tech-${index}`}
        className="absolute cursor-pointer group"
        style={{
          left: tech.x,
          top: tech.y,
          zIndex: 5
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 0.9, 1],
          opacity: [0, 0.9, 0.7, 0.9],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 8,
          delay: tech.delay,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.3,
          opacity: 1,
          transition: { duration: 0.2 }
        }}
      >
        <div className="relative">
          <tech.Icon 
            size={tech.size} 
            className={`${tech.color} drop-shadow-lg filter brightness-110`}
            strokeWidth={1.5}
          />
          
          {/* Minimal tooltip on hover */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {tech.name}
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const renderCodeSnippet = (snippet: typeof codeSnippets[0], index: number) => {
    return (
      <motion.div
        key={`code-${index}`}
        className="absolute font-mono font-bold pointer-events-none"
        style={{
          left: snippet.x,
          top: snippet.y,
          zIndex: 1
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          y: [0, -5, 5, 0],
        }}
        transition={{
          duration: 10,
          delay: index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className={`${snippet.color} text-lg sm:text-xl md:text-2xl font-light`}>
          {snippet.content}
        </span>
      </motion.div>
    );
  };

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* Clean background with subtle gradient */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        
        {/* Subtle blue/purple glow */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Very subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Mouse follower glow - very subtle */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 0.8,
          }}
        />
      </div>

      {/* Floating tech icons - clean and visible */}
      {techIcons.map((tech, index) => renderTechIcon(tech, index))}

      {/* Floating code snippets - very subtle */}
      {codeSnippets.map((snippet, index) => renderCodeSnippet(snippet, index))}

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Simple badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10"
              >
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white/80">Full-Stack Developer</span>
              </motion.div>

              {/* Main title - clean and bold */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Crafting{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Digital
                </span>
                <br />
                Experiences
              </motion.h1>

              {/* Simple description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/60 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Full-stack developer with 5+ years of experience building modern web applications.
              </motion.p>

              {/* Stats - simple and clean */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-6 mb-8 justify-center lg:justify-start"
              >
                {[
                  { value: '5+', label: 'Years', icon: Award },
                  { value: '50+', label: 'Projects', icon: CheckCircle },
                  { value: '30+', label: 'Clients', icon: Users },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/40">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons - clean design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 group"
                >
                  Let's Talk
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  View Work
                </motion.a>
              </motion.div>

              {/* Social links - minimal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-3 mt-8 justify-center lg:justify-start"
              >
                {[
                  { Icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { Icon: Mail, href: 'mailto:hello@johndoe.dev', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-2.5 bg-white/5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column - Profile image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative w-72 h-72">
                {/* Simple gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-30" />
                
                {/* Profile image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
                  
                  {/* Placeholder - replace with your image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-5xl font-bold">JD</span>
                  </div>
                  
                  
                  <Image
                    src="/nati2.jpg"
                    alt="John Doe"
                    fill
                    className="object-cover"
                    priority
                  /> 
                </div>

                {/* Simple tech badges around profile */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {[
                    { icon: Braces, color: 'text-yellow-400', angle: 0 },
                    { icon: Atom, color: 'text-cyan-400', angle: 60 },
                    { icon: Server, color: 'text-green-400', angle: 120 },
                    { icon: Database, color: 'text-blue-400', angle: 180 },
                    { icon: Container, color: 'text-blue-500', angle: 240 },
                    { icon: Cloud, color: 'text-orange-400', angle: 300 },
                  ].map((tech, i) => {
                    const angle = (tech.angle * Math.PI) / 180;
                    const radius = 130;
                    const x = 36 + radius * Math.cos(angle) - 10;
                    const y = 36 + radius * Math.sin(angle) - 10;
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{ left: x, top: y }}
                      >
                        <tech.icon size={18} className={tech.color} />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Availability badge */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-1.5 rounded-full text-white text-xs font-medium whitespace-nowrap shadow-lg"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Available for work
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Simple scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;