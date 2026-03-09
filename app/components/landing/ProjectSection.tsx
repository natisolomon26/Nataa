// components/ProjectsSection.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
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

// Simple project type
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  color: string; // Keep this for modal header
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

// Simple projects data - keep color for modal
const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    description: "Real-time analytics platform with machine learning insights",
    longDescription: "A comprehensive analytics dashboard that leverages machine learning to provide predictive insights and real-time data visualization. The platform processes millions of data points to deliver actionable business intelligence for enterprise clients.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "AI/ML", "Real-time"],
    image: "/projects/proj1.png",
    color: "from-blue-500 to-cyan-500",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Docker"],
    features: [
      "Real-time data streaming",
      "AI-powered predictions",
      "Customizable dashboards",
      "Automated reporting",
      "Team collaboration"
    ],
    stats: [
      { value: "10M+", label: "Data points" },
      { value: "99.9%", label: "Uptime" },
      { value: "500ms", label: "Response time" }
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
      caseStudy: "/case-study/analytics"
    },
    year: 2024,
    featured: true
  },
  {
    id: 2,
    title: "ChurchFlow Website",
    description: "Web App for managing church operations",
    longDescription: "ChurchFlow is designed specifically for pastors to manage their church operations with ease. Focus on your ministry while we handle the administrative tasks.",
    category: "Full-Stack",
    tags: ["React Native", "GraphQL", "Mobile", "Green Tech"],
    image: "/projects/proj2.png",
    color: "from-green-500 to-emerald-500",
    technologies: ["React Native", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    features: [
      "Carbon footprint calculator",
      "Personalized recommendations",
      "Community challenges",
      "Progress visualization",
      "Social sharing"
    ],
    stats: [
      { value: "100K+", label: "Downloads" },
      { value: "4.8★", label: "Rating" },
      { value: "50K", label: "Trees planted" }
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
    title: "SentinelAuth\nAI-Driven Identity\nSecurity Platform",
    description: "Secure healthcare platform for remote consultations",
    longDescription: "A HIPAA-compliant telemedicine platform connecting patients with healthcare providers. Features include video consultations, secure messaging, prescription management, and electronic health records integration.",
    category: "Full-Stack",
    tags: ["Next.js", "WebRTC", "Healthcare", "Security"],
    image: "/projects/proj6.png",
    color: "from-purple-500 to-pink-500",
    technologies: ["Next.js", "TypeScript", "WebRTC", "Node.js", "PostgreSQL", "Docker"],
    features: [
      "HD video consultations",
      "Secure messaging",
      "EHR integration",
      "Prescription management",
      "Payment processing"
    ],
    stats: [
      { value: "10K+", label: "Consultations" },
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
    longDescription: "A comprehensive investment platform that democratizes access to financial markets. Features include real-time market data, portfolio tracking, automated investing, and educational resources for investors of all levels.",
    category: "Full-Stack",
    tags: ["Vue.js", "Django", "Finance", "Real-time"],
    image: "/projects/proj3.png",
    color: "from-amber-500 to-orange-500",
    technologies: ["Vue.js", "Django", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    features: [
      "Real-time market data",
      "Portfolio analytics",
      "Automated investing",
      "Risk assessment",
      "Educational content"
    ],
    stats: [
      { value: "$50M+", label: "Assets" },
      { value: "25K+", label: "Users" },
      { value: "4.9★", label: "Rating" }
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    },
    year: 2023,
    featured: false
  },
  {
    id: 5,
    title: "EvaSUE Website",
    description: "No-code portfolio builder for creatives",
    longDescription: "A platform that empowers creatives to build stunning portfolios without coding. Features drag-and-drop builder, customizable templates, and built-in SEO optimization for artists, designers, and photographers.",
    category: "Frontend",
    tags: ["React", "Tailwind", "No-code", "Drag-drop"],
    image: "/projects/proj4.png",
    color: "from-pink-500 to-rose-500",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    features: [
      "Drag-and-drop builder",
      "Custom templates",
      "SEO optimization",
      "Analytics dashboard",
      "Client management"
    ],
    stats: [
      { value: "15K+", label: "Portfolios" },
      { value: "4.7★", label: "Rating" },
      { value: "200+", label: "Templates" }
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    },
    year: 2024,
    featured: false
  },
  {
    id: 6,
    title: "Seminar Management System",
    description: "Centralized control for seminar management",
    longDescription: "A comprehensive platform for managing seminars and events. Features include registration tracking, speaker management, session scheduling, and participant analytics for seamless event organization.",
    category: "Full-Stack",
    tags: ["website", "WebSocket", "Real-time"],
    image: "/projects/proj5.png",
    color: "from-indigo-500 to-blue-500",
    technologies: ["Next.js", "Node.js"],
    features: [
      "Device automation",
      "Energy monitoring",
      "Voice control",
      "Scene creation",
      "Mobile alerts"
    ],
    stats: [
      { value: "50+", label: "Devices" },
      { value: "10K+", label: "Users" },
      { value: "30%", label: "Energy savings" }
    ],
    links: {
      live: "https://seminars-kappa.vercel.app/",
      github: "https://github.com/natisolomon26/seminars"
    },
    year: 2023,
    featured: false
  }
];

// Simple categories
const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'Full-Stack', label: 'Full-Stack' },
  { id: 'Frontend', label: 'Frontend' },
  { id: 'Mobile', label: 'Mobile' },
  { id: 'IoT', label: 'IoT' },
];

// Placeholder image for missing images
const PLACEHOLDER_IMAGE = '/projects/placeholder.jpg';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Handle image load error
  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  // Filter projects
  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section className="relative py-20 overflow-hidden bg-gray-950">
      {/* Background - matching other sections (unchanged) */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - unchanged */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/80">Featured Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Projects That{' '}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Make an Impact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Real-world solutions built with modern technologies
          </motion.p>
        </div>

        {/* Category filters - unchanged */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === category.id
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white'
                : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Featured projects - 2 columns */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                  setSelectedProject={setSelectedProject}
                  imageError={imageErrors[project.id]}
                  onImageError={handleImageError}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other projects - 3 columns */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              More Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                  setSelectedProject={setSelectedProject}
                  imageError={imageErrors[project.id]}
                  onImageError={handleImageError}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            imageError={imageErrors[selectedProject.id]}
            onImageError={handleImageError}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Updated Project Card with Image instead of gradient
const ProjectCard = ({
  project,
  index,
  hoveredId,
  setHoveredId,
  setSelectedProject,
  imageError,
  onImageError
}: {
  project: Project;
  index: number;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
  setSelectedProject: (project: Project) => void;
  imageError?: boolean;
  onImageError: (id: number) => void;
}) => {
  const isHovered = hoveredId === project.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setHoveredId(project.id)}
      onHoverEnd={() => setHoveredId(null)}
      onClick={() => setSelectedProject(project)}
      className="group relative cursor-pointer"
    >
      <div className="relative h-[450px] rounded-[40px] overflow-hidden bg-white/[0.02] border border-white/[0.05] group-hover:border-sky-500/30 transition-all duration-500 shadow-2xl">
        {/* Project Image */}
        <div className="absolute inset-0">
          <Image
            src={imageError ? PLACEHOLDER_IMAGE : project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            onError={() => onImageError(project.id)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-10 flex flex-col justify-end">
          {/* Header */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/10">
              {project.category}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Footer of Card */}
          <div className="flex items-center justify-between mt-4 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex gap-4">
              {project.stats.slice(0, 2).map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-tighter">{stat.label}</span>
                  <span className="text-sm font-bold text-white">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-600/20">
              <Eye size={20} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Updated Project Modal with Image in header
const ProjectModal = ({
  project,
  onClose,
  imageError,
  onImageError
}: {
  project: Project;
  onClose: () => void;
  imageError?: boolean;
  onImageError: (id: number) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full bg-gray-900 border border-white/10 rounded-xl overflow-hidden"
      >
        {/* Header with image - replaces gradient */}
        <div className="relative h-32 overflow-hidden">
          <Image
            src={imageError ? PLACEHOLDER_IMAGE : project.image}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => onImageError(project.id)}
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 bg-black/20 rounded-lg text-white hover:bg-black/40 transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-4 z-10">
            <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs text-white">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
          </div>
        </div>

        {/* Content - unchanged */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {project.stats.map((stat, i) => (
              <div key={i} className="text-center p-2 bg-white/5 rounded-lg">
                <div className="text-sm font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-1">Overview</h4>
            <p className="text-white/70 text-sm">{project.longDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
            <div className="grid sm:grid-cols-2 gap-1">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-1.5 text-white/70">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span className="text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-0.5 bg-white/10 rounded-lg text-xs text-white/80">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-lg text-xs font-medium"
              >
                <Globe className="w-3 h-3" />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
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
  );
};

export default ProjectsSection;