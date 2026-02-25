// components/SkillsSection.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Code2,
  Palette,
  Server,
  Cloud,
  Shield,
  Zap,
  Wrench,
  GitBranch,
  Terminal,
  Database,
  Globe,
  Smartphone,
  Braces,
  Atom,
  Bolt,
  Container,
  Network,
  HardDrive,
  Cpu,
  Layers,
  Rocket,
  Sparkles,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  BookOpen
} from 'lucide-react';

interface Skill {
  name: string;
  icon: any;
  level: number;
  category: string;
  color: string;
  description: string;
  years: string;
  projects: number;
  mastery: 'Expert' | 'Advanced' | 'Intermediate' | 'Learning';
}

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Mastery levels for skills
  const skills: Skill[] = [
    // Expert Level - Core technologies I've mastered
    {
      name: 'React',
      icon: Atom,
      level: 98,
      category: 'Frontend',
      color: 'from-blue-400 to-cyan-400',
      description: 'Building complex SPAs with hooks, context, and advanced patterns',
      years: '5+ years',
      projects: 30,
      mastery: 'Expert'
    },
    {
      name: 'Next.js',
      icon: Bolt,
      level: 95,
      category: 'Frontend',
      color: 'from-gray-300 to-gray-100',
      description: 'SSR, SSG, API routes, and full-stack applications',
      years: '4+ years',
      projects: 20,
      mastery: 'Expert'
    },
    {
      name: 'TypeScript',
      icon: Braces,
      level: 95,
      category: 'Frontend',
      color: 'from-blue-500 to-blue-600',
      description: 'Type-safe development with advanced generics',
      years: '4+ years',
      projects: 25,
      mastery: 'Expert'
    },
    {
      name: 'Node.js',
      icon: Server,
      level: 94,
      category: 'Backend',
      color: 'from-green-500 to-emerald-500',
      description: 'REST APIs, microservices, and serverless',
      years: '5+ years',
      projects: 28,
      mastery: 'Expert'
    },
    {
      name: 'Git',
      icon: GitBranch,
      level: 98,
      category: 'DevOps',
      color: 'from-orange-600 to-red-600',
      description: 'Version control, branching strategies, workflows',
      years: '5+ years',
      projects: 50,
      mastery: 'Expert'
    },
    
    // Advanced Level - Highly proficient
    {
      name: 'Tailwind CSS',
      icon: Palette,
      level: 92,
      category: 'Frontend',
      color: 'from-cyan-400 to-teal-400',
      description: 'Utility-first styling with custom configurations',
      years: '4+ years',
      projects: 35,
      mastery: 'Advanced'
    },
    {
      name: 'PostgreSQL',
      icon: Database,
      level: 88,
      category: 'Backend',
      color: 'from-blue-600 to-indigo-600',
      description: 'Complex queries, indexing, optimization',
      years: '4+ years',
      projects: 18,
      mastery: 'Advanced'
    },
    {
      name: 'Docker',
      icon: Container,
      level: 87,
      category: 'DevOps',
      color: 'from-blue-500 to-sky-500',
      description: 'Containerization, multi-stage builds',
      years: '3+ years',
      projects: 20,
      mastery: 'Advanced'
    },
    {
      name: 'GraphQL',
      icon: Network,
      level: 85,
      category: 'Backend',
      color: 'from-pink-500 to-rose-500',
      description: 'Apollo, schema design, optimization',
      years: '3+ years',
      projects: 12,
      mastery: 'Advanced'
    },
    {
      name: 'Python',
      icon: Code2,
      level: 86,
      category: 'Backend',
      color: 'from-yellow-500 to-amber-500',
      description: 'FastAPI, Django, data processing',
      years: '3+ years',
      projects: 15,
      mastery: 'Advanced'
    },
    
    // Intermediate Level - Solid working knowledge
    {
      name: 'AWS',
      icon: Cloud,
      level: 78,
      category: 'DevOps',
      color: 'from-orange-500 to-amber-500',
      description: 'EC2, S3, Lambda, cloud architecture',
      years: '2+ years',
      projects: 10,
      mastery: 'Intermediate'
    },
    {
      name: 'MongoDB',
      icon: HardDrive,
      level: 82,
      category: 'Backend',
      color: 'from-green-600 to-emerald-600',
      description: 'Schema design, aggregation pipelines',
      years: '3+ years',
      projects: 14,
      mastery: 'Intermediate'
    },
    {
      name: 'Framer Motion',
      icon: Sparkles,
      level: 80,
      category: 'Frontend',
      color: 'from-purple-400 to-pink-400',
      description: 'Smooth production animations',
      years: '2+ years',
      projects: 12,
      mastery: 'Intermediate'
    },
    {
      name: 'Jest',
      icon: Shield,
      level: 75,
      category: 'Tools',
      color: 'from-red-500 to-rose-500',
      description: 'Unit and integration testing',
      years: '2+ years',
      projects: 15,
      mastery: 'Intermediate'
    },
    
    // Learning - Currently expanding knowledge
    {
      name: 'Kubernetes',
      icon: Container,
      level: 60,
      category: 'DevOps',
      color: 'from-blue-600 to-indigo-600',
      description: 'Container orchestration',
      years: '1 year',
      projects: 3,
      mastery: 'Learning'
    },
    {
      name: 'Rust',
      icon: Cpu,
      level: 50,
      category: 'Backend',
      color: 'from-orange-600 to-red-600',
      description: 'Systems programming',
      years: '6 months',
      projects: 2,
      mastery: 'Learning'
    }
  ];

  // Categories for filtering
  const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Tools'];

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  // Group by mastery for the mastery grid
  const masteryLevels = ['Expert', 'Advanced', 'Intermediate', 'Learning'] as const;
  
  const getMasteryColor = (mastery: string) => {
    switch(mastery) {
      case 'Expert': return 'from-yellow-400 to-amber-400';
      case 'Advanced': return 'from-blue-400 to-purple-400';
      case 'Intermediate': return 'from-green-400 to-emerald-400';
      case 'Learning': return 'from-gray-400 to-slate-400';
      default: return 'from-blue-400 to-purple-400';
    }
  };

  // Auto-scrolling logo slider (infinite)
  const coreSkills = skills.filter(s => s.mastery === 'Expert' || s.mastery === 'Advanced');
  const doubledSkills = [...coreSkills, ...coreSkills]; // For seamless loop

  return (
    <section ref={containerRef} className="relative py-16 overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4"
        >
          <Award className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-white/80">Technologies I've Mastered</span>
        </motion.div>

        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Technical{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Expertise
          </span>
        </h3>
        <p className="text-white/60 max-w-2xl mx-auto">
          From expert-level mastery to continuous learning - here's my tech stack
        </p>
      </motion.div>

      {/* Company-style logo slider */}
      <div className="w-full overflow-hidden mb-16 py-8">
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />
          
          {/* Scrolling logos */}
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -1800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {doubledSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div className="relative">
                    {/* Logo container */}
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${skill.color} p-[2px]`}>
                      <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Tooltip on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredSkill === skill.name ? 1 : 0,
                        y: hoveredSkill === skill.name ? 0 : 10
                      }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 shadow-xl"
                    >
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-white/60">{skill.mastery}</div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mastery level indicators */}
        <div className="flex justify-center gap-6 mt-6">
          {masteryLevels.map(level => (
            <div key={level} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getMasteryColor(level)}`} />
              <span className="text-xs text-white/60">{level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category filter tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills grid by mastery level */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {masteryLevels.map(mastery => {
          const skillsInLevel = filteredSkills.filter(s => s.mastery === mastery);
          if (skillsInLevel.length === 0) return null;
          
          return (
            <div key={mastery} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-r ${getMasteryColor(mastery)}`} />
                <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                  {mastery} Level
                  {mastery === 'Expert' && <Star className="w-4 h-4 text-yellow-400" />}
                  {mastery === 'Advanced' && <TrendingUp className="w-4 h-4 text-blue-400" />}
                  {mastery === 'Intermediate' && <BookOpen className="w-4 h-4 text-green-400" />}
                  {mastery === 'Learning' && <Sparkles className="w-4 h-4 text-purple-400" />}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillsInLevel.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group relative p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        {/* Icon with gradient */}
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} p-[2px] flex-shrink-0`}>
                          <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="text-base font-semibold text-white truncate">
                              {skill.name}
                            </h5>
                            <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${getMasteryColor(mastery)} text-white`}>
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className="w-full h-1.5 bg-white/5 rounded-full mb-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                              className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                            />
                          </div>

                          {/* Stats */}
                          <div className="flex items-center gap-3 text-xs">
                            <span className="text-white/40">{skill.years}</span>
                            <span className="text-white/20">•</span>
                            <span className="text-white/40">{skill.projects} projects</span>
                          </div>

                          {/* Hover description */}
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                              opacity: hoveredSkill === skill.name ? 1 : 0,
                              height: hoveredSkill === skill.name ? 'auto' : 0
                            }}
                            className="mt-2 text-xs text-white/60"
                          >
                            {skill.description}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mastery summary card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-3xl mx-auto mt-12 px-4"
      >
        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 text-center">
          <h5 className="text-lg font-semibold text-white mb-2">Continuous Learning Journey</h5>
          <p className="text-sm text-white/60">
            From expert-level mastery in core technologies to actively exploring new frontiers in web development. 
            I believe in staying curious and continuously expanding my technical horizons.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">16+</div>
              <div className="text-xs text-white/40">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-xs text-white/40">Expert Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-xs text-white/40">Learning</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;