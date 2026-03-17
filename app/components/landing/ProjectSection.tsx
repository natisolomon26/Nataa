'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  Github,
  X,
  Eye,
  Star,
  Globe,
  CheckCircle,
  Terminal,
  Code2,
  Cpu,
  Smartphone,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// Simple project type
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  color: string;
  technologies: string[];
  features: string[];
  stats: {
    value: string;
    label: string;
  }[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  year: number;
  featured: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    description: "Real-time analytics platform with machine learning insights",
    longDescription: "A comprehensive analytics dashboard that leverages machine learning to provide predictive insights and real-time data visualization. The platform processes millions of data points to deliver actionable business intelligence for enterprise clients.",
    category: "Full-Stack",
    tags: ["React", "AI/ML"],
    image: "/projects/proj1.png",
    color: "from-blue-600 to-cyan-400",
    technologies: ["React", "Next.js", "TypeScript", "Python", "Docker"],
    features: [
      "Real-time data streaming",
      "AI-powered predictions",
      "Customizable dashboards",
    ],
    stats: [
      { value: "10M+", label: "Data points" },
      { value: "99.9%", label: "Uptime" },
      { value: "500ms", label: "Response" }
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
    year: 2024,
    featured: true
  },
  {
    id: 2,
    title: "ChurchFlow App",
    description: "Web App for managing church operations & community",
    longDescription: "ChurchFlow is designed specifically for pastors to manage their church operations with ease. Focus on your ministry while we handle the administrative tasks.",
    category: "Full-Stack",
    tags: ["React", "GraphQL"],
    image: "/projects/proj2.png",
    color: "from-emerald-500 to-teal-400",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    features: [
      "Member management",
      "Donation tracking",
      "Event scheduling",
    ],
    stats: [
      { value: "100K+", label: "Users" },
      { value: "4.8★", label: "Rating" },
      { value: "50+", label: "Churches" }
    ],
    links: {
      live: "https://fares-theta.vercel.app/",
      github: "https://github.com/natisolomon26/fares"
    },
    year: 2024,
    featured: true
  },
  {
    id: 3,
    title: "SentinelAuth Security",
    description: "AI-Driven Identity Security Platform & Telemedicine",
    longDescription: "A HIPAA-compliant telemedicine platform connecting patients with healthcare providers. Features include video consultations, secure messaging, prescription management, and electronic health records integration.",
    category: "Security",
    tags: ["WebRTC", "Healthcare"],
    image: "/projects/proj6.png",
    color: "from-purple-600 to-pink-500",
    technologies: ["Next.js", "WebRTC", "PostgreSQL", "Docker"],
    features: [
      "HD video consultations",
      "Secure messaging",
      "EHR integration",
    ],
    stats: [
      { value: "10K+", label: "Consults" },
      { value: "100+", label: "Providers" },
      { value: "99.9%", label: "Uptime" }
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    },
    year: 2023,
    featured: true
  },
  {
    id: 4,
    title: "General Assembly",
    description: "Modern investment platform with portfolio management",
    longDescription: "A comprehensive investment platform that democratizes access to financial markets. Features include real-time market data, portfolio tracking, automated investing, and educational resources.",
    category: "Finance",
    tags: ["Vue.js", "Django"],
    image: "/projects/proj3.png",
    color: "from-amber-500 to-orange-400",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Redis"],
    features: [
      "Real-time market data",
      "Portfolio analytics",
      "Automated investing",
    ],
    stats: [
      { value: "$50M+", label: "Assets" },
      { value: "25K+", label: "Users" },
      { value: "4.9★", label: "Rating" }
    ],
    links: {
      live: "https://example.com",
    },
    year: 2023,
    featured: false
  },
  {
    id: 5,
    title: "EvaSUE Portfolio",
    description: "No-code portfolio builder for creatives",
    longDescription: "A platform that empowers creatives to build stunning portfolios without coding. Features drag-and-drop builder, customizable templates, and built-in SEO optimization.",
    category: "Frontend",
    tags: ["React", "Tailwind"],
    image: "/projects/proj4.png",
    color: "from-rose-500 to-red-400",
    technologies: ["React", "Next.js", "Tailwind", "Framer Motion"],
    features: [
      "Drag-and-drop builder",
      "Custom templates",
      "SEO optimization",
    ],
    stats: [
      { value: "15K+", label: "Sites" },
      { value: "4.7★", label: "Rating" },
      { value: "200+", label: "Templates" }
    ],
    links: {
      github: "https://github.com"
    },
    year: 2024,
    featured: false
  },
  {
    id: 6,
    title: "Seminar Management",
    description: "Centralized control for seminar and event management",
    longDescription: "A comprehensive platform for managing seminars and events. Features include registration tracking, speaker management, session scheduling, and participant analytics.",
    category: "Full-Stack",
    tags: ["WebSocket", "Real-time"],
    image: "/projects/proj5.png",
    color: "from-indigo-600 to-blue-500",
    technologies: ["Next.js", "Node.js", "Socket.io"],
    features: [
      "Registration tracking",
      "Session scheduling",
      "Participant analytics",
    ],
    stats: [
      { value: "50+", label: "Events" },
      { value: "10K+", label: "Attendees" },
      { value: "100%", label: "Satisfaction" }
    ],
    links: {
      live: "https://seminars-kappa.vercel.app/",
      github: "https://github.com/natisolomon26/seminars"
    },
    year: 2023,
    featured: false
  }
];

