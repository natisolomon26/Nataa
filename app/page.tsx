// app/page.tsx
import HeroSection from '@/app/components/landing/HeroSection';
import AboutSection from './components/landing/AboutSection';
import ProjectsSection from './components/landing/ProjectSection';
import ContactSection from './components/landing/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}