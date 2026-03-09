// components/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiJavascript,
  SiPython,
  SiAmazon,
  SiGraphql,
  SiPrisma,
  SiRedis,
  SiKubernetes,
  SiGit
} from 'react-icons/si';

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      ]
    },
    {
      title: "Backend & Core",
      description: "Designing scalable server-side architectures.",
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
      ]
    },
    {
      title: "Cloud & Databases",
      description: "Managing data and cloud infrastructure.",
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
        { name: 'Redis', icon: SiRedis, color: '#D82C20' },
      ]
    },
    {
      title: "Tools & DevOps",
      description: "Efficient development and deployment workflows.",
      skills: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      ]
    }
  ];

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-[#030712]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            Technical Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Powered by modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            I specialize in the whole product lifecycle, from frontend polish to backend scale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative p-2 rounded-xl bg-gray-900/50 border border-white/[0.05] group/skill"
                  >
                    <skill.icon
                      size={24}
                      style={{ color: skill.color }}
                      className="opacity-70 group-hover/skill:opacity-100 transition-opacity"
                    />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-indigo-600 text-[10px] text-white opacity-0 group-hover/skill:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;