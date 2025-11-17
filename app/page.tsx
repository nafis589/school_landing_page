
import { Preloader, HeroSection, AboutSection, AudienceSection, ProgramSection } from '@/components';

export default function Home() {
  return (
    <main className="font-helvetica font-normal text-white">
      <Preloader />
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <ProgramSection />
    </main>
  );
}
