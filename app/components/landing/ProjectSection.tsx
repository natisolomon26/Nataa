'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
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
  ArrowRight,
  Play,
  Share2,
  ThumbsUp,
  MoreVertical,
  Calendar,
  Tag
} from 'lucide-react';

// Simple project type
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  color: string;
  technologies: string[];
  features: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  featured: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Easter Evangelistic Outreach",
    description: "Registration and tracking platform for large-scale evangelistic events",
    longDescription: "Easter Evangelistic Outreach is a live, production-ready web platform designed to manage and track participant registrations across multiple universities and colleges. The system enables organizers to efficiently collect, monitor, and analyze attendee data in real time. Built for scalability and ease of use, it supports coordinated outreach efforts, ensuring smooth event logistics and data-driven decision-making.",
    category: "Full-Stack",
    image: "/projects/proj7.png",
    color: "from-blue-600 to-cyan-400",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "TailwindCSS"],
    features: [
      "Real-time registration tracking across multiple campuses",
      "Centralized dashboard for monitoring participant data",
      "Dynamic and responsive registration forms",
      "Data validation and structured data collection",
      "Scalable architecture for handling large user traffic",
      "Admin-level access for managing and reviewing submissions"
    ],
    links: {
      live: "https://eeo.evasue.net/",
      github: "https://github.com/natisolomon26/form.git"
    },
    featured: true
  },
  {
    id: 2,
    title: "ChurchFlow App",
    description: "Web App for managing church operations & community",
    longDescription: "ChurchFlow is a specialized CRM and management tool designed for modern ministry. It streamlines member communication, donation tracking, and event coordination, allowing church leaders to focus on their community rather than administrative overhead. Features advanced permission systems and multi-campus support.",
    category: "Full-Stack",
    image: "/projects/proj2.png",
    color: "from-emerald-500 to-teal-400",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "GraphQL"],
    features: [
      "Intelligent member management",
      "Automated donation tracking & tax receipts",
      "Dynamic event scheduling & calendar sync",
      "Integrated secure messaging platform"
    ],
    links: {
      live: "https://fares-theta.vercel.app/",
      github: "https://github.com/natisolomon26/fares"
    },
    featured: true
  },
  {
    id: 3,
    title: "AI Resume Builder",
    description: "AI-powered platform for creating professional resumes instantly",
    longDescription: "AI Resume Builder is an intelligent web application that helps users generate high-quality, tailored resumes in minutes. Leveraging AI, it suggests optimized content, improves wording, and formats resumes for maximum impact. Designed for job seekers who want to stand out, the platform simplifies resume creation while maintaining professional standards.",
    category: "Full-Stack",
    image: "/projects/proj8.png",
    color: "from-indigo-500 to-purple-500",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Node.js", "MongoDB"],
    features: [
      "AI-generated resume content tailored to job roles",
      "Real-time suggestions for improving wording and impact",
      "Multiple professional resume templates",
      "Instant PDF export and download",
      "User-friendly form-based resume builder",
      "Save and edit resumes anytime",
      "Keyword optimization for ATS (Applicant Tracking Systems)"
    ],
    links: {
      live: "https://ai-resume-nu-drab.vercel.app/",
      github: "https://github.com/natisolomon26/AI_Resume.git"
    },
    featured: true
  },
  {
    id: 4,
    title: "EvaSUE General Assembly",
    description: "Event registration and announcement management platform",
    longDescription: "EvaSUE General Assembly is a web-based platform designed to streamline event registration and communication for large organizational gatherings. It enables participants to easily register for events while providing administrators with tools to manage attendees and publish important announcements. The system ensures efficient coordination and clear communication between organizers and participants.",
    category: "Full-Stack",
    image: "/projects/proj3.png",
    color: "from-amber-500 to-orange-400",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "TailwindCSS"],
    features: [
      "Simple and responsive event registration system",
      "Centralized admin dashboard for managing participants",
      "Admin announcement posting system",
      "Real-time updates for event information",
      "Form validation and structured data handling",
      "Scalable design for large event participation"
    ],
    links: {
      live: "https://assemble-silk.vercel.app/",
      github: "https://github.com/natisolomon26/assemble.git"
    },
    featured: false
  },
  {
    id: 5,
    title: "EvaSUE Main Website",
    description: "Official organizational website with CRM email integration and donation system",
    longDescription: "EvaSUE Main Website is the official digital platform designed to represent and support the organization’s activities. It combines a modern, responsive frontend with integrated CRM email systems and a donation platform to streamline communication and financial contributions. The system enables efficient outreach, user engagement, and supporter management, providing a centralized hub for both visitors and administrators.",
    category: "Full-Stack",
    image: "/projects/proj4.png",
    color: "from-rose-500 to-red-400",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "EmailJS / CRM API"],
    features: [
      "Integrated CRM email system for automated communication",
      "Secure online donation system",
      "Responsive and modern UI/UX design",
      "Dynamic content management for organizational updates",
      "Optimized performance and SEO structure",
      "User engagement tracking and contact management"
    ],
    links: {
      live: "https://evasue.net",
      github: "https://github.com/natisolomon26/web.git"
    },
    featured: false
  },
  {
    id: 6,
    title: "Seminar Management",
    description: "Centralized control for seminar and event management",
    longDescription: "An all-in-one platform for planning and executing large-scale seminars. Features real-time participant tracking, interactive session polls, and speaker management tools. Designed for high availability and low-latency interactions during live events.",
    category: "Full-Stack",
    image: "/projects/proj5.png",
    color: "from-indigo-600 to-blue-500",
    technologies: ["Next.js", "Node.js", "Socket.io", "Prisma", "AWS"],
    features: [
      "Live registration & attendee tracking",
      "Real-time interactive session tools",
      "Automated participant certificates",
      "Post-event data analytics"
    ],
    links: {
      live: "https://seminars-kappa.vercel.app/",
      github: "https://github.com/natisolomon26/seminars"
    },
    featured: false
  },
  {
    id: 7,
    title: "EvaSUE Data Management Platform",
    description: "Centralized platform for ministry data collection and management across Ethiopia",
    longDescription: "Empowering Evangelical Mission Through Data, this platform is designed to support the Students' and Graduates' Union of Ethiopia with a sophisticated, centralized system for seamless regional data management and ministry optimization. It enables staff and administrators to efficiently collect, manage, and analyze data across multiple regions, improving coordination, visibility, and decision-making for ministry and administrative work nationwide.",
    category: "Full-Stack",
    image: "/projects/proj9.png",
    color: "from-green-500 to-emerald-400",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "TailwindCSS"],
    features: [
      "Dynamic form builder for customized data collection",
      "Drag-and-drop interface for creating forms without technical knowledge",
      "Centralized system for managing data across regions",
      "Role-based and region-based secure access control",
      "Structured campus ministry data collection and organization",
      "Scalable architecture for nationwide usage",
      "Real-time data access and management for administrators"
    ],
    links: {
      live: "https://dynamic-form-psi-five.vercel.app/",
      github: "https://github.com/natisolomon26/dynamic_form.git"
    },
    featured: true
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
  const [selectedProject, setSelectedProject] = useState<Project>(projectsData[0]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const listRef = useRef<HTMLDivElement>(null);

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  // Auto-select first project when category changes
  useEffect(() => {
    if (filteredProjects.length > 0 && !filteredProjects.find(p => p.id === selectedProject.id)) {
      setSelectedProject(filteredProjects[0]);
    }
  }, [activeCategory, filteredProjects, selectedProject.id]);

  return (
    <section className="relative py-24 bg-slate-950 min-h-screen overflow-hidden selection:bg-sky-500/30">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[10px] font-bold tracking-widest text-sky-200 uppercase">Interactive Case Studies</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Explorer.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300
                    ${isActive
                      ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                    }
                  `}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main YouTube Layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SIDE: Project List (Sidebar Style) */}
          <div className="lg:w-[400px] order-2 lg:order-1 flex-shrink-0">
            <div className="flex flex-col gap-4 max-h-[1000px] overflow-y-auto pr-2 custom-scrollbar" ref={listRef}>
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelectedProject(project)}
                    className={`
                      group relative flex gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300
                      ${selectedProject.id === project.id
                        ? 'bg-white/10 border border-white/10 shadow-xl'
                        : 'hover:bg-white/5 border border-transparent hover:border-white/5'
                      }
                    `}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-36 aspect-video rounded-xl overflow-hidden flex-shrink-0 bg-slate-900 border border-white/5">
                      <Image
                        src={imageErrors[project.id] ? PLACEHOLDER_IMAGE : project.image}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${selectedProject.id === project.id ? 'opacity-100' : 'opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100'}`}
                        onError={() => handleImageError(project.id)}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <h4 className={`text-sm font-bold truncate transition-colors ${selectedProject.id === project.id ? 'text-sky-400' : 'text-white'}`}>
                        {project.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1 line-clamp-1">
                        {project.category}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE: Featured Project (Video Player Style) */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="sticky top-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                >
                  {/* Huge Thumbnail / Video Container */}
                  <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl group/player">
                    <Image
                      src={imageErrors[selectedProject.id] ? PLACEHOLDER_IMAGE : selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Player Overlay Styling */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/player:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                    </div>
                  </div>

                  {/* Project Details Below "Video" */}
                  <div className="mt-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                          {selectedProject.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description & Metadata Section */}
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
                      <div className="lg:col-span-2 space-y-8">
                        {/* Description Box */}
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                          <p className="text-gray-300 text-lg leading-relaxed font-light">
                            {selectedProject.longDescription}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-6">
                          <h4 className="text-xl font-bold text-white flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-sky-400" /> Key Innovation Points
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {selectedProject.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                                </div>
                                <span className="text-sm text-gray-400 leading-snug">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-8">
                        {/* Status / Tech Section */}
                        <div className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Built With</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map(tech => (
                              <span key={tech} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300">
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                            {selectedProject.links.live && (
                              <a
                                href={selectedProject.links.live}
                                target="_blank"
                                className="flex items-center justify-between p-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white transition-all group/link"
                              >
                                <span className="font-bold flex items-center gap-2">
                                  <Globe className="w-4 h-4" /> Live Demo
                                </span>
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                              </a>
                            )}
                            {selectedProject.links.github && (
                              <a
                                href={selectedProject.links.github}
                                target="_blank"
                                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group/link"
                              >
                                <span className="font-bold flex items-center gap-2">
                                  <Github className="w-4 h-4" /> Source Code
                                </span>
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 1024px) {
          .custom-scrollbar {
            max-height: none;
            overflow-y: visible;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;