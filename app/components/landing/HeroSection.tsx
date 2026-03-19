// components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Sparkles,
  Code2
} from 'lucide-react';

// --- Types ---
interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

// --- Particle System Component ---
const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    const initPoints = () => {
      points.current = Array.from({ length: 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
      }));
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse attraction
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          p.vx += dx * 0.0001;
          p.vy += dy * 0.0001;
        }

        // Draw connections
        points.current.slice(i + 1).forEach(p2 => {
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist2 < 180) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.12 * (1 - dist2 / 180)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        // Draw point
        ctx.beginPath();
        ctx.fillStyle = dist < 250 ? '#38bdf8' : 'rgba(14, 165, 233, 0.4)';
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50 pointer-events-none" />;
};

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#010411] selection:bg-sky-500/30 pt-40 pb-20 px-6"
    >
      {/* EXTREME BACKGROUND */}
      <NeuralBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#010411] to-transparent pointer-events-none" />

      {/* Decorative grid with mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-30" />

      <motion.div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* CONTENT LEFT */}
          <div className="flex-1 space-y-8 text-center lg:text-left">

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block group"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative flex items-center gap-3 px-6 py-2.5 bg-[#020617] border border-white/10 rounded-xl text-sky-400 font-black uppercase tracking-[0.2em] text-[10px]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                SYTEMS_ONLINE // AVAILABLE FOR HIRE
              </div>
            </motion.div>

            {/* HEADLINE */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter"
              >
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_40px_rgba(14,165,233,0.4)] italic">
                  Digital Excellence
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex items-center justify-center lg:justify-start gap-6 text-gray-500 font-mono text-[10px] tracking-[0.3em] overflow-hidden"
              >
                <div className="h-[1px] bg-white/10 w-24 hidden lg:block" />
                <span className="flex-shrink-0 uppercase font-black">EST. 2021 // ADDIS ABABA, ET</span>
                <div className="h-[1px] bg-white/10 flex-grow" />
              </motion.div>
            </div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              I am a <span className="text-white font-medium border-b-2 border-sky-500/30">Full-stack Developer</span> passionate about creating <span className="italic text-sky-300">high-performance</span>, <span className="italic text-cyan-300">scalable</span>, and visually stunning web applications that solve <span className="text-white font-medium border-b-2 border-sky-500/30">real-world problems</span>.
            </motion.p>

            {/* ACTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8"
            >
              <a
                href="#contact"
                className="relative group px-12 py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                <div className="absolute inset-0 bg-sky-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white tracking-widest">
                  GET IN TOUCH
                  <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <div className="flex items-center gap-6">
                {[
                  { icon: Github, href: 'https://github.com/natisolomon26' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/nataa-solomon-b0642b2b3' },
                  { icon: Mail, href: 'mailto:nathadegefu@gmail.com' }
                ].map((item, i) => (
                  <a key={i} href={item.href} className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                    <item.icon size={26} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-[400px] mx-auto perspective-[1200px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "circOut" }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="relative aspect-square rounded-full overflow-hidden border-2 border-white/20 group shadow-[0_0_80px_rgba(14,165,233,0.15)] bg-[#030712] mx-auto"
              >
                <Image
                  src="/nati2.jpg"
                  alt="Nati"
                  fill
                  className="object-cover scale-110 group-hover:scale-105 transition-transform duration-2000 ease-out grayscale-[20%] group-hover:grayscale-0"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010411]/60 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-12 left-0 right-0 text-center space-y-2 px-10">
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles size={16} className="text-sky-400" />
                    <span className="text-sky-400 font-mono text-[10px] tracking-[0.4em] font-black uppercase">Identity // 002</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-none">NATA`A SOLOMON</h3>
                  <p className="text-gray-400 font-mono text-xs tracking-tight flex items-center justify-center gap-2">
                    <Code2 size={14} /> FULL-STACK DEVELOPER
                  </p>
                </div>

                {/* Interactive scanline effect */}
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.4),transparent)] animate-scanline-alt" />
              </motion.div>

              {/* Decorative particles behind circle */}
              <div className="absolute -inset-10 bg-sky-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* FOOTER SCROLL */}

      <style jsx global>{`
        @keyframes scanline-alt {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scanline-alt {
          animation: scanline-alt 4s linear infinite;
        }
        .perspective-1200 {
          perspective: 1200px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;