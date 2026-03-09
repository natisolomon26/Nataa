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
  Server,
  Palette,
  Atom,
  Bolt,
  Award,
  ChevronRight,
  Database
} from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techStack = [
    { name: 'React', icon: Atom, color: '#61DAFB' },
    { name: 'Node.js', icon: Server, color: '#339933' },
    { name: 'TypeScript', icon: Code2, color: '#3178C6' },
    { name: 'PostgreSQL', icon: Database, color: '#4169E1' },
    { name: 'Next.js', icon: Bolt, color: '#FFFFFF' },
    { name: 'Tailwind', icon: Palette, color: '#06B6D4' }
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#020617] selection:bg-sky-500/30"
    >
      {/* Premium Background: Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-sky-900/70 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-sky-600/20 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Left Content: Text Infrastructure */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-xs font-medium text-sky-300 uppercase tracking-widest">Available for hire</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8"
            >
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500">
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
            >
              I am a Full-stack Developer passionate about creating high-performance,
              scalable, and visually stunning web applications that solve real-world problems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-16"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-sky-600/20 overflow-hidden"
              >
                <div className="absolute inset-0 w-3 bg-white/20 transition-all duration-[400ms] -translate-x-full group-hover:translate-x-[600%]" />
                <span className="relative flex items-center gap-2">
                  Get in Touch
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-6 border-t border-white/5 pt-8"
            >
              {[
                { icon: Github, href: 'https://github.com/natisolomon26' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content: Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative"
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
          >
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[-20px] rounded-full border border-purple-500/5 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Profile Wrapper */}
              <div className="absolute inset-4 rounded-full overflow-hidden group border-2 border-white/10">
                <div className="absolute inset-0 bg-sky-600/10 group-hover:bg-transparent transition-colors duration-500" />
                <Image
                  src="/nati2.jpg"
                  alt="Nati Solomon"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  priority
                />

                {/* Floating Glass Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 -right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Experience</p>
                      <p className="text-sm font-bold text-white">4+ Years</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-12 -left-8 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center">
                      <Code2 className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Tech Stack</p>
                      <p className="text-sm font-bold text-white">Full Stack</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Tech Stack Orbit (Subtle) */}
              <div className="absolute inset-0 -m-12 hidden md:block">
                {techStack.map((tech, i) => {
                  const angle = (i * 360) / techStack.length;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-[#030712]/80 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-sky-500/50 transition-all duration-300 group cursor-default"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-240px) rotate(-${angle}deg)`
                      }}
                    >
                      <tech.icon size={24} />
                      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-sky-600 px-2 py-1 rounded">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;