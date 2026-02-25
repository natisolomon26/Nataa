// components/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import {
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiSpringboot,
  SiLangchain,
  SiTailwindcss,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiGit,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiReact,
  SiNodedotjs,
  SiGraphql,
  SiKubernetes,
  SiFigma,
  SiJest,
  SiGithubactions,
  SiPrisma,
  SiTrpc,
  SiRedux,
  SiVuedotjs,
  SiAngular,
  SiVite,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiCypress,
  SiStorybook,
  SiTailwindcss as SiTailwind,
  SiSass,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGo,
  SiRust,
  SiRedis as SiRedisIcon,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiDigitalocean,
  SiLinux,
  SiNginx,
  SiApache,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiKibana,
  SiLogstash,
  SiRabbitmq as SiRabbitmqIcon,
  SiApachekafka,
  SiRedis as SiRedisCache,
  SiElasticstack,
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiDart,
  SiUnity,
  SiTensorflow,
  SiPytorch,
  SiOpenai
} from 'react-icons/si';

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const skills = [
    // Frontend
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Sass', icon: SiSass, color: '#CC6699' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
    { name: 'Babel', icon: SiBabel, color: '#F9DC3E' },
    
    // Backend
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Java', icon: SiJavascript, color: '#007396' },
    { name: 'Go', icon: SiGo, color: '#00ADD8' },
    { name: 'Rust', icon: SiRust, color: '#000000' },
    { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'tRPC', icon: SiTrpc, color: '#398CCB' },
    { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    
    // Databases
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Redis', icon: SiRedisIcon, color: '#D82C20' },
    { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571' } ,
    
    // DevOps & Cloud
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
    { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
    { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
    { name: 'Heroku', icon: SiHeroku, color: '#430098' },
    { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    { name: 'Nginx', icon: SiNginx, color: '#009639' },
    { name: 'Apache', icon: SiApache, color: '#D22128' },
    { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
    { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    
    // Monitoring & Tools
    { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
    { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
    { name: 'Kibana', icon: SiKibana, color: '#005571' },
    { name: 'Logstash', icon: SiLogstash, color: '#005571' },
    { name: 'RabbitMQ', icon: SiRabbitmqIcon, color: '#FF6600' },
    { name: 'Kafka', icon: SiApachekafka, color: '#231F20' },
    { name: 'Redis Cache', icon: SiRedisCache, color: '#DC382D' },
    
    // Testing & Quality
    { name: 'Jest', icon: SiJest, color: '#C21325' },
    { name: 'Cypress', icon: SiCypress, color: '#17202C' },
    { name: 'Storybook', icon: SiStorybook, color: '#FF4785' },
    { name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
    { name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
    
    // Mobile
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'Dart', icon: SiDart, color: '#0175C2' },
    { name: 'Swift', icon: SiSwift, color: '#F05138' },
    { name: 'Unity', icon: SiUnity, color: '#FFFFFF' },
    
    // AI/ML
    { name: 'LangChain', icon: SiLangchain, color: '#2196F3' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
    { name: 'OpenAI', icon: SiOpenai, color: '#412991' }
  ];

  // Duplicate skills multiple times for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-gray-950">
      {/* Background elements matching the site theme */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <div className="relative px-4 py-2 text-sm font-medium rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="relative z-10 text-white/80">Technologies I've mastered</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            A comprehensive collection of technologies I work with daily
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
          />
        </div>

        {/* Skills Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-20 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent" />

            {/* Slider container */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <motion.div
                className="flex"
                animate={{
                  x: [0, -2880],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                }}
              >
                <div className="flex shrink-0 items-stretch">
                  {duplicatedSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={`${skill.name}-${index}`}
                        className="group relative basis-1/8 shrink-0 px-6 flex items-center justify-center py-6"
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer">
                          <div className="relative">
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            {/* Icon container */}
                            <div className="relative grid place-items-center h-16 w-16 md:h-20 md:w-20 rounded-xl border border-white/10 bg-gray-900/50 backdrop-blur-sm transition-all group-hover:border-white/20 group-hover:bg-gray-800/50">
                              <Icon 
                                className="transition-all duration-200 group-hover:scale-125" 
                                style={{ color: skill.color }}
                                size={40}
                              />
                            </div>
                          </div>
                          
                          {/* Skill name */}
                          <span className="text-xs md:text-sm transition-colors text-white/40 group-hover:text-white">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-8 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">{skills.length}+</div>
            <div className="text-xs text-white/40">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">∞</div>
            <div className="text-xs text-white/40">Always Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-xs text-white/40">Coding</div>
          </div>
        </motion.div>

        {/* Hover hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-white/30 flex items-center justify-center gap-2">
            <span>✨</span>
            Hover over icons to see technology names
            <span>✨</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;