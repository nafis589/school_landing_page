import About from '@/components/About_UI/AboutHero';
import AboutUs from '@/components/About_UI/AboutUs';
import TeamSection from '@/components/About_UI/TeamSection';
import react from 'react';

export default function AboutPage() {
  return (
     <main className="font-helvetica font-normal text-black bg-[#edf8ff]">
      <About />
      <AboutUs />
      <TeamSection />
     </main>
  );
}