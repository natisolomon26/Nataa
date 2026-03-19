'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-8 pointer-events-none">
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between p-2 rounded-full border transition-all duration-500 pointer-events-auto ${scrolled
            ? 'bg-slate-950/60 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2 px-6'
            : 'bg-white/5 backdrop-blur-md border-white/5 py-4 px-8'
          }`}
      >
        {/* Logo Section */}
        <Link href="/" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-lg font-black text-white tracking-widest group-hover:text-sky-400 transition-colors">
              NATAA
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold ml-4">
            Solomon
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
          <div className="flex items-center relative gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors z-10"
              >
                {link.name}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-0"
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://github.com/natisolomon26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all"
          >
            <Github size={20} />
          </a>
          <Link
            href="#contact"
            className="group relative flex items-center gap-2 px-6 py-2.5 bg-sky-600 rounded-full text-white text-sm font-bold overflow-hidden hover:shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            Let's Talk
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Modern Full-screen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[90] bg-slate-950/90 flex flex-col items-center justify-center p-6 md:hidden"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-10 right-10 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white border border-white/10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-black text-white hover:text-sky-400 transition-colors tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex flex-col items-center gap-6"
            >
              <div className="flex gap-8 text-gray-400">
                <Github size={28} className="hover:text-white" />
              </div>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-8 py-4 rounded-full bg-sky-600 text-white font-bold text-lg"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