const categories = [
  { id: 'all', label: 'All Work', icon: Layers },
  { id: 'Full-Stack', label: 'Full-Stack', icon: Terminal },
  { id: 'Frontend', label: 'Frontend', icon: Code2 },
  { id: 'Security', label: 'Security', icon: Cpu },
  { id: 'Finance', label: 'Finance', icon: Smartphone },
];

const PLACEHOLDER_IMAGE = '/projects/placeholder.jpg';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section className="relative py-24 bg-slate-950 min-h-screen overflow-hidden selection:bg-sky-500/30">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-semibold tracking-wider text-sky-200 uppercase">Innovation Portfolio</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 w-[max-content]">Works.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-gray-400 font-light max-w-2xl"
            >
              A showcase of digital experiences blending aesthetic design with robust, modern engineering.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 md:justify-end"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    ${isActive 
                      ? 'bg-white text-gray-950 shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5 hover:border-white/20'
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-gray-950' : ''}`} />
                  {category.label}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[380px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Custom spanning logic for unique bento layout
              let spanClasses = "md:col-span-3 lg:col-span-4"; // Default
              
              if (index === 0) spanClasses = "md:col-span-6 lg:col-span-8"; // Featured large
              else if (index === 1) spanClasses = "md:col-span-3 lg:col-span-4 row-span-2"; // Tall
              else if (index === 2) spanClasses = "md:col-span-3 lg:col-span-4"; 
              else if (index === 3) spanClasses = "md:col-span-6 lg:col-span-4";
              else if (index === 4) spanClasses = "md:col-span-3 lg:col-span-4";
              else if (index === 5) spanClasses = "md:col-span-3 lg:col-span-4";

              // Override if filtered and few items
              if (activeCategory !== 'all') {
                 spanClasses = "md:col-span-3 lg:col-span-6";
              }

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={project.id}
                  className={`group relative rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors cursor-pointer ${spanClasses}`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Background */}
                  <Image
                    src={imageErrors[project.id] ? PLACEHOLDER_IMAGE : project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                    onError={() => handleImageError(project.id)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                   {/* Gradient Overlay tailored to project color */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  {/* Card Content */}
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                    <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex gap-2 mb-4">
                        {project.tags.slice(0,2).map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white/90 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 max-w-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                         {project.links.live && (
                           <span className="flex items-center gap-2 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full backdrop-blur-md transition-colors">
                             View Live <ArrowRight className="w-4 h-4" />
                           </span>
                         )}
                         <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors">
                            <Eye className="w-5 h-5 text-white" />
                         </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modern Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)} 
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Image */}
              <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto hidden md:block">
                 <Image
                    src={imageErrors[selectedProject.id] ? PLACEHOLDER_IMAGE : selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/90 lg:to-slate-950 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 lg:hidden" />
              </div>

              {/* Right Side: Details */}
              <div className="relative w-full lg:w-1/2 p-8 lg:p-12 overflow-y-auto custom-scrollbar">
                 <div className="mb-8">
                   <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4">
                     {selectedProject.category}
                   </span>
                   <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                     {selectedProject.title}
                   </h3>
                   <p className="text-gray-400 text-lg leading-relaxed">
                     {selectedProject.longDescription}
                   </p>
                 </div>

                 {/* Stats */}
                 <div className="grid grid-cols-3 gap-4 mb-10">
                   {selectedProject.stats.map((stat, i) => (
                     <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                       <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                       <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                     </div>
                   ))}
                 </div>

                 {/* Content Grid */}
                 <div className="grid sm:grid-cols-2 gap-8 mb-10">
                   <div>
                     <h4 className="text-white font-semibold flex items-center gap-2 mb-4">
                       <CheckCircle className="w-4 h-4 text-sky-400" /> Key Features
                     </h4>
                     <ul className="space-y-3">
                       {selectedProject.features.map((feature, i) => (
                         <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                           {feature}
                         </li>
                       ))}
                     </ul>
                   </div>
                   <div>
                     <h4 className="text-white font-semibold flex items-center gap-2 mb-4">
                       <Code2 className="w-4 h-4 text-purple-400" /> Tech Stack
                     </h4>
                     <div className="flex flex-wrap gap-2">
                       {selectedProject.technologies.map((tech, i) => (
                         <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-gray-300">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </div>

                 {/* Action Buttons */}
                 <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                   {selectedProject.links.live && (
                     <a
                       href={selectedProject.links.live}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-colors"
                     >
                       <Globe className="w-5 h-5" /> Visit Live Site
                     </a>
                   )}
                   {selectedProject.links.github && (
                     <a
                       href={selectedProject.links.github}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-colors"
                     >
                       <Github className="w-5 h-5" /> Source Code
                     </a>
                   )}
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;