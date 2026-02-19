// components/ProjectsSection.tsx
'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  ChevronRight,
  X,
  Eye,
  Calendar,
  Users,
  Star,
  GitBranch,
  Zap,
  Globe,
  Lock,
  Figma,
  Server,
  Smartphone,
  Palette,
  TrendingUp,
  Layers,
  Terminal,
  Cpu,
  Shield,
  Coffee,
  CheckCircle,
  Braces,
  Atom,
  Cloud,
  HardDrive,
  Container,
  Network,
  Rocket
} from 'lucide-react';

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  color: string;
  gradient: string;
  technologies: {
    name: string;
    icon: string;
    color: string;
  }[];
  features: string[];
  stats: {
    value: string;
    label: string;
    icon: string;
  }[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
    figma?: string;
  };
  team?: {
    size: number;
    role: string;
  };
  duration: string;
  year: number;
  impact: string;
}

// Icon mappings - using Lucide icons that exist
const techIcons: Record<string, React.ElementType> = {
  react: Atom,
  nextjs: Zap,
  typescript: Braces,
  nodejs: Server,
  python: Code2,  // Only one python entry
  docker: Container,
  aws: Cloud,
  graphql: Network,
  tailwind: Palette,
  framer: Sparkles,
  mongodb: HardDrive,
  postgresql: HardDrive,
  figma: Figma,
  vue: Code2,
  angular: Code2,
  sass: Palette,
  redux: GitBranch,
  jest: CheckCircle,
  cypress: Eye,
  django: Shield,
  fastapi: Zap,
  java: Coffee,
  spring: Shield,
  php: Code2,
  laravel: Rocket,
  mysql: HardDrive,
  redis: Zap,
  webrtc: Globe,
  websocket: Globe,
  mqtt: Network,
  embedded: Cpu,
  server: Server,
  globe: Globe,
};

