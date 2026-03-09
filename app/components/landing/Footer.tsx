// components/Footer.tsx (optional additional footer component)
'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020617] border-t border-white/[0.05] selection:bg-sky-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white mb-2">Nati Solomon</h2>
            <p className="text-gray-500 text-sm">Building digital excellence, one pixel at a time.</p>
          </div>

          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <a href="https://github.com/natisolomon26" className="hover:text-sky-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-sky-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Twitter</a>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-white hover:bg-sky-600 transition-all group shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600 uppercase tracking-widest">
          <p>© 2024 Nati Solomon. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Built with <Heart size={10} className="text-sky-500 fill-sky-500" /> by NS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;