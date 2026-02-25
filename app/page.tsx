// app/page.tsx
import HeroSection from '@/app/components/landing/HeroSection';
import AboutSection from './components/landing/AboutSection';
import SkillsSection from './components/landing/SkillsSection';
import ProjectsSection from './components/landing/ProjectSection';
import ContactSection from './components/landing/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}