const statIcons: Record<string, React.ElementType> = {
  users: Users,
  performance: Zap,
  satisfaction: Star,
  revenue: TrendingUp,
  pages: Layers,
  response: Zap,
  uptime: Globe,
  usersActive: Users,
  lock: Lock,
  trendingUp: TrendingUp,
};

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with machine learning insights",
    longDescription: "A comprehensive analytics dashboard that leverages machine learning to provide predictive insights and real-time data visualization. The platform processes millions of data points to deliver actionable business intelligence.",
    category: "fullstack",
    tags: ["React", "Node.js", "AI/ML", "Real-time"],
    image: "/projects/analytics-dashboard.jpg",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
    technologies: [
      { name: "React", icon: "react", color: "text-blue-400" },
      { name: "Next.js", icon: "nextjs", color: "text-white" },
      { name: "TypeScript", icon: "typescript", color: "text-blue-500" },
      { name: "Node.js", icon: "nodejs", color: "text-green-500" },
      { name: "Python", icon: "python", color: "text-yellow-500" },
      { name: "Docker", icon: "docker", color: "text-blue-400" },
    ],
    features: [
      "Real-time data streaming",
      "AI-powered predictions",
      "Customizable dashboards",
      "Automated reporting",
      "Team collaboration tools",
    ],
    stats: [
      { value: "10M+", label: "Data points", icon: "users" },
      { value: "99.9%", label: "Uptime", icon: "uptime" },
      { value: "500ms", label: "Response time", icon: "response" },
      { value: "50K+", label: "Active users", icon: "usersActive" },
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
      caseStudy: "/case-study/analytics",
    },
    team: {
      size: 4,
      role: "Lead Full-Stack Developer",
    },
    duration: "6 months",
    year: 2024,
    impact: "Increased client revenue by 40% through data-driven insights",
  },
  {
    id: 2,
    title: "EcoTrack Sustainability App",
    description: "Mobile-first platform for tracking carbon footprint",
    longDescription: "An innovative mobile application that helps individuals and businesses track and reduce their carbon footprint. Features include smart recommendations, progress tracking, and community challenges.",
    category: "mobile",
    tags: ["React Native", "GraphQL", "Mobile", "Green Tech"],
    image: "/projects/eco-track.jpg",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
    technologies: [
      { name: "React Native", icon: "react", color: "text-blue-400" },
      { name: "TypeScript", icon: "typescript", color: "text-blue-500" },
      { name: "GraphQL", icon: "graphql", color: "text-pink-500" },
      { name: "Node.js", icon: "nodejs", color: "text-green-500" },
      { name: "MongoDB", icon: "mongodb", color: "text-green-400" },
      { name: "Figma", icon: "figma", color: "text-purple-500" },
    ],
    features: [
      "Carbon footprint calculator",
      "Personalized recommendations",
      "Community challenges",
      "Progress visualization",
      "Social sharing",
    ],
    stats: [
      { value: "100K+", label: "Downloads", icon: "users" },
      { value: "4.8★", label: "App Store rating", icon: "satisfaction" },
      { value: "50K", label: "Trees planted", icon: "usersActive" },
      { value: "30%", label: "Avg. reduction", icon: "performance" },
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
      figma: "https://figma.com",
    },
    team: {
      size: 3,
      role: "Mobile Developer",
    },
    duration: "4 months",
    year: 2024,
    impact: "Helped users reduce 500+ tons of CO2 emissions",
  },
  {
    id: 3,
    title: "MediCare Telemedicine Platform",
    description: "Secure healthcare platform for remote consultations",
    longDescription: "A HIPAA-compliant telemedicine platform connecting patients with healthcare providers. Features include video consultations, secure messaging, prescription management, and electronic health records.",
    category: "fullstack",
    tags: ["Next.js", "WebRTC", "Healthcare", "Security"],
    image: "/projects/medicare.jpg",
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/10 via-pink-500/10 to-rose-500/10",
    technologies: [
      { name: "Next.js", icon: "nextjs", color: "text-white" },
      { name: "TypeScript", icon: "typescript", color: "text-blue-500" },
      { name: "WebRTC", icon: "webrtc", color: "text-red-400" },
      { name: "Node.js", icon: "nodejs", color: "text-green-500" },
      { name: "PostgreSQL", icon: "postgresql", color: "text-blue-400" },
      { name: "Docker", icon: "docker", color: "text-blue-500" },
    ],
    features: [
      "HD video consultations",
      "Secure messaging",
      "EHR integration",
      "Prescription management",
      "Payment processing",
    ],
    stats: [
      { value: "10K+", label: "Consultations", icon: "users" },
      { value: "100+", label: "Healthcare providers", icon: "usersActive" },
      { value: "99.9%", label: "Uptime", icon: "uptime" },
      { value: "HIPAA", label: "Compliant", icon: "lock" },
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
    team: {
      size: 5,
      role: "Full-Stack Developer",
    },
    duration: "8 months",
    year: 2023,
    impact: "Served 10,000+ patients across 3 countries",
  },
  {
    id: 4,
    title: "FinTech Investment Platform",
    description: "Modern investment dashboard with portfolio management",
    longDescription: "A comprehensive investment platform that democratizes access to financial markets. Features include real-time market data, portfolio tracking, automated investing, and educational resources.",
    category: "fullstack",
    tags: ["Vue.js", "Django", "Finance", "Real-time"],
    image: "/projects/fintech.jpg",
    color: "from-amber-500 to-orange-500",
    gradient: "from-amber-500/10 via-orange-500/10 to-red-500/10",
    technologies: [
      { name: "Vue.js", icon: "vue", color: "text-green-500" },
      { name: "Django", icon: "django", color: "text-green-600" },
      { name: "TypeScript", icon: "typescript", color: "text-blue-500" },
      { name: "PostgreSQL", icon: "postgresql", color: "text-blue-400" },
      { name: "Redis", icon: "redis", color: "text-red-500" },
      { name: "AWS", icon: "aws", color: "text-orange-500" },
    ],
    features: [
      "Real-time market data",
      "Portfolio analytics",
      "Automated investing",
      "Risk assessment",
      "Educational content",
    ],
    stats: [
      { value: "$50M+", label: "Assets managed", icon: "revenue" },
      { value: "25K+", label: "Active investors", icon: "users" },
      { value: "4.9★", label: "User rating", icon: "satisfaction" },
      { value: "15%", label: "Avg. return", icon: "trendingUp" },
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
      caseStudy: "/case-study/fintech",
    },
    team: {
      size: 6,
      role: "Lead Developer",
    },
    duration: "10 months",
    year: 2023,
    impact: "Managed $50M+ in assets with 25,000+ active users",
  },
  {
    id: 5,
    title: "Creative Portfolio Platform",
    description: "No-code portfolio builder for creatives",
    longDescription: "A platform that empowers creatives to build stunning portfolios without coding. Features drag-and-drop builder, customizable templates, and built-in SEO optimization.",
    category: "frontend",
    tags: ["React", "Tailwind", "No-code", "Drag-drop"],
    image: "/projects/portfolio-builder.jpg",
    color: "from-pink-500 to-rose-500",
    gradient: "from-pink-500/10 via-rose-500/10 to-red-500/10",
    technologies: [
      { name: "React", icon: "react", color: "text-blue-400" },
      { name: "Next.js", icon: "nextjs", color: "text-white" },
      { name: "Tailwind", icon: "tailwind", color: "text-cyan-400" },
      { name: "Framer", icon: "framer", color: "text-purple-400" },
      { name: "Redux", icon: "redux", color: "text-purple-500" },
    ],
    features: [
      "Drag-and-drop builder",
      "Custom templates",
      "SEO optimization",
      "Analytics dashboard",
      "Client management",
    ],
    stats: [
      { value: "15K+", label: "Portfolios built", icon: "pages" },
      { value: "4.7★", label: "User rating", icon: "satisfaction" },
      { value: "200+", label: "Templates", icon: "layers" },
      { value: "40%", label: "Time saved", icon: "performance" },
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
      figma: "https://figma.com",
    },
    team: {
      size: 2,
      role: "Frontend Developer",
    },
    duration: "3 months",
    year: 2024,
    impact: "Enabled 15,000+ creatives to showcase their work",
  },
  {
    id: 6,
    title: "Smart Home IoT Platform",
    description: "Centralized control for smart home devices",
    longDescription: "An IoT platform that connects and controls various smart home devices through a single interface. Features automation rules, energy monitoring, and voice control integration.",
    category: "iot",
    tags: ["IoT", "WebSocket", "Real-time", "Embedded"],
    image: "/projects/smart-home.jpg",
    color: "from-indigo-500 to-blue-500",
    gradient: "from-indigo-500/10 via-blue-500/10 to-cyan-500/10",
    technologies: [
      { name: "React", icon: "react", color: "text-blue-400" },
      { name: "Node.js", icon: "nodejs", color: "text-green-500" },
      { name: "WebSocket", icon: "websocket", color: "text-purple-400" },
      { name: "MQTT", icon: "mqtt", color: "text-orange-400" },
      { name: "Python", icon: "python", color: "text-yellow-500" },
      { name: "Docker", icon: "docker", color: "text-blue-500" },
    ],
    features: [
      "Device automation",
      "Energy monitoring",
      "Voice control",
      "Scene creation",
      "Mobile alerts",
    ],
    stats: [
      { value: "50+", label: "Device types", icon: "layers" },
      { value: "10K+", label: "Active users", icon: "users" },
      { value: "30%", label: "Energy savings", icon: "performance" },
      { value: "99.8%", label: "Uptime", icon: "uptime" },
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
    team: {
      size: 4,
      role: "Backend Developer",
    },
    duration: "7 months",
    year: 2023,
    impact: "Helped users save 30% on energy bills",
  },
];

// Category filters
interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
}

