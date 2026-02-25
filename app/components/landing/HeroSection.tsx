// components/HeroSection.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';
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

  // Generate stable random values using useMemo
  const particles = useMemo(() => {
    const colors = ['blue', 'purple', 'pink', 'cyan', 'green', 'orange', 'indigo'];
    const shades = [400, 500, 600];
    
    return Array.from({ length: 30 }, (_, i) => {
      // Use seeded random-like values based on index for consistency
      const colorIndex = (i * 7) % colors.length;
      const shadeIndex = (i * 5) % shades.length;
      const sizeBase = (i * 0.3) % 6;
      const posX = (i * 3.7) % 100;
      const posY = (i * 5.3) % 100;
      const durationBase = (i * 0.8) % 10;
      const delayBase = (i * 0.4) % 5;
      
      return {
        id: i,
        color: `bg-${colors[colorIndex]}-${shades[shadeIndex]}/30`,
        size: sizeBase + 4,
        position: {
          x: `${posX}%`,
          y: `${posY}%`,
        },
        duration: durationBase + 10,
        delay: delayBase,
        moveX: [0, (i * 3) % 60 - 30, (i * 7) % 60 - 30, 0],
        moveY: [0, (i * 5) % 60 - 30, (i * 9) % 60 - 30, 0],
      };
    });
  }, []); // Empty dependency array ensures this runs once

  // Colored blurred orbs with stable values
  const coloredBlobs = useMemo(() => [
    {
      color: 'bg-blue-500/30',
      size: 'w-[500px] h-[500px]',
      position: { x: '-10%', y: '-10%' },
      blur: 'blur-3xl',
      animation: {
        x: ['-10%', '-5%', '-15%', '-8%', '-12%', '-10%'],
        y: ['-10%', '-15%', '-5%', '-12%', '-8%', '-10%'],
        scale: [1, 1.2, 0.9, 1.1, 0.95, 1],
      },
      duration: 25,
    },
    {
      color: 'bg-purple-500/30',
      size: 'w-[600px] h-[600px]',
      position: { x: '60%', y: '20%' },
      blur: 'blur-3xl',
      animation: {
        x: ['60%', '68%', '55%', '72%', '58%', '60%'],
        y: ['20%', '12%', '28%', '15%', '25%', '20%'],
        scale: [1, 1.3, 0.8, 1.2, 0.9, 1],
      },
      duration: 30,
    },
    {
      color: 'bg-pink-500/20',
      size: 'w-[400px] h-[400px]',
      position: { x: '20%', y: '70%' },
      blur: 'blur-3xl',
      animation: {
        x: ['20%', '28%', '12%', '25%', '18%', '20%'],
        y: ['70%', '62%', '78%', '65%', '75%', '70%'],
        scale: [1, 0.8, 1.2, 0.9, 1.1, 1],
      },
      duration: 22,
    },
    {
      color: 'bg-cyan-500/20',
      size: 'w-[450px] h-[450px]',
      position: { x: '40%', y: '40%' },
      blur: 'blur-3xl',
      animation: {
        x: ['40%', '48%', '32%', '45%', '38%', '40%'],
        y: ['40%', '32%', '48%', '35%', '45%', '40%'],
        scale: [1, 1.1, 0.9, 1.15, 0.95, 1],
      },
      duration: 28,
    },
    {
      color: 'bg-green-500/20',
      size: 'w-[350px] h-[350px]',
      position: { x: '80%', y: '5%' },
      blur: 'blur-3xl',
      animation: {
        x: ['80%', '88%', '72%', '85%', '78%', '80%'],
        y: ['5%', '12%', '-2%', '8%', '2%', '5%'],
        scale: [1, 0.9, 1.2, 0.85, 1.1, 1],
      },
      duration: 20,
    },
    {
      color: 'bg-orange-500/20',
      size: 'w-[300px] h-[300px]',
      position: { x: '15%', y: '85%' },
      blur: 'blur-3xl',
      animation: {
        x: ['15%', '22%', '8%', '18%', '12%', '15%'],
        y: ['85%', '78%', '92%', '82%', '88%', '85%'],
        scale: [1, 1.3, 0.7, 1.2, 0.8, 1],
      },
      duration: 24,
    },
    {
      color: 'bg-indigo-500/25',
      size: 'w-[550px] h-[550px]',
      position: { x: '70%', y: '60%' },
      blur: 'blur-3xl',
      animation: {
        x: ['70%', '78%', '62%', '75%', '68%', '70%'],
        y: ['60%', '52%', '68%', '55%', '65%', '60%'],
        scale: [1, 0.8, 1.3, 0.9, 1.2, 1],
      },
      duration: 26,
    },
  ], []);

  // Tech icons with organic animations - all values are static
  const techIcons = useMemo(() => [
    // Frontend (left side)
    { 
      Icon: Braces, name: 'JavaScript', color: 'text-yellow-400', size: 36, 
      delay: 0, x: '8%', y: '15%',
      animation: {
        y: [0, -15, 10, -5, 0],
        x: [0, 8, -5, 3, 0],
        rotate: [0, 5, -5, 3, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      },
      duration: 6
    },
    { 
      Icon: Atom, name: 'React', color: 'text-cyan-400', size: 40, 
      delay: 1, x: '12%', y: '75%',
      animation: {
        y: [0, 12, -8, 5, 0],
        x: [0, -10, 7, -4, 0],
        rotate: [0, -8, 6, -3, 0],
        scale: [1, 0.95, 1.1, 1.02, 1],
      },
      duration: 7
    },
    { 
      Icon: Code2, name: 'TypeScript', color: 'text-blue-400', size: 38, 
      delay: 2, x: '5%', y: '45%',
      animation: {
        y: [0, -18, 12, -7, 0],
        x: [0, 12, -8, 5, 0],
        rotate: [0, 10, -7, 4, 0],
        scale: [1, 1.15, 0.9, 1.08, 1],
      },
      duration: 8
    },
    { 
      Icon: Palette, name: 'Tailwind', color: 'text-cyan-400', size: 34, 
      delay: 1.5, x: '15%', y: '30%',
      animation: {
        y: [0, 15, -12, 8, 0],
        x: [0, -15, 10, -6, 0],
        rotate: [0, -12, 8, -5, 0],
        scale: [1, 1.08, 0.92, 1.04, 1],
      },
      duration: 6.5
    },
    
    // Backend (right side)
    { 
      Icon: Server, name: 'Node.js', color: 'text-green-400', size: 40, 
      delay: 0.5, x: '88%', y: '20%',
      animation: {
        y: [0, -20, 15, -10, 0],
        x: [0, -12, 8, -5, 0],
        rotate: [0, 8, -12, 6, 0],
        scale: [1, 1.2, 0.85, 1.1, 1],
      },
      duration: 7.5
    },
    { 
      Icon: Database, name: 'PostgreSQL', color: 'text-blue-400', size: 36, 
      delay: 1.8, x: '92%', y: '60%',
      animation: {
        y: [0, 10, -18, 12, 0],
        x: [0, 15, -10, 8, 0],
        rotate: [0, -15, 10, -8, 0],
        scale: [1, 0.9, 1.18, 0.95, 1],
      },
      duration: 8.5
    },
    { 
      Icon: Cloud, name: 'AWS', color: 'text-orange-400', size: 38, 
      delay: 2.2, x: '85%', y: '80%',
      animation: {
        y: [0, -12, 18, -8, 0],
        x: [0, 18, -12, 7, 0],
        rotate: [0, 12, -8, 5, 0],
        scale: [1, 1.12, 0.88, 1.06, 1],
      },
      duration: 7
    },
    { 
      Icon: Code, name: 'Python', color: 'text-yellow-500', size: 36, 
      delay: 0.8, x: '95%', y: '40%',
      animation: {
        y: [0, 20, -15, 10, 0],
        x: [0, -18, 12, -8, 0],
        rotate: [0, -10, 15, -6, 0],
        scale: [1, 1.1, 0.92, 1.05, 1],
      },
      duration: 6.8
    },
    
    // DevOps & Tools (corners)
    { 
      Icon: Container, name: 'Docker', color: 'text-blue-500', size: 34, 
      delay: 1.2, x: '18%', y: '88%',
      animation: {
        y: [0, -25, 20, -15, 5, 0],
        x: [0, 20, -15, 10, -5, 0],
        rotate: [0, 15, -20, 10, -8, 0],
        scale: [1, 1.25, 0.8, 1.15, 0.9, 1],
      },
      duration: 9
    },
    { 
      Icon: GitBranch, name: 'Git', color: 'text-orange-400', size: 34, 
      delay: 2.5, x: '82%', y: '12%',
      animation: {
        y: [0, 18, -22, 14, -7, 0],
        x: [0, -20, 18, -12, 6, 0],
        rotate: [0, -18, 22, -14, 8, 0],
        scale: [1, 0.85, 1.2, 0.9, 1.1, 1],
      },
      duration: 8.2
    },
    { 
      Icon: Terminal, name: 'VS Code', color: 'text-blue-400', size: 32, 
      delay: 1.4, x: '10%', y: '60%',
      animation: {
        y: [0, -12, 25, -18, 8, 0],
        x: [0, 15, -20, 12, -6, 0],
        rotate: [0, 20, -15, 12, -5, 0],
        scale: [1, 1.18, 0.82, 1.12, 0.94, 1],
      },
      duration: 7.8
    },
    { 
      Icon: Network, name: 'GraphQL', color: 'text-pink-400', size: 34, 
      delay: 2, x: '90%', y: '90%',
      animation: {
        y: [0, 22, -18, 15, -10, 0],
        x: [0, -22, 18, -15, 8, 0],
        rotate: [0, -20, 18, -15, 10, 0],
        scale: [1, 0.88, 1.22, 0.92, 1.1, 1],
      },
      duration: 8.5
    },
    
    // Additional technologies
    { 
      Icon: Bolt, name: 'Next.js', color: 'text-white', size: 36, 
      delay: 1.6, x: '20%', y: '50%',
      animation: {
        y: [0, -15, 20, -12, 8, 0],
        x: [0, 8, -12, 6, -4, 0],
        rotate: [0, 5, -8, 4, -3, 0],
        scale: [1, 1.08, 0.92, 1.05, 0.98, 1],
      },
      duration: 7.2
    },
    { 
      Icon: HardDrive, name: 'MongoDB', color: 'text-green-400', size: 34, 
      delay: 2.4, x: '80%', y: '45%',
      animation: {
        y: [0, -18, 22, -14, 9, 0],
        x: [0, -12, 18, -10, 6, 0],
        rotate: [0, -10, 15, -8, 5, 0],
        scale: [1, 1.15, 0.85, 1.1, 0.95, 1],
      },
      duration: 8.8
    },
    { 
      Icon: Wrench, name: 'Webpack', color: 'text-blue-400', size: 30, 
      delay: 0.6, x: '25%', y: '70%',
      animation: {
        y: [0, 15, -20, 12, -6, 0],
        x: [0, 18, -15, 10, -5, 0],
        rotate: [0, 12, -18, 10, -5, 0],
        scale: [1, 0.9, 1.2, 0.95, 1.1, 1],
      },
      duration: 6.5
    },
    { 
      Icon: Globe, name: 'Vercel', color: 'text-white', size: 32, 
      delay: 2.8, x: '75%', y: '30%',
      animation: {
        y: [0, -20, 15, -18, 8, 0],
        x: [0, 15, -20, 12, -8, 0],
        rotate: [0, -15, 20, -12, 7, 0],
        scale: [1, 1.2, 0.8, 1.15, 0.9, 1],
      },
      duration: 7.5
    },
  ], []);

  const renderTechIcon = (tech: typeof techIcons[0], index: number) => {
    return (
      <motion.div
        key={`tech-${index}`}
        className="absolute cursor-pointer group"
        style={{
          left: tech.x,
          top: tech.y,
          zIndex: 10
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={tech.animation}
        transition={{
          duration: tech.duration,
          delay: tech.delay,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.5,
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
          
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {tech.name}
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* Animated colored blurred background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated blobs with organic movement */}
        {coloredBlobs.map((blob, index) => (
          <motion.div
            key={`blob-${index}`}
            className={`absolute rounded-full ${blob.color} ${blob.size} ${blob.blur}`}
            initial={blob.position}
            animate={blob.animation}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              left: blob.position.x,
              top: blob.position.y,
              filter: 'blur(60px)',
            }}
          />
        ))}

        {/* Floating particles with individual movement patterns */}
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className={`absolute rounded-full ${particle.color}`}
            style={{
              left: particle.position.x,
              top: particle.position.y,
              width: particle.size,
              height: particle.size,
              filter: 'blur(4px)',
            }}
            animate={{
              x: particle.moveX,
              y: particle.moveY,
              opacity: [0.3, 0.7, 0.3, 0.5, 0.3],
              scale: [1, 1.3, 0.7, 1.1, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-gray-950" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Mouse follower glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 0.5,
          }}
        />
      </div>

      {/* Floating tech icons with organic animations */}
      {techIcons.map((tech, index) => renderTechIcon(tech, index))}

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
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
              {/* Badge with glow effect */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white/80">Full-Stack Developer</span>
              </motion.div>

              {/* Main title with gradient animation */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Crafting{' '}
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text bg-[length:200%_200%]"
                >
                  Digital
                </motion.span>
                <br />
                Experiences
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/60 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Full-stack developer with 5+ years of experience building modern web applications.
              </motion.p>

              {/* Stats */}
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
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/40">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
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
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10">Let&apos;s Talk</span>
                  <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  <Code2 className="w-4 h-4" />
                  View Work
                </motion.a>
              </motion.div>

              {/* Social links */}
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
                    whileHover={{ y: -2, scale: 1.1 }}
                    className="p-2.5 bg-white/5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all backdrop-blur-sm"
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
                {/* Animated organic ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 0.9, 1.1, 1],
                    rotate: [0, 45, -30, 15, 0],
                    borderRadius: ['50%', '40%', '60%', '45%', '50%'],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-30"
                />
                
                {/* Profile image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
                  
                  <Image
                    src="/nati2.jpg"
                    alt="John Doe"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Tech icons around profile with organic movement */}
                {[
                  { icon: Braces, color: 'text-yellow-400', angle: 0, delay: 0 },
                  { icon: Atom, color: 'text-cyan-400', angle: 60, delay: 0.5 },
                  { icon: Server, color: 'text-green-400', angle: 120, delay: 1 },
                  { icon: Database, color: 'text-blue-400', angle: 180, delay: 1.5 },
                  { icon: Container, color: 'text-blue-500', angle: 240, delay: 2 },
                  { icon: Cloud, color: 'text-orange-400', angle: 300, delay: 2.5 },
                ].map((tech, i) => {
                  const angle = (tech.angle * Math.PI) / 180;
                  const radius = 130;
                  const baseX = 36 + radius * Math.cos(angle) - 10;
                  const baseY = 36 + radius * Math.sin(angle) - 10;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{ left: baseX, top: baseY }}
                      animate={{
                        x: [0, 10, -8, 5, 0],
                        y: [0, -8, 12, -5, 0],
                        scale: [1, 1.2, 0.8, 1.1, 1],
                        rotate: [0, 15, -20, 10, 0],
                      }}
                      transition={{
                        duration: 8,
                        delay: tech.delay,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.5 }}
                    >
                      <tech.icon size={20} className={tech.color} />
                    </motion.div>
                  );
                })}

                {/* Animated availability badge */}
                <motion.div
                  animate={{
                    y: [0, -5, 8, -3, 0],
                    scale: [1, 1.1, 0.95, 1.05, 1],
                    rotate: [0, -2, 3, -1, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
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

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 8, -3, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        >
          <ChevronDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;