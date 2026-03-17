import Navbar from '@/app/components/landing/Navbar';
import HeroSection from '@/app/components/landing/HeroSection';
import AboutSection from './components/landing/AboutSection';
import SkillsSection from './components/landing/SkillsSection';
import ProjectsSection from './components/landing/ProjectSection';
import ContactSection from './components/landing/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}