const categories: Category[] = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'fullstack', label: 'Full-Stack', icon: Code2 },
  { id: 'frontend', label: 'Frontend', icon: Palette },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'iot', label: 'IoT', icon: Cpu },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter projects by category
  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(p => p.category === category));
    }
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative min-h-screen py-20 overflow-hidden bg-gray-950"
    >
      {/* Background elements - matching hero and about sections */}
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
          className="absolute top-20 left-[8%] text-blue-400/10"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Code2 size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-[8%] text-purple-400/10"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Terminal size={48} />
        </motion.div>
        <motion.div
          className="absolute top-60 right-[15%] text-cyan-400/10"
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <Braces size={36} />
        </motion.div>
        <motion.div
          className="absolute bottom-60 left-[12%] text-pink-400/10"
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        >
          <Atom size={40} />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header - matching about section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/80">Featured Work</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Projects That{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Make an Impact
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            Exploring innovative solutions through code. Each project represents a unique
            challenge and learning experience.
          </p>
        </motion.div>

        {/* Category filters - refined */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => filterProjects(category.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative px-5 py-2.5 rounded-lg font-medium transition-all overflow-hidden ${
                activeCategory === category.id
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span className={`absolute inset-0 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'bg-white/5'
              } transition-all group-hover:bg-white/10`} />
              <span className="relative z-10 flex items-center gap-2 text-sm">
                <category.icon className="w-4 h-4" />
                {category.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer"
              >
                <div className="relative h-[360px] rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Image placeholder - replace with actual images */}
                  <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
                    <span className="text-white/10 text-7xl font-bold">{project.title[0]}</span>
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent p-5 flex flex-col justify-end">
                    {/* Category badge */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="mb-2"
                    >
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                        {project.category}
                      </span>
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="text-xl font-bold text-white mb-1"
                    >
                      {project.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white/60 text-xs mb-3 line-clamp-2"
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Tags */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25 }}
                      className="flex flex-wrap gap-1.5 mb-3"
                    >
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                    
                    {/* Hover overlay with quick actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={hoveredProject === project.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-1.5"
                    >
                      <button className="p-1.5 bg-white/10 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      {project.links.github && (
                        <button className="p-1.5 bg-white/10 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors">
                          <Github className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {project.links.live && (
                        <button className="p-1.5 bg-white/10 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-all"
          >
            View All Projects
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Project detail modal - refined */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
            >
              {/* Modal header with gradient */}
              <div className={`h-36 bg-gradient-to-r ${selectedProject.color} relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 p-1.5 bg-black/20 backdrop-blur-sm rounded-lg text-white hover:bg-black/40 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                
                <div className="absolute bottom-3 left-4">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/20 backdrop-blur-sm text-white mb-1`}>
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                </div>
              </div>

              {/* Modal content */}
              <div className="p-5 max-h-[60vh] overflow-y-auto">
                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {selectedProject.stats.map((stat, i) => {
                    const Icon = statIcons[stat.icon] || Star;
                    return (
                      <div key={i} className="text-center p-2 bg-white/5 rounded-lg">
                        <Icon className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <div className="text-sm font-bold text-white">{stat.value}</div>
                        <div className="text-[10px] text-white/50">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Description */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-1">Overview</h4>
                  <p className="text-white/70 text-xs leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                {/* Key features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-white/70">
                        <Zap className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => {
                      const Icon = techIcons[tech.icon] || Code2;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg"
                        >
                          <Icon className={`w-3 h-3 ${tech.color}`} />
                          <span className="text-xs text-white/80">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Project details */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <Calendar className="w-4 h-4 text-blue-400 mb-1" />
                    <div className="text-[10px] text-white/50">Duration</div>
                    <div className="text-xs font-medium text-white">{selectedProject.duration}</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <Users className="w-4 h-4 text-green-400 mb-1" />
                    <div className="text-[10px] text-white/50">Team Size</div>
                    <div className="text-xs font-medium text-white">{selectedProject.team?.size} people</div>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-4 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10">
                  <TrendingUp className="w-4 h-4 text-blue-400 mb-1" />
                  <div className="text-[10px] text-white/50">Impact</div>
                  <div className="text-xs font-medium text-white">{selectedProject.impact}</div>
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <Globe className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/10 text-white rounded-lg text-xs font-medium hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;